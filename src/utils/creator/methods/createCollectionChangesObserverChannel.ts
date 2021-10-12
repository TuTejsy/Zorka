import { eventChannel, buffers, END } from 'redux-saga';

const createCollectionChangesObserverChannel = (collection, params = {}) => eventChannel((emitter) => {
    const observer = collection.find(params).observeChanges({
        added: (_id, fields) => {
            emitter({ added: { _id, ...fields } }); //eslint-disable-line
        },
        changed: (_id, fields) => {
            emitter({ changed: { _id, ...fields } });
        },
        removed: (_id) => {
            emitter({ removedId: _id });
        }
    });

    return () => { observer.stop(); };
}, buffers.expanding(1));

export default createCollectionChangesObserverChannel;