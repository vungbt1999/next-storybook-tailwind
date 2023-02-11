import { ThemeConfig } from './types';

export const themeConfig: ThemeConfig = {
  colors: {
    primary: {
      default: '#1BD760',
      _100: '#ECFFF3',
      _300: '#79FFAA',
      _500: '#1BD760',
      _700: '#00A93E',
      _900: '#009336'
    },
    neutral: {
      default: '#1E1E1E',
      _100: '#FFFFFF',
      _300: '#D3D3D3',
      _500: '#9C9C9C',
      _700: '#747474',
      _900: '#1E1E1E'
    },
    success: {
      default: '#33CC7F',
      _100: '#DAF6E8',
      _300: '#A5E8C7',
      _500: '#33CC7F',
      _700: '#29A366',
      _900: '#1F7A4C'
    },
    info: {
      default: '#00B2FF',
      _100: '#DBF1FB',
      _300: '#A6DCF4',
      _500: '#4DB9E9',
      _700: '#273035',
      _900: '#1C252B'
    },
    danger: {
      default: '#FF1919',
      _100: '#FFE9E9',
      _300: '#FF6F6F',
      _500: '#FF1919',
      _600: '#D92D20',
      _700: '#D31414',
      _900: '#A30E0E'
    },
    warning: {
      default: '#FFBE40',
      _100: '#FFF2D9',
      _300: '#FFD88C',
      _500: '#FFBE40',
      _700: '#CC9833',
      _900: '#997226'
    },
    gray: {
      default: '#101828',
      _400: '#98A2B3',
      _500: '#667085',
      _600: '#475467',
      _900: '#101828'
    }
  },
  font: {
    primary: "'Inter', sans-serif"
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
  ]
};
