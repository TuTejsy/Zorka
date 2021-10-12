import { NAVIGATION } from 'app/constants';
import { LayoutBottomTabs, LayoutTabsChildren } from 'react-native-navigation';

export const MESSAGES_TAB: LayoutTabsChildren = {
  stack: {
    children: [
      {
        component: {
          name: NAVIGATION.SCREENS.MESSAGES.HOME,
          options: {
            statusBar: {
              drawBehind: true,
            },
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Messages',
        icon: require('appAssets/icons/tabbar/inactive/Messages.png'),
        selectedIcon: require('appAssets/icons/tabbar/active/Messages.png'),
      },
    },
  },
};

export const PEOPLE_TAB: LayoutTabsChildren = {
  stack: {
    children: [
      {
        component: {
          name: NAVIGATION.SCREENS.PEOPLE.HOME,
          options: {
            statusBar: {
              drawBehind: true,
            },
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'People',
        icon: require('appAssets/icons/tabbar/inactive/People.png'),
        selectedIcon: require('appAssets/icons/tabbar/active/People.png'),
      },
    },
  },
};

export const SAFE_TAB: LayoutTabsChildren = {
  stack: {
    children: [
      {
        component: {
          name: NAVIGATION.SCREENS.SAFE.HOME,
          options: {
            statusBar: {
              drawBehind: true,
            },
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Safe',
        icon: require('appAssets/icons/tabbar/inactive/Safe.png'),
        selectedIcon: require('appAssets/icons/tabbar/active/Safe.png'),
      },
    },
  },
};

export const ME_TAB: LayoutTabsChildren = {
  stack: {
    children: [
      {
        component: {
          name: NAVIGATION.SCREENS.ME.HOME,
          options: {
            statusBar: {
              style: 'light',
              drawBehind: true,
            },
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Me',
        icon: require('appAssets/icons/tabbar/inactive/Me.png'),
        selectedIcon: require('appAssets/icons/tabbar/active/Me.png'),
      },
    },
  },
};

const bottomTabs: { children: LayoutTabsChildren[] } & LayoutBottomTabs = {
  id: NAVIGATION.BOTTOM_TABS,
  children: [MESSAGES_TAB, PEOPLE_TAB, SAFE_TAB, ME_TAB],
};

export default bottomTabs;
