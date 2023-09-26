import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {preflight: false},
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--lavender-blue),1)',
        textPrimary: 'rgb(var(--gray-500))',
      },
      background: {
        lightShadow: 'rgba(var(--lavender-blue), 0.10)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
