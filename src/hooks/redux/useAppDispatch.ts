import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../index';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
