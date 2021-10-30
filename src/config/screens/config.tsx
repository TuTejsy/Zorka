import React, { Component, FunctionComponent } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { NavigationProvider } from 'react-native-navigation-hooks/dist';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { NAVIGATION } from 'appConstants';

import { GetStartedScreen, CreateWalletScreen } from 'appContainers/screens';

/* eslint-disable */
const screens: [[string, FunctionComponent | Component]] = [
    [ NAVIGATION.SCREENS.COMMON.GET_STARTED, GetStartedScreen ],
    [ NAVIGATION.SCREENS.COMMON.CREATE_WALLET, CreateWalletScreen],
];
/* eslint-enable */

const registerScreens = (store: Store) => {
    const registerScreen = registerScreenProvider(store);

    screens.forEach(([name, Component]) => {
        registerScreen(name, Component);
    });
};

const registerScreenProvider =
    (store: Store) =>
    (name: string, Component: FunctionComponent | Component) => {
        Navigation.registerComponent(
            name,
            () => props =>
                (
                    <ActionSheetProvider>
                        <NavigationProvider
                            value={{ componentId: props.componentId }}>
                            <Provider store={store}>
                                <Component screenName={name} {...props} />
                            </Provider>
                        </NavigationProvider>
                    </ActionSheetProvider>
                ),
            () => Component, // Component
        );
    };

export default registerScreens;
