module.exports = {
    "env": {
        "node": true,
        "jest": true,
        "browser": true    
    },
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "plugin:prettier/recommended"
    ],
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "import/prefer-default-export": 0,
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "import/prefer-default-export": 0,
        "react/jsx-one-expression-per-line": 0
    }
};