# @ck-oss/prettier-config

CK OSS Prettier Configuration

## Installation

```bash
npm i --save-dev @ck-oss/prettier-config
```

## default configuration

- Format `package.json` with `prettier-plugin-packagejson`

```json
// package.json
{
  "prettier": "@ck-oss/prettier-config"
}
```

## with-tailwind configuration

- Format `package.json` with `prettier-plugin-packagejson`
- Sort tailwind classes `with prettier-plugin-tailwindcss`

```json
// package.json
{
  "prettier": "@ck-oss/prettier-config/with-tailwind"
}
```
