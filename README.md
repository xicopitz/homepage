![Homepage Preview](/images/preview.png)

[![Docker](https://github.com/benphelps/homepage/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/benphelps/homepage/actions/workflows/docker-publish.yml)
[![Weblate](https://hosted.weblate.org/widgets/homepage/-/homepage/svg-badge.svg)](https://hosted.weblate.org/engage/homepage/)

## Features

  * Fast! The entire site is statically generated at build time, so you can expect instant load times
  * Images built for AMD64 (x86_64), ARM64, ARMv7 and ARMv6
    - Supports all Raspberry Pi's, most SBCs & Apple Silicon
  * Full i18n support with automatic language detection
    - Translations for Chinese, Dutch, French, German, Norwegian Bokmål, Portuguese, Russian and Spanish
    - Want to help translate? [Join the Weblate project](https://hosted.weblate.org/engage/homepage/)
  * Service & Web Bookmarks
  * Docker Integration
    - Container status (Running / Stopped) & statistics (CPU, Memory, Network)
    - Automatic service discovery (via labels)
  * Service Integration
    - Sonarr, Radarr, Readarr, Prowlarr, Emby, Jellyfin, Tautulli (Plex)
    - Ombi, Overseerr, Jellyseerr, NZBGet, SABnzbd, ruTorrent, Transmission
    - Portainer, Traefik, Speedtest Tracker, PiHole, Nginx Proxy Manager, Gotify
  * Information Providers
    - Coin Market Cap
  * Information & Utility Widgets
    - System Stats (Disk, CPU, Memory)
    - Weather via WeatherAPI.com or OpenWeatherMap
      - Automatic location detection (with HTTPS), or manual location selection
    - Search Bar
  * Customizable
    - 21 theme colors with light and dark mode support
    - Background image support

## Support & Suggestions

If you have any questions, suggestions, or general issues, please start a discussion on the [Discussions](https://github.com/benphelps/homepage/discussions) page.

If you have a more specific issue, please open an issue on the [Issues](https://github.com/benphelps/homepage/issues) page.

## Getting Started

For configuration options, examples and more, [please check out the Wiki](https://github.com/benphelps/homepage/wiki).

### With Docker

Using docker compose:

```yaml
version: '3.3'
services:
    homepage:
        image: ghcr.io/benphelps/homepage:latest
        container_name: homepage
        ports:
            - 3000:3000
        volumes:
            - /path/to/config:/app/config
            - /var/run/docker.sock:/var/run/docker.sock # (optional) For docker integrations
```

or docker run:

```bash
docker run -p 3000:3000 -v /path/to/config:/app/config -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/benphelps/homepage:latest
```

### With Node

First, clone the repository:

```bash
git clone https://github.com/benphelps/homepage.git
```

Then install dependencies and build the production bundle (I'm using pnpm here, you can use npm or yarn if you like):

```bash
pnpm install
pnpm build
```

If this is your first time starting, copy the `src/skeleton` directory to `config/` to populate initial example config files.

Finally, run the server:

```bash
pnpm start
```

## Configuration

Configuration files will be genereted and placed on the first request.

Configuration is done in the /config directory using .yaml files.  Refer to each config for
the specific configuration options.

You may also check [the wiki](https://github.com/benphelps/homepage/wiki) for detailed configuration instructions, examples and more.

## Development

Install NPM packages, this project uses [pnpm](https://pnpm.io/) (and so should you!):

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to start.

This is a [Next.js](https://nextjs.org/) application, see their doucmentation for more information:

## Contributors

Huge thanks to the all the contributors who have helped make this project what it is today!  In alphabetical order:

  * [aidenpwnz](https://github.com/benphelps/homepage/commits?author=aidenpwnz) - Nginx Proxy Manager, Search Bar Widget
  * [AlexFullmoon](https://github.com/benphelps/homepage/commits?author=AlexFullmoon) - OpenWeatherMap Widget
  * [AmadeusGraves](https://github.com/benphelps/homepage/commits?author=AmadeusGraves) - Spanish Translation
  * [boerniee](https://github.com/benphelps/homepage/commits?author=boerniee) - German Translation
  * [comradekingu](https://github.com/benphelps/homepage/commits?author=comradekingu) - Norwegian Bokmål Translation
  * [deffcolony](https://github.com/benphelps/homepage/commits?author=deffcolony) - Dutch Translation
  * [desolaris](https://github.com/benphelps/homepage/commits?author=desolaris) - Russian Translation
  * [ilusi0n](https://github.com/benphelps/homepage/commits?author=ilusi0n) - Jellyseerr Integration
  * [ItsJustMeChris](https://github.com/benphelps/homepage/commits?author=ItsJustMeChris) - Coin Market Cap Widget
  * [jackblk](https://github.com/benphelps/homepage/commits?author=jackblk) - Vietnamese Translation
  * [JazzFisch](https://github.com/benphelps/homepage/commits?author=JazzFisch) - Readarr, SABnzbd & Transmission Integrations
  * [modem7](https://github.com/benphelps/homepage/commits?author=modem7) - Impvoed Docker Image
  * [nicedc](https://github.com/benphelps/homepage/commits?author=nicedc) - Chinese Translation
  * [Nonoss117](https://github.com/benphelps/homepage/commits?author=Nonoss117) - French Translation
  * [quod](https://github.com/benphelps/homepage/commits?author=quod) - Fixed Typos
  * [schklom](https://github.com/benphelps/homepage/commits?author=schklom) - ARM64, ARMv7 and ARMv6
  * [xicopitz](https://github.com/benphelps/homepage/commits?author=xicopitz) - Gotify & Prowlarr Integration
