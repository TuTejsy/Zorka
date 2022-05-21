import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from 'appConfig/redux';

type StoreType = ReturnType<typeof configureStore>
type RootState = ReturnType<StoreType['getState']>
export type AppDispatch = ReturnType<StoreType['dispatch']>

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
