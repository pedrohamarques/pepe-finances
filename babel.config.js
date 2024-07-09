module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@typings": "./src/typings",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@services": "./src/services",
            "@contexts": "./src/contexts",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          verbose: false,
        },
      ],
      ["nativewind/babel"],
    ],
  };
};
