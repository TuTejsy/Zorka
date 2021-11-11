import { CURRENCY } from './constants';
interface UpdateCryptBalancePayload {
    cryptoId: keyof typeof CURRENCY.ID
}
