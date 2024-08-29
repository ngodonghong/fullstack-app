// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@package/tailwind-config";
import daisyui from "daisyui"

const config: Config = {
  content: [
    './src/**/*.html',
    './src/**/*.{ts,tsx}',
    '../../libs/**/*.{ts,tsx}',],
  presets: [sharedConfig],
  plugins: [daisyui],
  daisyui: {
    themes: ["retro"],
  },

};

export default config;