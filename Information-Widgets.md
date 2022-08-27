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

<img width="534" alt="Resource Widgets" src="https://user-images.githubusercontent.com/82196/186882330-73d1024c-a0b8-4d8c-81dc-f1c2b3920188.png">


## Resources

You can include all or some of the available resources.  If you do not want to see that resource, simply pass `false`.

The disk path is the path reported by `df` (Mounted On), or the mount point of the disk.

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

<img width="413" alt="Screenshot 2022-08-27 at 2 52 20 AM" src="https://user-images.githubusercontent.com/82196/187005111-57a29f5c-96d5-4dab-bedc-eaecf3de5c57.png">


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

## OpenWeatherMap

The free tier is all thats required, you will need to [subscribe](https://home.openweathermap.org/subscriptions/unauth_subscribe/onecall_30/base) and grab your API key.

```yaml
- openweathermap:
    label: Kyiv #optional
    latitude: 50.449684
    longitude: 30.525026
    units: metric # or imperial
    apiKey: youropenweathermapkey
    cache: 5 # Time in minutes to cache API responses, to stay within limits
```
