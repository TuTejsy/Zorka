import * as databaseOperations from './database';
import * as navigationOperations from './navigation';

export const operations = {
    ...databaseOperations,
    ...navigationOperations,
};
