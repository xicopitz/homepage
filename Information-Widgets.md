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


## Weather

The weather widget uses the weatherapi.com API, so you will need to [register](https://www.weatherapi.com/signup.aspx) and grab your API key (free tier is more than enough).

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