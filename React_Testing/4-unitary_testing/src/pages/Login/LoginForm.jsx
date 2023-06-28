import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from './schemas';
import { CustomButton, CustomInput } from '@/components';
import { DisplayFormValues } from './components';
import { callEndpoint } from './services';
import { Box } from '@mui/material';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isDirty, isValid }
	} = useForm({
		defaultValues: { username: '', password: '' },
		mode: 'onChange',
		resolver: yupResolver(LoginFormSchema)
	});

	const userNameWatch = watch('username');
	const passwordWatch = watch('password');

	const onSubmit = async data => {
		console.log({ data });
		const result = await callEndpoint(data);
		console.log({ result });
		reset();
	};

	return (
		<>
			<FormProvider {...{ register, errors }}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 1
						}}
					>
						<CustomInput
							name='username'
							label='Nombre de usuario'
							requiered={true}
						/>
						<CustomInput
							name='password'
							label='Contraseña'
							type='password'
							requiered={true}
						/>
						<CustomButton isDirty={isDirty} isValid={isValid} type='submit'>
							Iniciar Sesión
						</CustomButton>
					</Box>
				</form>
			</FormProvider>

			<DisplayFormValues
				isDirty={isDirty}
				isValid={isValid}
				values={{ username: userNameWatch, password: passwordWatch }}
			/>
		</>
	);
};
export default LoginForm;
