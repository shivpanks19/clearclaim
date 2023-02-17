module.exports = {
	apps: [
		{
			name: 'frontend-app',
			script: 'npm start',
			watch: false,
			force: true,
			env: {
				PORT: 3000,
				NEXT_PUBLIC_REST_SERVER_BASE_URL: 'http://localhost:4500/api/'
			},
		},
	],
};