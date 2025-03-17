const apiHost: string = process.env.REACT_APP_API_HOST ?? '127.0.0.1';
const apiPort: string = process.env.REACT_APP_API_PORT ?? '8000';

const apiConfig = {
    API_URL: `http://${apiHost}:${apiPort}/api`,
};

export default apiConfig;
