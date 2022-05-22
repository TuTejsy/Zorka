import { useMemo } from 'react';
import { useAppSelector } from '../redux';

function useLocalizedStrings(values: Array<{
    [x: string]: string;
}>) {
    const localizationMode = useAppSelector(state => state.appState.localizationMode);
    const localizedStrings = useMemo(
        () => (values.map(value => value[localizationMode])),
        [localizationMode, values]
    );

    return localizedStrings;
}

export default useLocalizedStrings;
