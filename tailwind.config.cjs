const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
};

module.exports = {
  config,
  daisyui: {
    themes: ["retro", "garden", "forest", "black", "dracula", "business", "night"],
  },
}
