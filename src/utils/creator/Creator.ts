import {
    createReducer,
    createNameRegex,
    createMiddleware,
    createRequestURL,
    createNameForDuplicate,
    createCollectionObserverChannel,
    createCollectionChangesObserverChannel,
} from './methods';

class Creator {
    static reducer = createReducer;
    static nameRegex = createNameRegex;
    static requestURL = createRequestURL;
    static middleware = createMiddleware;
    static nameForDuplicate = createNameForDuplicate;
    static collectionObserverChannel = createCollectionObserverChannel;
    static collectionChangesObserverChannel =
    createCollectionChangesObserverChannel;
}

export default Creator;
