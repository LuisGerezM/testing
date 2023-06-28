import LoginForm from '@/pages/Login/LoginForm';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
	LoginFormMock,
	LoginFormMockError
} from '../../../.jest/mocks/LoginForm.mock';
import axios from 'axios';

jest.mock('axios');
jest.mock('@/pages/Login/components/DisplayFormValues/index.jsx', () => ({
	__esModule: true, 
	default: () => <div>Mocked DisplayFormValues</div>
}));

describe('LoginForm', () => {
	afterEach(cleanup);
	afterEach(jest.clearAllMocks);
	beforeEach(() => {
		axios.post.mockResolvedValue({ data: LoginFormMock });
		render(<LoginForm />);
	});

	it('should two input exists at screen', async () => {

		const usernameInput = screen.getByRole('textbox', {
			name: /Nombre de usuario/i
		});
		const passwordInput = screen.getByLabelText(/Contraseña/i);

		expect(usernameInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();

		expect(usernameInput).toHaveValue('');
		expect(passwordInput).toHaveValue('');
	});

	it('should enable the submit button if the form values are valid', async () => {
		const usernameInput = screen.getByRole('textbox', {
			name: /Nombre de usuario/i
		});
		const passwordInput = screen.getByLabelText(/Contraseña/i);
		const submitButton = screen.getByRole('button', {
			name: /Iniciar Sesión/i
		});

		expect(submitButton).toBeDisabled();

		await userEvent.type(usernameInput, LoginFormMock.username);
		await userEvent.type(passwordInput, LoginFormMock.password);

		await waitFor(() => {
			expect(usernameInput).toHaveValue(LoginFormMock.username);
			expect(passwordInput).toHaveValue(LoginFormMock.password);
			expect(submitButton).toBeEnabled();
		});
	});

	it('should disable the submit button if the form values are invalid', async () => {
		const usernameInput = screen.getByRole('textbox', {
			name: /Nombre de usuario/i
		});
		const passwordInput = screen.getByLabelText(/Contraseña/i);
		const submitButton = screen.getByRole('button', {
			name: /Iniciar Sesión/i
		});

		await userEvent.type(usernameInput, LoginFormMockError.username);
		await userEvent.type(passwordInput, LoginFormMockError.password);

		await waitFor(() => {
			expect(usernameInput).toHaveValue(LoginFormMockError.username);
			expect(passwordInput).toHaveValue(LoginFormMockError.password);
			expect(
				screen.getByText(/Username no puede tener más de 12 caracteres/i)
			).toBeInTheDocument();
			expect(
				screen.getByText(
					/Password debe tener al menos una mayúscula, una minúscula y un caracter especial/i
				)
			).toBeInTheDocument();
			expect(submitButton).toBeDisabled();
		});
	});

	it('should call the onSubmit function when the submit button is clicked', async () => {
		const usernameInput = screen.getByRole('textbox', {
			name: /Nombre de usuario/i
		});
		const passwordInput = screen.getByLabelText(/Contraseña/i);
		const submitButton = screen.getByRole('button', {
			name: /Iniciar Sesión/i
		});

		expect(submitButton).toBeDisabled();

		await userEvent.type(usernameInput, LoginFormMock.username);
		await userEvent.type(passwordInput, LoginFormMock.password);

		await waitFor(() => {
			expect(submitButton).toBeEnabled();
		});

		await userEvent.click(submitButton);

		await waitFor(() => {
			expect(axios.post).toHaveBeenCalledTimes(1);
		});
	});

	it('should mock DisplayFormValues', () => {
		expect(screen.getByText('Mocked DisplayFormValues')).toBeInTheDocument();
	});
});
