/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./components/**/*.{html,js,tsx,ts}"],
  mode: 'jit',
  purge:['*.{html,tsx}'],
  corePlugins: {
    preflight: false,
  },
  prefix:'tw-',
  important: true, // set important to true
  theme: {
    extend: {},
  },
  plugins: [],
};
