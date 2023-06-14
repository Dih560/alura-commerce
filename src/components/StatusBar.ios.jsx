import React from 'react';
import {StatusBar as NativeStatusBar} from 'react-native';
import useColorScheme from '../utils/useColorScheme';
import styleToBarStyle from '../utils/styleToBarStyle';

export default function StatusBar(props) {
  const {
    style,
    animated,
    hidden,
    hideTransitionAnimation,
    networkActivityIndicatorVisible,
  } = props;

  const showHideTransition =
    hideTransitionAnimation === 'none' ? undefined : hideTransitionAnimation;

  // Pick appropriate default value depending on current theme, so if we are
  // locked to light mode we don't end up with a light status bar
  const colorScheme = useColorScheme();
  const barStyle = styleToBarStyle(style, colorScheme);

  return (
    <NativeStatusBar
      barStyle={barStyle}
      animated={animated}
      hidden={hidden}
      networkActivityIndicatorVisible={networkActivityIndicatorVisible}
      showHideTransition={showHideTransition}
    />
  );
}
