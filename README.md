# Sharable EditorConfig for FOURDIGIT

[![npm](https://img.shields.io/npm/v/@fourdigit/editorconfig-config-fourdigit.svg)](https://www.npmjs.com/package/@fourdigit/editorconfig-config-fourdigit)

## Installation

```sh
// yarn
yarn add --dev @fourdigit/editorconfig-config-fourdigit

// npm
npm install --save-dev @fourdigit/editorconfig-config-fourdigit
```

## Usage

EditorConfig doesn't natively support sharing or extending configuration (see https://github.com/editorconfig/editorconfig/issues/236).
As a stop-gap, we adopt postinstall script.
Automatically install the file .editorconfig if your project not contain it.

## Update .editorconfig

When you want to update your editorconfig manually, please run following command.

```sh
cp ./node_modules/@fourdigit/editorconfig-config-fourdigit/.editorconfig .editorconfig
```
