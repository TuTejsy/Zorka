import {
    createReducer,
    createNameRegex,
    createMiddleware,
    createRequestURL,
    createCollectionObserverChannel,
    createCollectionChangesObserverChannel,
} from './methods';

class Creator {
    static reducer = createReducer;
    static nameRegex = createNameRegex;
    static requestURL = createRequestURL;
    static middleware = createMiddleware;
    static collectionObserverChannel = createCollectionObserverChannel;
    static collectionChangesObserverChannel =
    createCollectionChangesObserverChannel;
}

export default Creator;
