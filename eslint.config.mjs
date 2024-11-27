import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
), {
    languageOptions: {
        parser: tsParser,
    },

    rules: {
        "@next/next/no-img-element": "off",
        "@next/next/no-document-import-in-page": "off",
    },
}, {
    files: ["**/*.test.js"],

    rules: {
        "no-undef": "off",
    },
}, {
    files: ["components/lands/*.tsx"],

    rules: {
        "react/prop-types": "off",
        "react/no-unknown-property": "off",
    },
}];