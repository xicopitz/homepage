# Configuration

The `settings.yaml` file allows you to define application level options.


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