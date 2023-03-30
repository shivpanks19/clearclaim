/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: "0.04em",
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },

    extend: {
      screens: {
        xxs: "360px",
        xs: "480px",
        mdxl: "1440px",
      },
      width: {
        '5.5': '1.375rem',
        21: '5.25rem',
        35: '35rem',
        76: '76rem',
        85: '21.25rem',
        90: '22.5rem',
        99: '24.75rem',
        108: '27rem',
        112: '28rem',
        120: '30rem',
        134: '34rem',
        154: '39rem',
        216: '54rem',
        256: '64rem'
      },
      height: {
        '5.5': '1.375rem',
        42: '42rem',
        45: '45rem',
        51: '51rem',
        85: '21.25rem',
        90: '22.5rem',
        120: '30rem',
        136: '34rem',
        144: '36rem',
        154: '39rem',
        216: '54rem',
        160: '40rem',
      },
      fontSize: {
        "xxs": [
          "8px",
          {
            letterSpacing: "0.04em",
            lineHeight: "160%",
          },
        ],
        "base": [
          "16px",
          {
            letterSpacing: "0.04em",
            lineHeight: "160%",
          },
        ],
        "lg": [
          "18px",
          {
            letterSpacing: "0.035em",
            lineHeight: "160%",
          },
        ],
        "3xl": [
          "30px",
          {
            letterSpacing: "0.035em",
            lineHeight: "140%",
          },
        ],
        "4xl": [
          "36px",
          {
            letterSpacing: "0.04em",
            lineHeight: "140%",
          },
        ],
        "5xl": [
          "48px",
          {
            letterSpacing: "0.04em",
            lineHeight: "140%",
          },
        ]
      },
      backgroundColor: () => ({
        primary: "#0D3D54",
        lightblue: "rgb(239, 248, 253)",
        secondary: "#ffa600",
        tertiary: "#0D87D4",
        tertiary2: "#70C4F9",
        tertiary3: "#BDE6FF",
        tertiaryFade1: "rgba(13, 135, 212, 0.41);",
        tertiaryFade2: "rgba(13, 135, 212, 0.15);",
        tertiaryLight: "#D0EDFF",
        danger: "#e3342f",
        diminished: "rgba(30, 70, 132, 0.08)",
        "white": '#fff',
        "theme-white": "#fafafa",
        "white-56": "rgba(255, 255, 255, 0.56)",
        'corporate-light': '#cae0fe',
        corporate: '#387ef7',
        red: '#e21032',
        whyus: '#57aeff',
        'why-us-selected': '#0F8CFF',
        'loader-gray': '#ECEBEB',
        'gd-salary-bar-gray': 'rgb(196, 199, 204)',
        'gd-salary-bar-blue': 'rgb(12, 64, 133)',
        'footer-bg': '#0C3447'
      }),
      textColor: () => ({
        primary: "#0D3D54",
        primary2: "#0D3D54E3",
        primary3: "#0D3D54C9",
        primary4: "#3f3f3fa1",
        title: "rgba(13, 61, 84, 0.79)",
        desc: "rgba(63, 63, 63, 0.63)",
        desc2: "rgba(63, 63, 63, 0.83)",
        secondary: "rgba(13, 61, 84, 0.89)",
        tertiary: "#0D87D4",
        muted: "#919191",
        aphonic: "rgba(63, 63, 63, 0.63)",
        gray: '#d1d1d1',
        gray2: '#c4c5c5',
        corporate: '#387ef7',
        white: '#fff',
        'price-yellow': '#FAD200'
      }),
      borderColor: () => ({
        DEFAULT: '#OD3D5426',
        primary2: "#0D3D54E3",
        yellow: '#f5c844',
        tertiary: "#0D87D4",
        white: "#fff"
      }),
      borderWidth: {
        '11': '44px'
      },
      boxShadow: {
        DEFAULT: "0px 0px 6px 1px rgba(13, 61, 84, 0.07);",
        'navbar': '0px 4px 4px 0px rgba(13, 135, 212, 0.18)',
        'courseDetailNav': '0px 4px 4px 0px rgba(13, 135, 212, 0.18)',
        'gdSalaryBox': '0px 0px 4px rgba(0, 0, 0, 0.25)'
      },
      spacing: {
        '13': '52px',
        '100': '400px',
      },
      padding: {
        '115': '460px',
        85: '21.25rem'
      },
      margin: {
        21: '5.25rem',
      },
      gridTemplateColumns: {
        '26': 'repeat(26, minmax(0, 1fr))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {color: theme('text-primary')},
            h2: {color: theme('text-tertiary')}
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
