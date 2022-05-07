import { Creator } from 'appUtils';

async function getEWalletById(walletId: string) {
    const response = await fetch(Creator.requestURL('getEWalletById', {
        walletId
    }));

    const result: {
        eWallet: string
    } | undefined = await response.json();

    return result?.eWallet;
}

export default getEWalletById;
