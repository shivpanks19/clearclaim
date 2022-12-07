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
        mdxl: "1440px",
      },
      width: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        35: '35rem',
        76: '76rem'
      },
      height: {
        45: '45rem',
        51: '51rem'
      },
      fontSize: {
        "hero": [
          "2.625rem",
          {
            letterSpacing: "0.04em",
            lineHeight: "140%",
          },
        ],
        "subhero": [
          "1.625rem",
          {
            letterSpacing: "0.04em",
            lineHeight: "160%",
          },
        ],

      },
      backgroundColor: (theme) => ({
        primary: "#0D3D54",
        light: "#eff8fd",
        secondary: "#ffa600",
        tertiary: "#0D87D4",
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
      }),
      textColor: () => ({
        primary: "#0D3D54",
        primary2: "#0D3D54E3",
        primary3: "#0D3D54C9",
        title: "rgba(13, 61, 84, 0.79)",
        desc: "rgba(63, 63, 63, 0.63)",
        secondary: "rgba(13, 61, 84, 0.89)",
        tertiary: "#0D87D4",
        muted: "#919191",
        aphonic: "rgba(63, 63, 63, 0.63)",
        corporate: '#387ef7',
        'price-yellow': '#FAD200'
      }),
      borderColor: () => ({
        DEFAULT: '#OD3D5426',
        primary2: "#0D3D54E3",
        yellow: '#f5c844',
        tertiary: "#0D87D4"
      }),
      boxShadow: {
        DEFAULT: "0px 0px 6px 1px rgba(13, 61, 84, 0.07);",
      },
      spacing: {
        '13': '52px',
      }
    }
  },
  plugins: [],
}
