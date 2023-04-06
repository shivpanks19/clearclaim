// import axios, { AxiosError, AxiosResponse } from 'axios';
// import toCamelCase from '@/utils/toCamelCase';

// const instance = axios.create({
// 	baseURL: process.env.NEXT_PUBLIC_REST_SERVER_BASE_URL,
// 	timeout: 10000,
// 	headers: {
// 		'Accept': 'application/json',
// 		'content-type': 'application/json'
// 	}
// });

// const requestFailureCallback = (url: string, error: AxiosError): any => {
// 	if (error.response) {
// 		console.log(
// 			`Request Failed for ${url}: The request was made and the server responded with erroneous status code`,
// 			error.response.data
// 		);
// 	}
// 	else if (error.request) {
// 		console.log(`Request Failed for ${url}: The request was made but no response was received`);
// 	}
// 	else {
// 		console.log(`Error due to bad request configuration for ${url}`, error.message);
// 	}
// 	throw error;
// };

// const camelizeKeys = (obj: Record<string, any>): any => {
// 	if (Array.isArray(obj)) {
// 		return obj.map(v => camelizeKeys(v));
// 	}
// 	else if (obj != null && obj.constructor === Object) {
// 		return Object.keys(obj).reduce(
// 			(result, key) => ({
// 				...result,
// 				[toCamelCase(key)]: camelizeKeys(obj[key])
// 			}),
// 			{}
// 		);
// 	}
// 	return obj;
// };

// const get = (url: string, params?: Record<string, any>): Promise<any> => {
// 	console.log('URL', url);
// 	console.log('process.env.NEXT_PUBLIC_REST_SERVER_BASE_URL', process.env.NEXT_PUBLIC_REST_SERVER_BASE_URL);
// 	return instance.get(url, {
// 		params
// 	}).then(
// 		(response: AxiosResponse) => camelizeKeys(response.data)
// 	).catch(
// 		(error: AxiosError) => requestFailureCallback(url, error)
// 	);
// };

// const post = (url: string, params?: Record<string, any>, data?: Record<string, any>): Promise<any> => {
// 	return instance.post(url, data, {
// 		params
// 	}).then(
// 		(response: AxiosResponse) => camelizeKeys(response.data)
// 	).catch(
// 		(error: AxiosError) => requestFailureCallback(url, error)
// 	);
// };

// export {
// 	get,
// 	post
// };

import toCamelCase from '@/utils/toCamelCase';

const BASE_URL = process.env.NEXT_PUBLIC_REST_SERVER_BASE_URL;

interface CustomError extends Error {
	response?: Response;
}

const requestFailureCallback = (url: string, error: Error): any => {
	console.log(`Request Failed for ${ url }: ${ error.message }`);
	throw error;
};

const camelizeKeys = (obj: Record<string, any>): any => {
	if (Array.isArray(obj)) {
		return obj.map((v) => camelizeKeys(v));
	} else if (obj != null && obj.constructor === Object) {
		return Object.keys(obj).reduce(
			(result, key) => ({
				...result,
				[toCamelCase(key)]: camelizeKeys(obj[key]),
			}),
			{}
		);
	}
	return obj;
};

const get = async (url: string, params?: Record<string, any>): Promise<any> => {
	const query = new URLSearchParams(params).toString();
	console.log('cx', `${BASE_URL}/${url}?${query}`)
	const response = await fetch(`${BASE_URL}/${url}?${query}`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});

	if (!response.ok) {
		console.log('we', response.statusText)
		const error: CustomError = new Error(response.statusText);
		error.response = response;
		requestFailureCallback(url, error);
	}

	const data = await response.json();
	return camelizeKeys(data);
};

const post = async (
	url: string,
	params?: Record<string, any>,
	data?: Record<string, any>
): Promise<any> => {
	const query = new URLSearchParams(params).toString();
	const response = await fetch(`${BASE_URL}/${url}?${query}`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const error: CustomError = new Error(response.statusText);
		error.response = response;
		requestFailureCallback(url, error);
	}

	const responseData = await response.json();
	return camelizeKeys(responseData);
};

export { get, post };