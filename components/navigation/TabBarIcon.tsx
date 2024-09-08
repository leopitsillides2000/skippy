// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarIconDefault({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function FontAwesomeIcon({ style, ...rest }: IconProps<ComponentProps<typeof FontAwesome>['name']>) {
  return <FontAwesome size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function AccountIcon({ style, ...rest }: IconProps<ComponentProps<typeof MaterialCommunityIcons>['name']>) {
  return <MaterialCommunityIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}