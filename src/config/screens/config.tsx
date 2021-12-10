import React, { Component, FunctionComponent } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { NavigationProvider } from 'react-native-navigation-hooks/dist';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { NAVIGATION } from 'appConstants';

import {
    BackupScreen,
    GetStartedScreen,
    CryptoListScreen,
    CreateWalletScreen,
    CryptoWalletScreen,
    GeneratedSecretPhraseScreen,
} from 'appContainers/screens';

import { LeftSideMenu } from 'appContainers/navigation';
import { LogoutButton, SideBarButton, UpdateCryptoListButton } from 'appComponents/navigation';
import { ToastProvider } from 'appComponents/core';

/* eslint-disable */
const screens: [[string, FunctionComponent | Component]] = [
    [ NAVIGATION.SCREENS.COMMON.CRYPTO_LIST, CryptoListScreen],
    [ NAVIGATION.SCREENS.COMMON.BACKUP, BackupScreen ],
    [ NAVIGATION.SCREENS.COMMON.GET_STARTED, GetStartedScreen ],
    [ NAVIGATION.SCREENS.COMMON.CRYPTO_WALLET, CryptoWalletScreen],

    [ NAVIGATION.SCREENS.AUTH.CREATE_CRYPTO_WALLET, CreateWalletScreen],
    [ NAVIGATION.SCREENS.AUTH.GENERATED_SECRET_PHRASE, GeneratedSecretPhraseScreen],
];

const components: [[string, FunctionComponent | Component]] = [
    [ NAVIGATION.COMPONENTS.CORE.LEFT_SIDE_MENU, LeftSideMenu],

    [ NAVIGATION.COMPONENTS.NAVBAR.LOGOUT_BUTTON, LogoutButton],
    [ NAVIGATION.COMPONENTS.NAVBAR.SIDE_BAR_BUTTON, SideBarButton],
    [ NAVIGATION.COMPONENTS.NAVBAR.UPDATE_CRYPTO_LIST_BUTTON, UpdateCryptoListButton],
];
/* eslint-enable */

const registerScreens = (store: Store) => {
    const registerScreen = registerScreenProvider(store);
    const registerComponent = registerComponentProvider(store);

    components.forEach(([name, Component]) => {
        registerComponent(name, Component);
    });

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
                                value={{ componentId: props.componentId }}
                            >
                                <ToastProvider componentId={props.componentId}>
                                    <Provider store={store}>
                                        <Component screenName={name} {...props} />
                                    </Provider>
                                </ToastProvider>
                            </NavigationProvider>
                        </ActionSheetProvider>
                    ),
                () => Component, // Component
            );
        };

const registerComponentProvider =
    (store: Store) =>
        (name: string, Component: FunctionComponent | Component) => {
            Navigation.registerComponent(
                name,
                () => props =>
                    (
                        <NavigationProvider
                            value={{ componentId: props.componentId }}
                        >
                            <Provider store={store}>
                                <Component screenName={name} {...props} />
                            </Provider>
                        </NavigationProvider>
                    ),
                () => Component, // Component
            );
        };


export default registerScreens;
