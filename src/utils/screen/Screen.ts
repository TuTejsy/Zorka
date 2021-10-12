import { StatusBar } from 'react-native';
import { Dimensions, ScaledSize } from 'react-native';

import DEVICE_ORIENTATION from 'app/constants/DEVICE_ORIENTATION';

enum SCREEN_SIZE {
  SMALL,
  MEDIUM,
  LARGE,
}
class Screen {
  SCREEN_SIZE = SCREEN_SIZE;

  private nativeWindow: ScaledSize;
  size: SCREEN_SIZE;
  width: number;
  height: number;
  center: {
    x: number;
    y: number;
  };
  orientation: DeviceOrientation;

  isSmall: boolean;
  isLarge: boolean;
  isMedium: boolean;

  IPHONE_SIX_WIDTH: number;

  get window() {
    return this.nativeWindow || Dimensions.get('window');
  }

  constructor() {
    this.nativeWindow = Dimensions.get('window');
    const { height, width } = this.nativeWindow;

    this.height = height;
    this.width = width;
    this.center = {
      x: width / 2,
      y: height / 2,
    };

    this.size = this.getScreenSize(height);

    this.isSmall = this.size === SCREEN_SIZE.SMALL;
    this.isLarge = this.size === SCREEN_SIZE.LARGE;
    this.isMedium = this.size === SCREEN_SIZE.MEDIUM;

    this.IPHONE_SIX_WIDTH = 375;

    this.orientation = this.getDeviceOrientation({ width, height });
  }

  getValueForSmallMediumOrLargeScreen<T>(
    valueForSmallScreen: T,
    valueForMediumScreen: T,
    valueForLargeScreen: T,
  ): T {
    switch (this.size) {
      case SCREEN_SIZE.SMALL: {
        return valueForSmallScreen;
      }

      case SCREEN_SIZE.MEDIUM: {
        return valueForMediumScreen;
      }

      case SCREEN_SIZE.LARGE: {
        return valueForLargeScreen;
      }

      default: {
        return valueForSmallScreen;
      }
    }
  }

  getDeviceOrientation({
    width,
    height,
  }: {
    width: number;
    height: number;
  }): DeviceOrientation {
    return height >= width
      ? DEVICE_ORIENTATION.PORTRAIT
      : DEVICE_ORIENTATION.LANDSCAPE;
  }

  private isIphoneXTypeSimulator(height: number): boolean {
    return (
      global.isIos &&
      (height === 780 || // 12 mini
        height === 812 || // 11 Pro, Xs, X
        height === 844 || // 12, 12 Pro
        height === 896 || // 11 Pro Max
        height === 926) // 12 Pro Max
    );

    // https://ios-resolution.com/
  }

  private getStatusBarHeight() {
    return global.isIos
      ? this.height >= 812
        ? 32
        : 20
      : StatusBar.currentHeight ?? 0;
  }

  private getScreenSize(height: number): SCREEN_SIZE {
    const cleanedHeight = global.isIos
      ? height
      : height + this.getStatusBarHeight();

    switch (true) {
      case cleanedHeight >= 896: {
        return SCREEN_SIZE.LARGE;
      }
      case cleanedHeight >= 812: {
        return SCREEN_SIZE.MEDIUM;
      }
      case cleanedHeight >= 667: {
        return SCREEN_SIZE.SMALL;
      }
      default: {
        return SCREEN_SIZE.SMALL;
      }
    }
  }
}

export default new Screen();
