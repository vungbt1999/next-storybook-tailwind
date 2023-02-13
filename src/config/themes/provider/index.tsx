import React, { useCallback, useState } from 'react';
import { ThemeConfig } from '../types';

export const getStyle = (themeConfig: ThemeConfig) => {
  let configStyle: any = {
    // Primary Color
    '--color-primary': themeConfig.colors.primary.default,
    '--color-primary-100': themeConfig.colors.primary._100,
    '--color-primary-200': themeConfig.colors.primary._200,
    '--color-primary-300': themeConfig.colors.primary._300,
    '--color-primary-400': themeConfig.colors.primary._400,
    '--color-primary-500': themeConfig.colors.primary._500,
    '--color-primary-600': themeConfig.colors.primary._600,
    '--color-primary-700': themeConfig.colors.primary._700,
    '--color-primary-900': themeConfig.colors.primary._900,
    // Neutral Color
    '--color-neutral': themeConfig.colors.neutral.default,
    '--color-neutral-100': themeConfig.colors.neutral._100,
    '--color-neutral-200': themeConfig.colors.neutral._200,
    '--color-neutral-300': themeConfig.colors.neutral._300,
    '--color-neutral-400': themeConfig.colors.neutral._400,
    '--color-neutral-500': themeConfig.colors.neutral._500,
    '--color-neutral-600': themeConfig.colors.neutral._600,
    '--color-neutral-700': themeConfig.colors.neutral._700,
    '--color-neutral-900': themeConfig.colors.neutral._900,
    // Semantic Color
    // Success
    '--color-success': themeConfig.colors.success.default,
    '--color-success-100': themeConfig.colors.success._100,
    '--color-success-200': themeConfig.colors.success._200,
    '--color-success-300': themeConfig.colors.success._300,
    '--color-success-400': themeConfig.colors.success._400,
    '--color-success-500': themeConfig.colors.success._500,
    '--color-success-600': themeConfig.colors.success._600,
    '--color-success-700': themeConfig.colors.success._700,
    '--color-success-900': themeConfig.colors.success._900,
    // Warning
    '--color-warning': themeConfig.colors.warning.default,
    '--color-warning-100': themeConfig.colors.warning._100,
    '--color-warning-200': themeConfig.colors.warning._200,
    '--color-warning-300': themeConfig.colors.warning._300,
    '--color-warning-400': themeConfig.colors.warning._400,
    '--color-warning-500': themeConfig.colors.warning._500,
    '--color-warning-600': themeConfig.colors.warning._600,
    '--color-warning-700': themeConfig.colors.warning._700,
    '--color-warning-900': themeConfig.colors.warning._900,
    // Danger
    '--color-danger': themeConfig.colors.danger.default,
    '--color-danger-100': themeConfig.colors.danger._100,
    '--color-danger-200': themeConfig.colors.danger._200,
    '--color-danger-300': themeConfig.colors.danger._300,
    '--color-danger-400': themeConfig.colors.danger._400,
    '--color-danger-500': themeConfig.colors.danger._500,
    '--color-danger-600': themeConfig.colors.danger._600,
    '--color-danger-700': themeConfig.colors.danger._700,
    '--color-danger-900': themeConfig.colors.danger._900,
    // Information
    '--color-info': themeConfig.colors.info.default,
    '--color-info-100': themeConfig.colors.info._100,
    '--color-info-200': themeConfig.colors.info._200,
    '--color-info-300': themeConfig.colors.info._300,
    '--color-info-400': themeConfig.colors.info._400,
    '--color-info-500': themeConfig.colors.info._500,
    '--color-info-600': themeConfig.colors.info._600,
    '--color-info-700': themeConfig.colors.info._700,
    '--color-info-900': themeConfig.colors.info._900,
    // Gray
    '--color-gray': themeConfig.colors.gray.default,
    '--color-gray-50': themeConfig.colors.gray._50,
    '--color-gray-100': themeConfig.colors.gray._100,
    '--color-gray-200': themeConfig.colors.gray._200,
    '--color-gray-300': themeConfig.colors.gray._300,
    '--color-gray-400': themeConfig.colors.gray._400,
    '--color-gray-500': themeConfig.colors.gray._500,
    '--color-gray-600': themeConfig.colors.gray._600,
    '--color-gray-700': themeConfig.colors.gray._700,
    '--color-gray-900': themeConfig.colors.gray._900,

    '--font-primary': themeConfig.font.primary
  };
  if (themeConfig.font.secondary) {
    configStyle = {
      ...configStyle,
      '--font-secondary': themeConfig.font.secondary
    };
  }
  if (themeConfig.font.tertiary) {
    configStyle = {
      ...configStyle,
      '--font-tertiary': themeConfig.font.tertiary
    };
  }
  return configStyle;
};

export type ThemeContextType = {
  theme: ThemeConfig;
  setTheme: (_theme: Partial<ThemeConfig>) => void;
};
const ThemeContext = React.createContext<ThemeContextType>({
  theme: {
    colors: {
      primary: {
        default: '',
        _300: '',
        _500: '',
        _700: '',
        _900: ''
      },
      neutral: {
        default: '',
        _100: '',
        _300: '',
        _500: '',
        _700: '',
        _900: ''
      },
      success: {
        default: '',
        _100: '',
        _300: '',
        _500: '',
        _700: '',
        _900: ''
      },
      warning: {
        default: '',
        _100: '',
        _300: '',
        _500: '',
        _700: '',
        _900: ''
      },
      danger: {
        default: '',
        _100: '',
        _300: '',
        _500: '',
        _700: '',
        _900: ''
      },
      info: {
        default: '',
        _100: '',
        _300: '',
        _500: '',
        _700: '',
        _900: ''
      },
      gray: {
        default: ''
      }
    },
    font: {
      primary: 'sans-serif, serif, monospace, cursive'
    }
  },
  setTheme: (_theme: Partial<ThemeConfig>) => {}
});

export type ThemeProviderProps = {
  config: ThemeConfig;
  children: JSX.Element;
};
export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeConfig>(props.config);

  const setTheme = useCallback((newTheme: Partial<ThemeConfig>) => {
    setThemeState((theme) => ({ ...theme, ...newTheme }));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main style={getStyle(theme)} className="h-screen">
        {theme?.stylesheets?.map((stylesheet, index) => (
          <link key={index} rel="stylesheet" href={stylesheet} />
        ))}
        {props.children}
      </main>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
