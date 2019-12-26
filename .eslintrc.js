module.exports = {
    "env": {
        "node": true,
        "jest": true,
        "browser": true
    },
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "plugin:react/recommended", // Following the preset's recommendation: https://github.com/yannickcr/eslint-plugin-react#configuration
        "plugin:prettier/recommended"
    ],
    "plugins": [
        "react-hooks" // https://www.npmjs.com/package/eslint-plugin-react-hooks
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/display-name": 0, // Comes from eslint-plugin-react's default recommendation.
        "react/prop-types": 0,
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "import/prefer-default-export": 0,
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "import/prefer-default-export": 0,
        "react/jsx-one-expression-per-line": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
