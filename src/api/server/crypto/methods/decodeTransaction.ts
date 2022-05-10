
function decodeTransaction(txHex: string): Promise<TXObject> {
    return fetch(
        'https://api.blockcypher.com/v1/btc/test3/txs/decode', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tx: txHex,
            })
        }
    ).then((response) => {
        const json = response.json();
        return json;
    });
}

export default decodeTransaction;
