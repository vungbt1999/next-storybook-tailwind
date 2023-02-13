/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{jsx,tsx}', 
    './src/components/**/*.{jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "12px",
        md: "12px",
        lg: "12px",
        xl: "12px",
        "2xl": "12px",
      },
      screens: {
        sm: "1320px",
        md: "1320px",
        lg: "1320px",
        xl: "1320px",
        "2xl": "1320px",
      },
    },
    colors: {
      // default
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      subtitle: "#94949A",
      summary: "#1A1A1A",
      button: "#E02D2E",

      // theme
      primary: {
        DEFAULT: "var(--color-primary)",
        100: "var(--color-primary-100)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        900: "var(--color-primary-900)",
      },
      neutral: {
        DEFAULT: "var(--color-neutral)",
        100: "var(--color-neutral-100)",
        300: "var(--color-neutral-300)",
        400: "var(--color-neutral-400)",
        500: "var(--color-neutral-500)",
        600: "var(--color-neutral-600)",
        700: "var(--color-neutral-700)",
        900: "var(--color-neutral-900)",
      },
      success: {
        DEFAULT: "var(--color-success)",
        100: "var(--color-success-100)",
        300: "var(--color-success-300)",
        400: "var(--color-success-400)",
        500: "var(--color-success-500)",
        600: "var(--color-success-600)",
        700: "var(--color-success-700)",
        900: "var(--color-success-900)",
      },
      warning: {
        DEFAULT: "var(--color-warning)",
        100: "var(--color-warning-100)",
        300: "var(--color-warning-300)",
        400: "var(--color-warning-400)",
        500: "var(--color-warning-500)",
        600: "var(--color-warning-600)",
        700: "var(--color-warning-700)",
        900: "var(--color-warning-900)",
      },
      danger: {
        DEFAULT: "var(--color-danger)",
        100: "var(--color-danger-100)",
        300: "var(--color-danger-300)",
        400: "var(--color-danger-400)",
        500: "var(--color-danger-500)",
        600: "var(--color-danger-600)",
        700: "var(--color-danger-700)",
        900: "var(--color-danger-900)",
      },
      info: {
        DEFAULT: "var(--color-info)",
        100: "var(--color-info-100)",
        300: "var(--color-info-300)",
        400: "var(--color-info-400)",
        500: "var(--color-info-500)",
        600: "var(--color-info-600)",
        700: "var(--color-info-700)",
        900: "var(--color-info-900)",
      },
      gray: {
        DEFAULT: "var(--color-gray)",
        50: "var(--color-gray-50)",
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        900: "var(--color-gray-900)",
      },
    },
    fontFamily: {
      primary: "var(--font-primary)",
      secondary: "var(--font-secondary, var(--font-primary))",
      tertiary:
        "var(--font-tertiary, var(--font-secondary, var(--font-primary))",
    },
    fontSize: {
      // TEXT
      '2l': [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "400"
        }
      ],
      'sm-semibold': [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "600"
        }
      ],
      'md-regular': [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400"
        }
      ],
      'md-medium': [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500"
        }
      ],
      'md-semibold': [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "600"
        }
      ],
      'md-bold': [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "700"
        }
      ],
      'lg-semibold': [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "600"
        }
      ],
      'xl-regular': [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "400"
        }
      ],
      'xl-semibold': [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "600"
        }
      ],

      // DISPLAY
      'display-xs-semibold': [
        "24px",
        {
          lineHeight: "32px",
          fontWeight: "600"
        }
      ],
      'display-md-semibold': [
        "36px",
        {
          lineHeight: "44px",
          fontWeight: "600"
        }
      ],
      'display-md-bold': [
        "36px",
        {
          lineHeight: "44px",
          fontWeight: "700"
        }
      ],
      'display-lg-medium': [
        "48px",
        {
          lineHeight: "60px",
          fontWeight: "500"
        }
      ],
      'display-xl-semibold': [
        "60px",
        {
          lineHeight: "72px",
          fontWeight: "600"
        }
      ],
    },
    spacing: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      11: "11px",
      12: "12px",
      13: "13px",
      14: "14px",
      15: "15px",
      16: "16px",
      17: "17px",
      18: "18px",
      19: "19px",
      20: "20px",
      21: "21px",
      22: "22px",
      23: "23px",
      24: "24px",
      26: "26px",
      25: "25px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
      42: "42px",
      44: "44px",
      45: "45px",
      46: "46px",
      48: "48px",
      50: "50px",
      51: "51px",
      52: "52px",
      56: "56px",
      58: "58px",
      60: "60px",
      64: "64px",
      66: "66px",
      70: "70px",
      72: "72px",
      80: "80px",
      82: "82px",
      87: "87px",
      88: "88px",
      90: "90px",
      94: '94px',
      95: "95px",
      96: "96px",
      100: "100px",
      110: "110px",
      112: "112px",
      116: "116px",
      120: "120px",
      124: "124px",
      126: "126px",
      130: "130px",
      132: "132px",
      144: "144px",
      150: "150px",
      156: "156px",
      160: "160px",
      164: "164px",
      170: "170px",
      172: "172px",
      178: "178px",
      180: "180px",
      182: "182px",
      186: "186px",
      190: "190px",
      196: "196px",
      248: "248px",
      255: "255px",
      258: "258px",
      264: "264px",
      270: "270px",
      280: "280px",
      296: "296px",
      300: "300px",
      304: "304px",
      310: "310px",
      320: "320px",
      324: "324px",
      336: "336px",
      340: "340px",
      350: "350px",
      360: "360px",
      370: "370px",
      380: "380px",
      390: "390px",
      632: "632px",
      680: "680px",
      max: "100vh",
    },
    extend: {
      minHeight: {
        inherit: "inherit",
        screen: "var(--height-screen)",
      },
      height: {
        inherit: "inherit",
        screen: "var(--height-screen)",
      },
      maxHeight: {
        inherit: "inherit",
        screen: "var(--height-screen)",
      },
      boxShadow: {
        'xs': '0px 1px 2px rgba(16, 24, 40, 0.05)',
        'lg': '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        'md': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      },
      dropShadow: {
        'xs': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      }
    },
  },
  plugins: [],
}
