module.exports = {
  content:{
    relative: true, 
    files: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}", ==> I am using outside component So when i add path it working.
 
  ],},
  theme: {
    extend: {},
  },
  plugins: [],
}