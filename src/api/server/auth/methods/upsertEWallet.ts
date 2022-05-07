import { Creator } from 'appUtils';

async function upsertEWallet(walletId: string, eWallet: string) {
    const response = await fetch(Creator.requestURL('upsertEWallet', {
        eWallet,
        walletId,
    }));

    return response;
}

export default upsertEWallet;
