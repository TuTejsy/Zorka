import { CryptoCurrency } from 'database/types';

async function fetchAddressInfoForCrypto(crypto: CryptoCurrency) {
    const jsonRepsonse: BlockchyperResponse = await fetch(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${crypto.publicAddress}`
    ).then((response) => {
        const json = response.json();
        return json;
    });

    return jsonRepsonse;
}

export default fetchAddressInfoForCrypto;
