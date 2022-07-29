/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: 'jit',
  purge:[],
  corePlugins: {
    preflight: false
  },
  prefix:'tw-',
  important: true, // set important to true
  theme: {
    extend: {},
  },
  plugins: [],
};
