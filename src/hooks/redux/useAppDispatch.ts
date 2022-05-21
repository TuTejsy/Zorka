import { useDispatch } from 'react-redux';
import { configureStore } from 'appConfig/redux';

type StoreType = ReturnType<typeof configureStore>
type AppDispatch = ReturnType<StoreType['dispatch']>

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
