// tailwind.config.ts
import type { Config } from 'tailwindcss'
import MyPreset from './src/app/mypreset';

const config: Config = {
  content: ['./src/**/*.{html,ts}'],
  presets: [MyPreset], // <- tu preset con tus colores
  theme: {
    extend: {}
  },
  darkMode: 'class', // si estás manejando dark mode
  plugins: []
}

export default config;