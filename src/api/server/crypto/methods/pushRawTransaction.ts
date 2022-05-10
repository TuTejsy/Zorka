

function pushRawTransaction(transaction: string): Promise<TX> {
    return fetch(
        'https://api.blockcypher.com/v1/btc/test3/txs/push', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tx: transaction,
            })
        }
    ).then((response) => {
        const json = response.json();
        return json;
    });
}

export default pushRawTransaction;
