import { ThemeProvider, themeConfig } from '../src/config/themes';
import '../src/styles/index.css';
import * as NextImage from 'next/image';
import { useMemo } from 'react';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
});

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for component',
    defaultValue: 'demo',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'demo', title: 'Demo' },
        { value: 'demo2', title: 'Demo 2' }
      ]
    }
  }
};

export const parameters = {
  layout: 'center',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: {
      sm: {
        name: 'sm',
        styles: {
          width: '640px',
          height: '100%'
        }
      },
      md: {
        name: 'md',
        styles: {
          width: '768px',
          height: '100%'
        }
      },
      lg: {
        name: 'lg',
        styles: {
          width: '1024px',
          height: '100%'
        }
      },
      xl: {
        name: 'xl',
        styles: {
          width: '1280px',
          height: '100%'
        }
      },
      '2xl': {
        name: '2xl',
        styles: {
          width: '1536px',
          height: '100%'
        }
      }
    }
  }
};

const withThemeProvider = (Story, context) => {
  const config = useMemo(() => {
    switch (context.globals.theme) {
      case 'demo2':
      default:
        return { ...themeConfig };
    }
  }, [context.globals.theme]);

  return (
    <ThemeProvider config={config}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
