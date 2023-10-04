import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {preflight: false},
  theme: {
    font: 'Helvetica Neue',
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(var(--lavender-blue),1)',
          dark: 'rgba(var(--paua),1)',
        },
        black: {
          DEFAULT: '#0000',
          lighter: '#252525',
        },
        gray: {
          DEFAULT: 'rgb(var(--gray-500))',
          lighter: 'rgba(130, 143, 153, 1)',
          smoke: 'rgb(var(--white-smoke))'
        },
        brust: 'rgb(var(--cloud-brust))',
        typography: {
          DEFAULT: 'rgb(var(--gray-900))',
          'gray-500': 'rgb(var(--active-light))',
          'gray-400': 'rgb(var(--gray-400))'
        }
        
      },
      borderColor: {
        DEFAULT: 'rgba(215, 215, 215, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'light-shadow': 'rgba(134, 134, 245, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
