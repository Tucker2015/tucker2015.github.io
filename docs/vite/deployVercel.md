---
sidebar_position: 7
---

# Deploying to Vercel / Plesk

## Deploying to Vercel

### 1. Add a `vercel.json` file

```json title="vercel.json"
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Deploying to Plesk

### 1. Add a `.htaccess` file

```htaccess title=".htaccess"
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
