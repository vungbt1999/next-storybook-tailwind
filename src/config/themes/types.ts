export type ThemeConfig = {
  colors: ColorPalette;
  font: {
    primary: string;
    secondary?: string;
    tertiary?: string;
  };
  stylesheets?: string[];
};

export type ColorPalette = {
  primary: ColorPaletteConfig;
  neutral: ColorPaletteConfig;
  success: ColorPaletteConfig;
  warning: ColorPaletteConfig;
  danger: ColorPaletteConfig;
  info: ColorPaletteConfig;
  gray: ColorPaletteConfig;
};

export type ColorPaletteConfig = {
  default: string;
  _100?: string;
  _200?: string;
  _300?: string;
  _400?: string;
  _500?: string;
  _600?: string;
  _700?: string;
  _900?: string;
};

export type ComponentSize = 'large' | 'medium' | 'small';

export type ComponentVariant = 'primary' | 'secondary' | 'tertiary';

export type ThemeVariant = 'theme1' | 'theme2';
export type HtmlTarget = '_blank' | '_self' | '_parent' | '_top';
export type StyleVariant = 'style_1' | 'style_2';
