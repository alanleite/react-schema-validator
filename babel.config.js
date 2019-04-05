module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: "defaults"
        }
      }
    ],
    '@babel/preset-react',
  ],
  plugins: [
    "@babel/plugin-proposal-export-default-from"
  ]
}