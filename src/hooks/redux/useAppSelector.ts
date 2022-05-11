import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../../../index';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
