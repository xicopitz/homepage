# Configuration

Information widgets are placed above the first horizontal fold line, and can be configured more than once.

As an example, we'll place two resource widgets, one that reports all stats, and one that report only disk usage for a separate location.

```yaml
- resources:
    cpu: true
    memory: true
    disk: /mnt/storage

- resources:
    disk: /mnt/backups
```

Which results in something like this:

<img width="484" alt="Resource Widget" src="https://user-images.githubusercontent.com/82196/189524632-f989de29-9a54-4edb-88a9-e548b9cfc61c.png">

## Resources

You can include all or some of the available resources.  If you do not want to see that resource, simply pass `false`.

The disk path is the path reported by `df` (Mounted On), or the mount point of the disk.

**Any disk you wish to access must be mounted to your container as a volume.**

```yaml
- resources:
    cpu: true
    memory: true
    disk: /disk/mount/path
```

You can also pass a `label` option, which allows you to group resources under named sections,

```yaml
- resources:
    label: System
    cpu: true
    memory: true

- resources:
    label: Storage
    disk: /mnt/storage
```

Which produces something like this,

<img width="373" alt="Resource Groups" src="https://user-images.githubusercontent.com/82196/189524699-e9005138-e049-4a9c-8833-ac06e39882da.png">

If you have more than a single disk and would like to group them together under the same label, you can pass an array of paths instead,

```yaml
- resources:
    label: Storage
    disk:
      - /mnt/storage
      - /mnt/backup
      - /mnt/media
```

To produce something like this,

<img width="369" alt="Screenshot 2022-09-11 at 2 15 42 PM" src="https://user-images.githubusercontent.com/82196/189524583-abdf4cc6-99da-430c-b316-16c567db5639.png">


## WeatherAPI

The free tier is all thats required, you will need to [register](https://www.weatherapi.com/signup.aspx) and grab your API key.

```yaml
- weatherapi:
    label: Kyiv # optional
    latitude: 50.449684
    longitude: 30.525026
    units: metric # or imperial
    apiKey: yourweatherapikey
    cache: 5 # Time in minutes to cache API responses, to stay within limits
```

You can optionally not pass a `latitude` and `longitude` and the widget will use your current location (requires a secure context, eg. HTTPS).

## OpenWeatherMap

The free tier "One Call API" is all thats required, you will need to [subscribe](https://home.openweathermap.org/subscriptions/unauth_subscribe/onecall_30/base) and grab your API key.

```yaml
- openweathermap:
    label: Kyiv #optional
    latitude: 50.449684
    longitude: 30.525026
    units: metric # or imperial
    apiKey: youropenweathermapkey
    cache: 5 # Time in minutes to cache API responses, to stay within limits
```

You can optionally not pass a `latitude` and `longitude` and the widget will use your current location (requires a secure context, eg. HTTPS).

## Search

You can add a search bar to your top widget area that can search using Google, Duckduckgo, Bing or any other custom provider that supports the basic `?q=` search query param.

```yaml
- search:
    provider: google # google, duckduckgo, bing or custom
    target: _blank
```

or for a custom search:

```yaml
- search:
    provider: custom
    url: https://lougle.com/?q=
    target: _blank
```