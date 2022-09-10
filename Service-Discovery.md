## Overview

Homepage features automatic service discovery for containers with the proper labels attached, all configuration options can be applied using dot notation, begging with `homepage`.

Below is an example of the same service entry shown above, as docker labels.

```yaml
services:
  emby:
    image: lscr.io/linuxserver/emby:latest
    container_name: emby
    ports:
      - 8096:8096
    restart: unless-stopped
    labels:
      - homepage.group=Media
      - homepage.name=Emby
      - homepage.icon=emby.png
      - homepage.href=http://emby.home/
      - homepage.description=Media server
```

When your Docker instance has been properly configured, this service will be automatically discovered and added to your Homepage.  **You do not need to specify the `server` or `container` values, as they will be automatically inferred.**

## Widets

You may also configure widgets, along with the standard service entry, again, using dot notation.


```yaml
labels:
  - homepage.group=Media
  - homepage.name=Emby
  - homepage.icon=emby.png
  - homepage.href=http://emby.home/
  - homepage.description=Media server
  - homepage.widget.type=emby
  - homepage.widget.url=http://emby.home
  - homepage.widget.key=yourembyapikeyhere
```

## Caveats

Currently, there is no way to define rigid ordering when using service discovery, and the order will be determined by the order returned from the Docker API.  Discovered services take precedence over services defined in `services.yaml` and will show above them.