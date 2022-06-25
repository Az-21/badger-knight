const config = {
  theme: { extend: {} },
  content: ["./src/**/*.{html,js,svelte,ts}"],

  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    themes: ["garden", "black", "retro", "forest", "dracula", "business", "night"],
  },
};

module.exports = config;
