type Preference = 'high' | 'medium' | 'low';

interface Address {
    n_tx: number,
    tx_url: string,
    address: string,
    balance: number,
    final_n_tx: number,
    total_sent: number,
    final_balance: number,
    total_received: number,
    unconfirmed_n_tx: number,
    unconfirmed_balance: number,

    txs?: Array<TX>,
    txrefs?: Array<TXRef>,
    hasMore?: boolean,
    unconfirmed_txrefs?: Array<TXRef>,
}

interface Blockchain {
    name: string,
    hash: string,
    time: Date,
    height: number,
    latest_url: string,
    previous_url: string,
    low_fee_per_kb: number,
    high_fee_per_kb: number,
    medium_fee_per_kb: number,
}


interface TXRef {
    value: number, // in satoshi
    spent: boolean,
    tx_hash: string,
    tx_input_n: number,
    preference: Preference,
    ref_balance: number,
    tx_output_n: number,
    block_height: number,
    double_spend: boolean,
    confirmations: number,

    script?: string,
    address?: string,
    received?: Date,
    spent_by?: string,
    confirmed?: Date,
}

interface TXInput {
    script: string,
    prev_hash: string,
    addresses: Array<string>,
    script_type: string,
    output_index: number,
    output_value: number,
}

interface TXOutput {
    value: number,
    script: string,
    addresses: Array<string>
    script_type: string,

    spent_by?: string,
}

interface TX {
    ver: number,
    hash: string,
    fees: number,
    size: number,
    vsize: number,
    total: number,
    inputs: Array<TXInput>,
    vin_sz: number,
    outputs: Array<TXOutput>,
    vout_sz: number
    received: Date,
    lock_time: number,
    addresses: Array<string>,
    preference: string,
    relayed_by: string,
    block_height: number,
    double_spend: boolean,
    confirmations: number,

    confirmed?: Date,
    block_hash?: string,

}
interface TXSceletonObject {
    tx: TX,
    tosign: Array<string>,
    pubkeys: Array<string>,
    signatures: Array<string>,

    errors?: Array<{error: string}>
    tosign_tx?: Array<string>,
}
