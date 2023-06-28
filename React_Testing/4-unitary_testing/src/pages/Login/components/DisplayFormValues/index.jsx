import { Box, Typography } from '@mui/material';

const DisplayFormValues = ({ isDirty, isValid, values }) => {
	return (
		<Box color='grey.600' at='10px'>
			{isDirty && !isValid && (
				<>
					<Typography>Username: {values.username}</Typography>
					<Typography>Pass: {values.password}</Typography>
				</>
			)}
		</Box>
	);
};
export default DisplayFormValues;
