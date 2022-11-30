export const formatErrorMesage = (error: any) => {
	const strapiErrors = error?.response?.data?.data?.errors;
	let errorMessage;

	if (typeof strapiErrors === 'object') {
		const errorProperty = strapiErrors[Object.keys(strapiErrors)[0]];
		errorMessage = Array.isArray(errorProperty) ? errorProperty[0] : errorProperty.toString();
	}

	if (!errorMessage) {
        
		errorMessage = 'Something went wrong!';
	}
	return errorMessage;
};
