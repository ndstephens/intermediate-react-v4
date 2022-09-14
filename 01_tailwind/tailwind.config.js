module.exports = {
  mode: 'jit',
  content: ['./src/*.{html,js,jsx}'],
  theme: {
    extend: {},
  },
  variant: {},
  plugins: [require('@tailwindcss/forms')],
};
