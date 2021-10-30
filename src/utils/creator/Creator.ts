import {
    createReducer,
    createNameRegex,
    createMiddleware,
    createNameForDuplicate,
    createCollectionObserverChannel,
    createCollectionChangesObserverChannel,
} from './methods';

class Creator {
    static reducer = createReducer;
    static nameRegex = createNameRegex;
    static middleware = createMiddleware;
    static nameForDuplicate = createNameForDuplicate;
    static collectionObserverChannel = createCollectionObserverChannel;
    static collectionChangesObserverChannel =
        createCollectionChangesObserverChannel;
}

export default Creator;
