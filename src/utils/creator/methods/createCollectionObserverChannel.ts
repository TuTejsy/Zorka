import { eventChannel, buffers, END } from 'redux-saga';

const createCollectionObserverChannel = (collection, params = {}) => eventChannel((emitter) => {
    const observer = collection.find(params).observe({
        added: (document) => {
            emitter({ document: document }); //eslint-disable-line
        },
        changed: (newDocument) => {
            emitter({ document: newDocument, isChanged: true });
        }
    });

    return () => { observer.stop(); };
}, buffers.expanding(1));

export default createCollectionObserverChannel;