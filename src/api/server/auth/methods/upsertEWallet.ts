async function upsertEWallet(walletId: string, eWallet: string) {
    const response = await fetch(
        `http://127.0.0.1:8080/api/wallets/upsertEWallet?walletId=${encodeURIComponent(walletId)}&eWallet=${encodeURIComponent(eWallet)}`
    );

    return response;
}

export default upsertEWallet;
