# Configuration

The weather widget uses the weatherapi.com API, so you will need to register and grab your API key (free tier is more than enough).

The widget is configured inside of the `widgets.yaml` file.

```yaml
- weather:
    latitude: 49.947279
    longitude: 24.223126
    units: metric
    apiKey: yourweatherapidotcomkey
    cache: 5
```

`latitude` and `longitude` are for the location you'd like the weather report to be for.

`units` can be either `metric` for celsius or `imperial` for fahrenheit.

`cache` is how long, in minutes, to cache the API response for.  This allows you to stay well within the free tier API limits.