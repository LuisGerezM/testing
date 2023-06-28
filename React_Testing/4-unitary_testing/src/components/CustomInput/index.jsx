import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const formValidation = (errors, errorKey) => {
	return errors[errorKey] ? (
		<Typography color='red'>{errors[errorKey].message}</Typography>
	) : (
		''
	);
};

const CustomInput = ({
	name = '',
	label = '',
	type = 'text',
	disabled = false,
	required = false
}) => {
	const { register, errors } = useFormContext();
	return (
		<div>
			<TextField
				type={type}
				required={required}
				disabled={disabled}
				error={errors && !!errors[name]}
				id={name}
				label={label}
				variant='outlined'
				{...register(name)}
			/>
			{errors && formValidation(errors, name)}
		</div>
	);
};
export default CustomInput;
