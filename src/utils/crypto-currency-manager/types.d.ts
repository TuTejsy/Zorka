interface TransactionResoponse {
    value: number,
    spent: number,
    tx_hash: string,
    tx_input_n: number,
    tx_output_n: number,
    double_spend: boolean,
    confirmations: number,

    received?: string,
    confirmed?: string,
    preference?: 'high' | 'medium' | 'low',
    ref_balance?: number,
    block_height?: number,
}
interface BlockchyperResponse {
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

    txrefs?: Array<TransactionResoponse>,
    unconfirmed_txrefs?: Array<TransactionResoponse>,
}
