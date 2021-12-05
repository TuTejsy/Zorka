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
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <Line
                    x1={11}
                    y1={14}
                    x2={33}
                    y2={14}
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <Line
                    x1={11}
                    y1={30}
                    x2={33}
                    y2={30}
                    stroke="black"
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
};
