import Realm from 'realm';
import { Task } from 'redux-saga';

declare module global {
    interface Object {
        cloneZRK<T>(): T,
        isUint8Array: () => this is Uint8Array,
        isRealmObject: () => this is Realm.Object,
        isArrayBuffer: () => this is ArrayBuffer,
        isReduxSagaTask: () => this is Task,
    }

    let isAndroid: boolean;
    let isIos: boolean;
}
