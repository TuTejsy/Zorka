
interface CreateSignedTransactionPropTypes {
    tx: TXObject,
    tosign: string,
    signature: string,
    publicKey: string,
}

function createSignedTransaction({
    tx,
    tosign,
    signature,
    publicKey,
}: CreateSignedTransactionPropTypes): Promise<TXSceletonObject> {
    return fetch(
        'https://api.blockcypher.com/v1/btc/test3/txs/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tx,
                tosign: [ tosign ],
                pubkeys: [ publicKey ],
                signatures: [ signature ],
            })
        }
    ).then((response) => {
        const json = response.json();
        return json;
    });
}

export default createSignedTransaction;
