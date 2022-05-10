async function fetchBlockchainInfo(crypto: CryptoCurrency) {
    const jsonRepsonse: Blockchain = await fetch(
        'https://api.blockcypher.com/v1/btc/test3'
    ).then((response) => {
        const json = response.json();
        return json;
    });

    return jsonRepsonse;
}

export default fetchBlockchainInfo;
