module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.js",
                ".eslintrc.cjs"
            ],
            "parserOptions": {
                "sourceType": "script",
                "ecmaVersion": "latest"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {}
};
