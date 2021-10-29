---
title: Jekyll Docker
tags:
  - jekyll
  - github
description: Jekyll Docker Compose File
---

### Jekyll docker-compose.yaml

```Docker
version: '2'

services:
  jekyll:
    image: jekyll/jekyll:latest
    command: jekyll serve --watch --force_polling --verbose
    ports:
      - 4000:4000
    volumes:
      - .:/srv/jekyll

```
