interface CreateTransactionSceletonPropTypes {
    inputAddress: string,
    outputAddress: string,
    valueInSatoshi: number,

    preference?: Preference
}

function createTransactionSceleton({
    inputAddress,
    outputAddress,
    valueInSatoshi,

    preference = 'medium',
}: CreateTransactionSceletonPropTypes): Promise<TXSceletonObject> {
    return fetch(
        'https://api.blockcypher.com/v1/btc/test3/txs/new?includeToSignTx=true', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                preference,
                inputs: [ { addresses: [ inputAddress ] } ],
                outputs: [ { addresses: [ outputAddress ], value: valueInSatoshi } ],
            })
        }
    ).then((response) => {
        const json = response.json();
        return json;
    });
}

export default createTransactionSceleton;
