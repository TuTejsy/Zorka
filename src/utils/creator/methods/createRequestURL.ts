import { WALLETS_API_URL } from 'appConstants';

function createRequestURL(method: string, params: {[key: string]: string}, domen: string = WALLETS_API_URL) {
    const paramsURLComponents = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`);
    const paramsURL = paramsURLComponents.length > 0 ? `?${paramsURLComponents.join('&')}` : '';

    return `${domen}${method}${paramsURL}`;
}

export default createRequestURL;
