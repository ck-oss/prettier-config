# @ck-oss/prettier-config

CK OSS Prettier Configuration

## Installation

```
npm i -D @ck-oss/prettier-config
```

## default configuration

- Format `package.json` with `prettier-plugin-packagejson`
- Sort Imports with `@ianvs/prettier-plugin-sort-imports`

```
// package.json
{
    "prettier": "@ck-oss/prettier-config"
}
```

## with-tailwind configuration

- Format `package.json` with `prettier-plugin-packagejson`
- Sort Imports with `@ianvs/prettier-plugin-sort-imports`
- Sort tailwind classes `with prettier-plugin-tailwindcss`

```
// package.json
{
    "prettier": "@ck-oss/prettier-config/with-tailwind"
}
```
