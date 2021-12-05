import React from 'react';
import Svg, {
    G,
    Path,
    Rect,
    Mask,
    Defs,
    Stop,
    Line,
    LinearGradient,
} from 'react-native-svg';
import { colors } from 'appAssets/styles';

export default {
    'side-bar': {
        svg:
            <Svg width={44} height={44} fill="none">
                <Line
                    x1={11}
                    y1={22}
                    x2={33}
                    y2={22}
                    stroke={colors.GHOST_WHITE}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <Line
                    x1={11}
                    y1={14}
                    x2={33}
                    y2={14}
                    stroke={colors.GHOST_WHITE}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <Line
                    x1={11}
                    y1={30}
                    x2={33}
                    y2={30}
                    stroke={colors.GHOST_WHITE}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
            </Svg>,
        viewBox: '0 0 44 44'
    },
    reload: {
        svg:
            <Svg width={44} height={44} fill="none">
                <Path
                    d="M28.6104 13.1978C28.5568 13.0475 28.3533 13.0254 28.2687 13.1608L25.6519 17.3485C25.5673 17.4839 25.6763 17.6571 25.835 17.6394L29.7887 17.1986C29.9111 17.1849 29.9887 17.0607 29.9473 16.9447L28.6104 13.1978Z"
                    fill={colors.GHOST_WHITE}
                    stroke={colors.GHOST_WHITE}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeWidth={0.9}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M28.3532 16.5747C26.7782 14.6427 24.3785 13.4085 21.6914 13.4085C16.9464 13.4085 13.1005 17.2543 13.1005 21.9994C13.1005 26.7435 16.9464 30.5903 21.6914 30.5903C25.4315 30.5903 28.6139 28.1994 29.7934 24.8629"
                    stroke={colors.GHOST_WHITE}
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>,
        viewBox: '0 0 44 44'
    },
    logout: {
        svg:
        <Svg width={44} height={44} fill="none">
            <Path
                d="M13.127 17.1059V15.843C13.127 14.2238 14.4396 12.9111 16.0588 12.9111H28.3724C29.9916 12.9111 31.3042 14.2238 31.3042 15.843V28.1566C31.3042 29.7758 29.9916 31.0884 28.3724 31.0884H16.0588C14.4396 31.0884 13.127 29.7758 13.127 28.1566V26.8936"
                stroke={colors.ORANGE_RED}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M18.9147 24.9409C18.6187 25.2307 18.6138 25.7055 18.9036 26.0015C19.1935 26.2974 19.6683 26.3023 19.9642 26.0125L23.5115 22.5384C23.6556 22.3973 23.7367 22.2042 23.7367 22.0026C23.7368 21.801 23.6556 21.6079 23.5116 21.4668L19.9643 17.9916C19.6684 17.7017 19.1936 17.7066 18.9037 18.0025C18.6138 18.2984 18.6187 18.7732 18.9146 19.0631L21.0958 21.2L10.8 21.2C10.3582 21.2 10 21.5582 10 22C10 22.4418 10.3582 22.8 10.8 22.8L21.1006 22.8L18.9147 24.9409Z"
                fill={colors.ORANGE_RED}
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </Svg>,
        viewBox: '0 0 44 44'
    }
};
