

# Quickdash

Quickdash is a simple Angular/JSON powered self-hosted start page.

- Download: https://github.com/SolarSistim/Quickdash/releases/tag/v1.0.0-release
- Unzip Quickdash_v1.0.0.zip into your favorite web server's srv/wwwroot folder.

![quickdash](https://github.com/user-attachments/assets/f3f04558-42ce-4fda-abff-36d0465d4e7b)

# Features

- Global search feature allows searching Google, or other specified search engine, and filters the links you've configured.
- JSON powered links list (YAML detractors eat your heart out)
- PNG icons (No icon library is loaded)
- Front-end app only: No back-end server required; just pop it onto your favorite webserver.

# Technologies used

- Angular CLI 18.0.4
- Angular Material 18.2.14
- NG Bootstrap 5.3.3

# Icons

**There are no icon libraries loaded in this project.** The "icons" are just 120x120 PNG images @ 300 DPI. 

Why do this? - Because no matter HOW MANY icons libraries I load into this thing, there will ALWAYS be something missing.

Instead of going to all the effort and code necessary to select icons from an icon library - at least in my case - it's easier to google for a matching image, pop open Photoshop, paste and save the "icon" at the necessary dimensions.

There are about 150 custom PNG "icons" included in this project.

Need a new icon? Just pop your icon into /assets/icons. 

Recommended icon format is PNG, and recommended dimensions are 120x120 at 300 DPI.

![icons2](https://github.com/user-attachments/assets/30e8c493-b8eb-4b0f-a5cd-876fa1ce99d2)

# Editing the colors & settings

The configuration file **"board-data.json"** is found at /assets/board-data.json in the compiled app.

## Quickdash Settings:

```
  "quickdash-settings": [
    {
      "theme": {
        "background-color": "#242B33",
        "category-background-color": "#2E3A46",
        "category-header-color": "#303F48",
        "category-link-color": "white"
      },
      "search": {
        "enabled": true,
        "provider": "Google",
        "url": "https://www.google.com/search?q=",
        "search_bar_color": "#303F48"
      }
    }
```

## Settings:

Color settings:
Colors are set by CSS colors, example: "#242B33" or "black".

- **background-color**: The CSS Background color of the entire app.
- **category-background-color**: The background color of each category panel in CSS format. 
- **category-header-color**: The background color of each category panel header in CSS format.
- **category-link-color**: The color of each category link in CSS format.

Search settings:

- **enabled**: Boolean, enables or disables the search feature.
- **provider**: The name of the search provider, Example: Google, DuckDuckGo.
- **url**: The url prefix for the search provider. Example: "https://www.google.com/search?q=" for Google, or "https://duckduckgo.com/?t=h_&q=" for DuckDuckGo.
- **search_bar_color**: The color of the border around the search bar in CSS format.

# Editing categories & links

## Quickdash Settings:

```
    {
      "name": "Assets",
      "items": [
        {
          "title": "Tasks",
          "icon": "tasks.png",
          "link": "https://tasks.google.com/"
        },
        {
          "title": "Tomatoes",
          "icon": "tomatoes.png",
          "link": "https://www.rottentomatoes.com/"
        },
        {
          "title": "Cloud Convert",
          "icon": "cloudconvert.png",
          "link": "https://cloudconvert.com/mobi-to-epub"
        },
        {
          "title": "Github",
          "icon": "github.png",
          "link": "https://www.github.com"
        }
      ]
    },
```

## Category & links settings:

Quickdash will iterate over the "links" portion of board-data.json and display them in the order that they're in within the JSON file.

- **name**: The name of the category. This is the part that will cause a category panel to appear.
- **title**: The title of the link. This is what the link will apear as on the dashboard.
- **icon**: The icon's filename. All icons are hosted at /assets/icons.
- **link**: The link that you will navigate to when you click on it. Always opens in new tab.

# The entire quickdash JSON configuration file

```
{
  "quickdash-settings": [
    {
      "theme": {
        "background-color": "#242B33",
        "category-background-color": "#2E3A46",
        "category-header-color": "#303F48",
        "category-link-color": "white"
      },
      "search": {
        "enabled": true,
        "provider": "Google",
        "url": "https://www.google.com/search?q=",
        "search_bar_color": "#303F48"
      }
    }
  ],
  "links": [
    {
      "name": "Assets",
      "items": [
        {
          "title": "Tasks",
          "icon": "tasks.png",
          "link": "https://tasks.google.com/"
        },
        {
          "title": "Tomatoes",
          "icon": "tomatoes.png",
          "link": "https://www.rottentomatoes.com/"
        },
        {
          "title": "Cloud Convert",
          "icon": "cloudconvert.png",
          "link": "https://cloudconvert.com/mobi-to-epub"
        },
        {
          "title": "Github",
          "icon": "github.png",
          "link": "https://www.github.com"
        }
      ]
    },
    {
      "name": "Card & Credit",
      "items": [
        {
          "title": "American Express",
          "icon": "american_express.png",
          "link": "https://www.americanexpress.com/"
        },
        {
          "title": "Capital One",
          "icon": "capital_one.png",
          "link": "https://www.capitalone.com/"
        },
        {
          "title": "Capital Group",
          "icon": "capital_group.png",
          "link": "https://capitalgroup.retirementpartner.com/participant/#/login"
        },
        {
          "title": "Experian",
          "icon": "experian.png",
          "link": "https://usa.experian.com/login/index"
        },
        {
          "title": "Credit Karma",
          "icon": "credit_karma.png",
          "link": "https://www.creditkarma.com/auth/logon"
        },
        {
          "title": "Discover",
          "icon": "discover.png",
          "link": "https://www.discover.com/"
        }
      ]
    },
    {
      "name": "Social",
      "items": [
        {
          "title": "Discord",
          "icon": "discord.png",
          "link": "https://discord.com"
        },
        {
          "title": "Facebook",
          "icon": "facebook.png",
          "link": "https://www.facebook.com/"
        },
        {
          "title": "X",
          "icon": "x.png",
          "link": "https://www.x.com/"
        },
        {
          "title": "Reddit",
          "icon": "reddit.png",
          "link": "https://www.reddit.com/"
        },
        {
          "title": "Youtube",
          "icon": "youtube.png",
          "link": "https://www.youtube.com/"
        },
        {
          "title": "Tiktok",
          "icon": "Tiktok.png",
          "link": "https://www.tiktok.com"
        }
      ]
    },
    {
      "name": "Utilities",
      "items": [
        {
          "title": "Mint Mobile",
          "icon": "Mint.png",
          "link": "https://www.mintmobile.com"
        },
        {
          "title": "Duke Energy",
          "icon": "duke_energy.png",
          "link": "https://salor-web.duke-energy.app/"
        },
        {
          "title": "Google Fi",
          "icon": "google_fi.png",
          "link": "https://fi.google.com/"
        },
        {
          "title": "Stericycle",
          "icon": "stericycle.png",
          "link": "https://www.mystericycle.com/"
        },
        {
          "title": "PPL",
          "icon": "ppl.png",
          "link": "https://www.pplweb.com/"
        },
        {
          "title": "Waste Connection",
          "icon": "waste_connection.png",
          "link": "https://wcnorthwest.com/"
        }
      ]
    },
    {
      "name": "Bank & Mortgage",
      "items": [
        {
          "title": "Pennymac",
          "icon": "pennymac.png",
          "link": "htps://www.pennymac.com"
        },
        {
          "title": "Wells Fargo",
          "icon": "wells_fargo.png",
          "link": "https://www.wellsfargo.com/"
        },
        {
          "title": "USAA",
          "icon": "usaa.png",
          "link": "https://www.usaa.com/"
        },
        {
          "title": "US Bank",
          "icon": "us_bank.png",
          "link": "https://www.usbank.com/index.html"
        },
        {
          "title": "Chase",
          "icon": "chase.png",
          "link": "https://www.chase.com/"
        }
      ]
    },
    {
      "name": "Media",
      "items": [
        {
          "title": "Fubo",
          "icon": "fubo.png",
          "link": "https://www.fubo.tv/stream/tv/"
        },
        {
          "title": "Peacock",
          "icon": "peacock.png",
          "link": "https://www.peacocktv.com/"
        },
        {
          "title": "Shudder",
          "icon": "shudder.png",
          "link": "https://www.shudder.com/"
        },
		{
          "title": "Prime Video",
          "icon": "prime_video.png",
          "link": "https://www.amazon.com/gp/video/storefront"
        },
        {
          "title": "Netflix",
          "icon": "netflix.png",
          "link": "https://www.netflix.com/browse"
        },
        {
          "title": "Plex",
          "icon": "plex.png",
          "link": "https://app.plex.tv/desktop/#!/"
        }
      ]
    },
    {
      "name": "Self Hosted Media",
      "items": [
        {
          "title": "Organizr",
          "icon": "organizr.png",
          "link": "https://github.com/causefx/Organizr"
        },
        {
          "title": "qBittorrent",
          "icon": "qbittorrent.png",
          "link": "https://www.qbittorrent.org/"
        },
        {
          "title": "Ombi",
          "icon": "ombi.png",
          "link": "https://ombi.io/"
        },
        {
          "title": "Radarr",
          "icon": "radarr.png",
          "link": "https://radarr.video/"
        },
        {
          "title": "Sonarr",
          "icon": "sonarr.png",
          "link": "https://sonarr.tv/"
        },
        {
          "title": "Tautulli",
          "icon": "tautulli.png",
          "link": "https://tautulli.com/"
        },
        {
          "title": "Trailarr",
          "icon": "trailarr.png",
          "link": "https://github.com/nandyalu/trailarr"
        }
      ]
    },
    {
      "name": "Self Hosted Other",
      "items": [
        {
          "title": "Grafana",
          "icon": "grafana.png",
          "link": "https://www.grafana.com"
        },
        {
          "title": "MeTube",
          "icon": "youtube.png",
          "link": "https://github.com/alexta69/metube"
        },
        {
          "title": "PiHole",
          "icon": "pihole.png",
          "link": "https://pi-hole.net/"
        },
        {
          "title": "Portainer",
          "icon": "portainer.png",
          "link": "https://www.portainer.io/"
        },
        {
          "title": "IT_Tools",
          "icon": "tools.png",
          "link": "https://hub.docker.com/r/corentinth/it-tools"
        }
      ]
    },
    {
      "name": "Insurance",
      "items": [
        {
          "title": "State Farm",
          "icon": "state_farm.png",
          "link": "https://www.statefarm.com/"
        },
		{
          "title": "Allstate",
          "icon": "allstate.png",
          "link": "https://www.allstate.com/"
        },
        {
          "title": "Family Insurance",
          "icon": "american_insurance_family.png",
          "link": "https://www.amfam.com/"
        },
        {
          "title": "Progressive",
          "icon": "progressive.png",
          "link": "https://www.progressive.com/"
        }
      ]
    },
    {
      "name": "Weather",
      "items": [
        {
          "title": "Ventusky",
          "icon": "ventusky.png",
          "link": "https://www.ventusky.com/"
        },
        {
          "title": "Accuweather",
          "icon": "accuweather.png",
          "link": "https://www.accuweather.com/en/us/pensacola/32501/weather-radar/328165"
        },
        {
          "title": "Open Weather",
          "icon": "open_weather.png",
          "link": "https://home.openweathermap.org/users/sign_in"
        },
        {
          "title": "National Weather",
          "icon": "national_weather_service.png",
          "link": "https://www.weather.gov/"
        },
        {
          "title": "Wunderground",
          "icon": "wunderground.png",
          "link": "https://www.wunderground.com/"
        }
      ]
    },
    {
      "name": "Remote Access",
      "items": [
        {
          "title": "Teamviewer",
          "icon": "teamviewer.png",
          "link": "https://login.teamviewer.com/LogOn"
        },
        {
          "title": "Google RDP",
          "icon": "google_rdp.png",
          "link": "https://remotedesktop.google.com/access/"
        },
        {
          "title": "Logmein",
          "icon": "logmein.png",
          "link": "https://www.logmein.com"
        },
        {
          "title": "Splashtop",
          "icon": "splashtop.png",
          "link": "https://www.splashtop.com/"
        }
      ]
    },
    {
      "name": "Travel",
      "items": [
        {
          "title": "Norwegian",
          "icon": "norwegian.png",
          "link": "https://www.ncl.com/shorex/login"
        },
        {
          "title": "Morgan Stanley",
          "icon": "morgan_stanley.png",
          "link": "https://www.morganstanleyclientserv.com/"
        },
        {
          "title": "Princess",
          "icon": "princess.png",
          "link": "https://www.princess.com/cruise-search/"
        },
        {
          "title": "Royal Caribbean",
          "icon": "royal_caribbean.png",
          "link": "https://www.royalcaribbean.com/"
        },
        {
          "title": "Liberty Travel",
          "icon": "liberty_travel.png",
          "link": "https://www.libertytravel.com/"
        }
      ]
    },
    {
      "name": "Investment",
      "items": [
        {
          "title": "Capital Group",
          "icon": "capital_group.png",
          "link": "https://www.capitalgroup.com/individual/accounts/login.htm"
        },
        {
          "title": "Etherium",
          "icon": "etherium.png",
          "link": "http://chrome-extension//nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#"
        },
        {
          "title": "Morgan Stanley",
          "icon": "morgan_stanley.png",
          "link": "https://www.morganstanleyclientserv.com/"
        }
      ]
    },
    {
      "name": "Time Tracking",
      "items": [
        {
          "title": "Toggl",
          "icon": "toggl.png",
          "link": "https://www.toggl.com"
        },
        {
          "title": "My Hours",
          "icon": "my_hours.png",
          "link": "https://myhours.com"
        },
        {
          "title": "Tracking Time",
          "icon": "tracking_time.png",
          "link": "https://trackingtime.co/"
        },
        {
          "title": "Everhour",
          "icon": "everhour.png",
          "link": "https://everhour.com/"
        }
      ]
    }
  ]
}
```

# Deployment

Quickdash is an HTML/Javascript only application. That means there are no back-end technologies in use like NodeJS, PHP or ASP, and all you have to do to deploy it is to plop it into your favorite Web server's wwwroot folder (or equivalent).

Example: 

- **Nginx**: /var/www/html/Quickdash\
- **IIS**: \wwwroot\Quickdash\
- **Apache**: /var/www/html/Quickdash/

# Download

- https://github.com/SolarSistim/Quickdash/releases/tag/v1.0.0-release
