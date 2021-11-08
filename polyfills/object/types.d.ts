import Realm from 'realm';
import { Task } from 'redux-saga';

declare global {
    interface Object {
        cloneSK<T>(): T,
        isUint8Array: () => this is Uint8Array,
        isRealmObject: () => this is Realm.Object,
        isArrayBuffer: () => this is ArrayBuffer,
        isReduxSagaTask: () => this is Task,
    }

}
