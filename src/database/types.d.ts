declare module 'realm' {
    interface Configuration {
        deleteCache: (dbInstance: Realm) => void;
    }
}
