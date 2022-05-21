import { CryptoDB, TransactionsDB } from 'appDatabase';

function dropAndCloseLocalDB() {
    CryptoDB.dropDatabase();
    TransactionsDB.dropDatabase();

    CryptoDB.close();
    TransactionsDB.close();
}

export default dropAndCloseLocalDB;
