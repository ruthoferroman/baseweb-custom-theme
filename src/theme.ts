import { ThemeT, createTheme } from 'baseui';
import {
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron
 } from 'baseui';

export type CustomThemeT = ThemeT & {
  example: {
    backgroundColor: string,
    height: string
  }
};

const primitives = {

};

const overrides = {
  
}

const baseTheme = createTheme(primitives, overrides);

export const theme: CustomThemeT = {
  ...baseTheme,
  example: {
    backgroundColor: '#34ace0',
    height: '200px'
  }
};

export const themedStyled = createThemedStyled<CustomThemeT>();
export const themedWithStyle = createThemedWithStyle<CustomThemeT>();
export const themedUseStyletron = createThemedUseStyletron<CustomThemeT>();

export default theme;