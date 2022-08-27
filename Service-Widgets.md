# Configuration

Unless otherwise noted, URLs should not end with a `/` or other API path.  Each widget will handle the path on its own.

Each service can have one widget attached to it (often matching the service type, but thats not forced).

Using Emby as an example, this is how you would attach the Emby service widget.

```yaml
- Emby:
    icon: emby.png
    href: http://emby.home/
    description: Movies & TV Shows
    widget:
      type: emby
      url: http://emby.home/
      key: st5XKXl8C0olqTHFPXNVCPIuU5bS6y
```

## Emby

You can create an API key from inside Emby at `Settings > Advanced > Api Keys`

```yaml
widget:
  type: emby
  url: http://emby.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```

## Jellyfin

You can create an API key from inside Jellyfin at `Settings > Advanced > Api Keys`

```yaml
widget:
  type: jellyfin
  url: http://jellyfin.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```

## Sonarr

Find your API key under `Settings > General`.

```yaml
widget:
  type: sonarr
  url: http://sonarr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```

## Radarr

Find your API key under `Settings > General`.

```yaml
widget:
  type: radarr
  url: http://radarr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```

## Ombi

Find your API key under `Settings > Configuration > General`.

```yaml
widget:
  type: ombi
  url: http://ombi.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```

## Nzbget

This widget uses the same authentication method as your browser when logging in (HTTP Basic Auth), and is often referred to as the ControlUsername and ControlPassword inside of Nzbget documentation.

```yaml
widget:
  type: nzbget
  url: http://nzbget.host.or.ip
  username: controlusername
  password: controlpassword
```

## ruTorrent

This requires the `httprpc` plugin to be installed and enabled, and is part of the default ruTorrent plugins.  If you have not explicitly removed or disable this plugin, it should be available.

```yaml
widget:
  type: rutorrent
  url: http://rutorrent.host.or.ip
  username: username # optional, false if not used
  password: password # optional, false if not used
```

## PiHole

PiHole does not require any authentication for the widget to work, as it uses the data that is exposed publicly.

```yaml
widget:
  type: pihole
  url: http://pi.hole.or.ip
  proxy: true # Optional, only use if it doesn't work otherwise
```

## Portainer

You'll need to make sure you have the correct environment set for the integration to work properly. From the Environments section inside of Portainer, click the one you'd like to connect to and observe the ID at the end of the URL (should be), something like `#!/endpoints/1`, here `1` is the value to set as the `env` value.

Also, Portainer does not expose CORS headers, so requires being passed through the proxy API, and is often exposed over HTTPS (which is often self-signed).  As such, there are many hoops to jump through and this often causes issues.  If you're having trouble connecting to your Portainer instance, please open an Issue and I'll try to help as much as possible. 

```yaml
widget:
  type: portainer
  url: https://portainer.host.or.ip:9443
  env: 1
  key: ptr_accesskeyaccesskeyaccesskeyaccesskey
```

## Traefik

No extra configuration is required.

```yaml
widget:
  type: traefik
  url: http://traefik.host.or.ip
```

## Speedtest Tracker

No extra configuration is required.

```yaml
widget:
  type: speedtest
  url: http://speedtest.host.or.ip
```