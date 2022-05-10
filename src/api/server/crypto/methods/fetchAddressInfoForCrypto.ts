async function fetchAddressInfoForCrypto(crypto: CryptoCurrency) {
    const jsonRepsonse: Address = await fetch(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${crypto.publicAddress}/full`
    ).then((response) => {
        const json = response.json();
        return json;
    });

    return jsonRepsonse;
}

export default fetchAddressInfoForCrypto;
