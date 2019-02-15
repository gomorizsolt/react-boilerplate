module.exports = {
    "env": {
        "node": true,
        "jest": true,
        "browser": true    
    },
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "import/prefer-default-export": 0,
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "import/prefer-default-export": 0,
        "react/jsx-one-expression-per-line": 0
    }
};