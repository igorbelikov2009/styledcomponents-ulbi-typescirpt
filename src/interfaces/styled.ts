export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    white: string;

    bg: string;
    font: string;
  };

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };

  sizes: {
    header: { height: number };
    container: { width: number };
    footer: { height: number };
    modal: { width: number };
  };

  durations: {
    ms300: number;
  };

  order: {
    header: number;
    modal: number;
  };
}
