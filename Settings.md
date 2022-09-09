# Configuration

The `settings.yaml` file allows you to define application level options.  For changes made to this file to take effect, you will need to regenerate the static HTML, this can be done by clicking the refresh icon in the bottom right of the page.


## Title

You can customize the title of the page if you'd like.

```yaml
title: My Awesome Homepage
```

## Background Image

If you'd like to use a background image instead of the solid theme color, you may provide a full URL to an image of your choice.


```yaml
background: https://images.unsplash.com/photo-1502790671504-542ad42d5189?auto=format&fit=crop&w=2560&q=80
```

Or you may pass the path to a local image relative to the `/app/public` directory, which could be configured like this,

Inside of your Docker Compose file, mount a path to where your images are kept:
```yaml
volumes:
  - /my/homepage/images:/app/public/images
```

and then reference that image:
```yaml
background: /images/background.png
```

## Providers

The `providers` section allows you to define shared API provider options and secrets.  Currently this allows you to define your weather API keys in secret.

```yaml
providers:
  openweathermap: openweathermapapikey
  weatherapi: weatherapiapikey
```

You can then pass `provider` instead of `apiKey` in your widget configuration.

```yaml
- weather:
    latitude: 50.449684
    longitude: 30.525026
    provider: weatherapi
```