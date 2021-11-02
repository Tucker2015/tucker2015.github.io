---
sidebar_position: 1
---

# Jekyll Docker Compose

### docker-compose.yaml for Jekyll

```yaml
version: "2"

services:
  jekyll:
    image: jekyll/jekyll:latest
    command: jekyll serve --watch --force_polling --verbose
    ports:
      - 4000:4000
    volumes:
      - .:/srv/jekyll
```
