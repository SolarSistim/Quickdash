
![quickdash_horizontal_small](https://github.com/user-attachments/assets/a48e2231-32e6-4144-96d8-dafe67573dc7)

# Quickdash

Quickdash is a simple Angular/JSON powered self-hosted start page.

- Download: https://github.com/SolarSistim/Quickdash/releases
- Unzip the Quickdash zip file into your favorite web server's srv or wwwroot folder.

![quickdash2png](https://github.com/user-attachments/assets/3f19d9d6-32c7-4b39-8c82-962e599d580b)

# Why does this exist?

For starters, I don't like configuring YAML files. Something about the tab-delineation just doesn't jibe with me, and I find JSON to be much easier to work with. 

Also, I've found that other start-page repos have either too few options, or too many. I wanted something in-between, where I can see 50+ links on the screen at the same time, but that I didn't have to wade through a bunch of documentation to figure out.

I'm also using this project as a springboard to learn how to create Docker containers.

# Features

- NEW Added 04-09-2025: Added Tabs in order to futher organize your links.
- Global search feature allows searching Google, or other specified search engine, and filters the links you've configured.
- JSON powered links list (YAML detractors eat your heart out)
- PNG icons (No icon library is loaded)
- Front-end app only: No back-end server required; just pop it onto your favorite webserver.
- Mobile friendly interface.

# Technologies used

- Angular CLI 18.0.4
- Angular Material 18.2.14
- NG Bootstrap 5.3.3

# Icons

EDIT: Added about another 50 icons on 04-09-2025. Updated icons folder screenshot.

**There are no icon libraries loaded in this project.** The "icons" are just 120x120 PNG images @ 300 DPI. 

Why do this? - Because no matter HOW MANY icon libraries I load into this thing, there will ALWAYS be something missing.

Instead of going to all the effort and code necessary to select icons from an icon library - at least in my case - it's easier to google for a matching image, pop open Photoshop, paste and save the "icon" at the necessary dimensions.

There are about 150 custom PNG "icons" included in this project.

Need a new icon? Just pop your icon into /assets/icons. 

Recommended icon format is PNG, and recommended dimensions are 120x120 at 300 DPI.

![icons](https://github.com/user-attachments/assets/3e95c7ec-2a71-4405-87fa-ef1e3f8a0c4c)

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
      },
      "other": {
        "showLogo": true
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

Other settings:

- **showLogo**: Boolean, enables or disables the Quickdash logo at the top of the screen.

# Editing categories & links

## Quickdash categories & links:

This is an example of one category in the Quickdash board-data.json.

```
    {
      "name": "Social",
      "categories": [
        {
          "name": "Old School",
          "items": [
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
              "title": "Threads",
              "icon": "threads.png",
              "link": "https://www.threads.com/"
            }
          ]
        },
        {
          "name": "Video",
          "items": [
            {
              "title": "Tiktok",
              "icon": "tiktok.png",
              "link": "https://www.tiktok.com"
            }
          ]
        },
        {
          "name": "Information Sharing",
          "items": [
            {
              "title": "Reddit",
              "icon": "reddit.png",
              "link": "https://www.reddit.com/"
            },
            {
              "title": "Quora",
              "icon": "quora.png",
              "link": "https://www.quora.com/"
            }
          ]
        }
      ]
    }
```

## Category & links settings:

Quickdash will iterate over the "categories" portion of board-data.json and display them in the order that they're in within the JSON file.

- **name (1)**: The name of the category. This is the part that will cause a tab to appear.
- **categories**: These represent the panels that show up beneath each tab.
- **name** (2): The title of the panel below the tab.
- **title**: The name of the link. This is what you'll click on to visit a link.
- **icon**: The icon's filename. All icons are hosted at /assets/icons.
- **link**: The link that you will navigate to when you click on it. Always opens in new tab.

## Upgrading from Quickdash-v1.0.1-release to Quickdash-v1.0.2-release

There are no progammatic backup/restore features as of yet. The JSON config file in v1.0.1, board-data.json, is an entirely different format than in v1.0.2, which necessitates manually moving the links from the old JSON file to the new JSON file.

I have a backup/restore feature planned for future releases.

# Deployment

Quickdash is an HTML/Javascript only application. That means there are no back-end technologies in use like NodeJS, PHP or ASP, and all you have to do to deploy it is to plop it into your favorite Web server's wwwroot folder (or equivalent).

Example: 

- **Nginx**: /var/www/html/Quickdash\
- **IIS**: \wwwroot\Quickdash\
- **Apache**: /var/www/html/Quickdash/

# Download

- https://github.com/SolarSistim/Quickdash/releases

# Roadmap

- COMPLETED: Create option to add tabs
- Add background image option
- Add backup/restore feature
- Add visual QYSIWYG Json editor
- Add trianglify as background option

# Changelog

- April 9 2025: Quickdash-v1.0.2-release - Added tabs feature.
- March 27 2025: Quickdash-v1.0.1-release - fixed search feature bug that prevented icons from showing up in the search bar autocomplete.
- Match 26 2025: Quickdash-1.0.0-release - All planned features for initial release.

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
      },
      "other": {
        "showLogo": true
      }
    }
  ],
  "tabs": [
    {
      "name": "Social",
      "categories": [
        {
          "name": "Old School",
          "items": [
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
              "title": "Threads",
              "icon": "threads.png",
              "link": "https://www.threads.com/"
            },
            {
              "title": "Bluesky",
              "icon": "bluesky.png",
              "link": "https://www.bluesky.com/"
            }
          ]
        },
        {
          "name": "Image Sharing",
          "items": [
            {
              "title": "Instagram",
              "icon": "instagram.png",
              "link": "https://www.instagram.com/"
            },
            {
              "title": "Tumblr",
              "icon": "tumblr.png",
              "link": "https://www.tumblr.com/"
            },
            {
              "title": "Pixabay",
              "icon": "pixabay.png",
              "link": "https://www.pixabay.com/"
            },
            {
              "title": "Flickr",
              "icon": "flickr.png",
              "link": "https://www.flickr.com/"
            },
            {
              "title": "Imgur",
              "icon": "imgur.png",
              "link": "https://www.imgur.com/"
            },
            {
              "title": "Photobucket",
              "icon": "photobucket.png",
              "link": "https://www.photobucket.com/"
            }
          ]
        },
        {
          "name": "Video",
          "items": [
            {
              "title": "Tiktok",
              "icon": "tiktok.png",
              "link": "https://www.tiktok.com"
            },
            {
              "title": "Youtube",
              "icon": "youtube.png",
              "link": "https://www.youtube.com/"
            },
            {
              "title": "IGTV",
              "icon": "igtv.png",
              "link": "https://www.igtv.com/"
            },
            {
              "title": "Daily Motion",
              "icon": "daily_motion.png",
              "link": "https://www.dailymotion.com/"
            },
            {
              "title": "Twitch",
              "icon": "twitch.png",
              "link": "https://www.twitch.tv/"
            }
          ]
        },
        {
          "name": "Information Sharing",
          "items": [
            {
              "title": "Reddit",
              "icon": "reddit.png",
              "link": "https://www.reddit.com/"
            },
            {
              "title": "Quora",
              "icon": "quora.png",
              "link": "https://www.quora.com/"
            }
          ]
        },
        {
          "name": "Chit Chat",
          "items": [
            {
              "title": "Snapchat",
              "icon": "snapchat.png",
              "link": "https://www.snapchat.com/"
            },
            {
              "title": "WeChat",
              "icon": "wechat.png",
              "link": "https://web.wechat.com/"
            },
            {
              "title": "Discord",
              "icon": "discord.png",
              "link": "https://discord.com/"
            },
            {
              "title": "Mumble",
              "icon": "mumble.png",
              "link": "https://mumble.com/"
            },
            {
              "title": "Telegram",
              "icon": "telegram.png",
              "link": "https://www.telegram.com/"
            },
            {
              "title": "Ventrillo",
              "icon": "ventrillo.png",
              "link": "https://www.ventrillo.com/"
            }
          ]
        },
        {
          "name": "Job & Professional",
          "items": [
            {
              "title": "LinkedIn",
              "icon": "linkedin.png",
              "link": "https://www.linkedin.com/"
            },
            {
              "title": "Freelancer",
              "icon": "freelancer.png",
              "link": "https://www.freelancer.com/"
            },
            {
              "title": "Upwork",
              "icon": "upwork.png",
              "link": "https://www.upwork.com/"
            },
            {
              "title": "Fiverr",
              "icon": "fiverr.png",
              "link": "https://www.fiverr.com/"
            },
            {
              "title": "Guru",
              "icon": "guru.png",
              "link": "https://www.guru.com/"
            }
          ]
        }
      ]
    },
    {
      "name": "Bank & Card",
      "categories": [
        {
          "name": "Bank",
          "items": [
            {
              "title": "Chase",
              "icon": "chase.png",
              "link": "https://www.chase.com/"
            },
            {
              "title": "Citibank",
              "icon": "citibank.png",
              "link": "https://www.citibank.com/"
            },
            {
              "title": "Regions",
              "icon": "regions.png",
              "link": "https://www.regions.com/"
            },
            {
              "title": "US Bank",
              "icon": "us_bank.png",
              "link": "https://www.usbank.com/"
            },
            {
              "title": "Wells Fargo",
              "icon": "wells_fargo.png",
              "link": "https://www.wellsfargo.com/"
            },
            {
              "title": "Bank of America",
              "icon": "bank_of_america.png",
              "link": "https://www.bankofamerica.com/"
            },
            {
              "title": "Pen Air",
              "icon": "pen_air.png",
              "link": "/* Add correct link */"
            }
          ]
        },{
          "name": "Card",
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
              "title": "Care Credit",
              "icon": "care_credit.png",
              "link": "https://www.carecredit.com/"
            },
            {
              "title": "Discover",
              "icon": "discover.png",
              "link": "https://www.discover.com/"
            }
          ]
        },
        {
          "name": "Credit",
          "items": [
            {
              "title": "Credit Karma",
              "icon": "credit_karma.png",
              "link": "https://www.creditkarma.com/"
            },
            {
              "title": "Credit Sesame",
              "icon": "credit_sesame.png",
              "link": "https://www.creditsesame.com/"
            },
            {
              "title": "Experian",
              "icon": "experian.png",
              "link": "https://www.experian.com/"
            }
          ]
        },
        {
          "name": "Insurance 1",
          "items": [
            {
              "title": "Allstate",
              "icon": "allstate.png",
              "link": "https://www.allstate.com/"
            },
            {
              "title": "American Family Insurance",
              "icon": "american_insurance_family.png",
              "link": "https://www.amfam.com/"
            },
            {
              "title": "Farmers Insurance",
              "icon": "farmers_insurance.png",
              "link": "https://www.farmers.com/"
            },
            {
              "title": "Geico",
              "icon": "geico.png",
              "link": "https://www.geico.com/"
            }
          ]
        },
        {
          "name": "Insurance 2",
          "items": [
            {
              "title": "Home Shield",
              "icon": "home_shield.png",
              "link": "https://www.ahs.com/"
            },
            {
              "title": "Progressive",
              "icon": "progressive.png",
              "link": "https://www.progressive.com/"
            },
            {
              "title": "State Farm",
              "icon": "state_farm.png",
              "link": "https://www.statefarm.com/"
            },
            {
              "title": "Good Sam",
              "icon": "good_sam.png",
              "link": "https://www.goodsam.com/"
            }
          ]
        },
        {
          "name": "Investment 1",
          "items": [
            {
              "title": "Liberty Mutual",
              "icon": "liberty_mutual.png",
              "link": "https://www.libertymutual.com/"
            },
            {
              "title": "Blackrock",
              "icon": "blackrock.png",
              "link": "https://www.blackrock.com/"
            },
            {
              "title": "Capital Group",
              "icon": "capital_group.png",
              "link": "https://www.capitalgroup.com/"
            },
            {
              "title": "Fidelity Investment",
              "icon": "fidelity_investment.png",
              "link": "https://www.fidelity.com/"
            },
            {
              "title": "Goldman Sachs",
              "icon": "goldman_sachs.png",
              "link": "https://www.goldmansachs.com/"
            },
            {
              "title": "Morgan Stanley",
              "icon": "morgan_stanley.png",
              "link": "https://www.morganstanley.com/"
            }
          ]
        },
        {
          "name": "Investment 2",
          "items": [
            {
              "title": "Prudential",
              "icon": "prudential.png",
              "link": "https://www.prudential.com/"
            },
            {
              "title": "State Street Advisors",
              "icon": "state_street_advisors.png",
              "link": "https://www.ssga.com/"
            },
            {
              "title": "T Rowe Price",
              "icon": "t_rowe_price.png",
              "link": "https://www.troweprice.com/"
            },
            {
              "title": "Vanguard",
              "icon": "vanguard.png",
              "link": "https://investor.vanguard.com/"
            },
            {
              "title": "USAA",
              "icon": "usaa.png",
              "link": "https://www.usaa.com/"
            }
          ]
        },
        {
          "name": "Mortgage",
          "items": [
            {
              "title": "Pennymac",
              "icon": "pennymac.png",
              "link": "https://www.pennymac.com/"
            },
            {
              "title": "Fairway Mortgage",
              "icon": "fairway_mortgage.png",
              "link": "https://www.fairwaymortgage.com/"
            },
            {
              "title": "Rocket Mortgage",
              "icon": "rocket_mortgage.png",
              "link": "https://www.rocketmortgage.com/"
            }
          ]
        }
      ]
    },
    {
      "name": "Utilities",
      "categories": [
        {
          "name": "Energy 1",
          "items": [
            {
              "title": "AEP",
              "icon": "aep.png",
              "link": "https://www.aep.com/"
            },
            {
              "title": "Constellation Energy",
              "icon": "constellation_energy.png",
              "link": "https://www.constellationenergy.com/"
            },
            {
              "title": "Dominion Energy",
              "icon": "dominion_energy.png",
              "link": "https://www.dominionenergy.com/"
            },
            {
              "title": "Duke Energy",
              "icon": "duke_energy.png",
              "link": "https://www.duke-energy.com/"
            },
            {
              "title": "Entergy",
              "icon": "entergy.png",
              "link": "https://www.entergy.com/"
            }
          ]
        },
        {
          "name": "Energy 2",
          "items": [
            {
              "title": "Exelon",
              "icon": "exelon.png",
              "link": "https://www.exeloncorp.com/"
            },
            {
              "title": "FPL",
              "icon": "fpl.png",
              "link": "https://www.fpl.com/"
            },
            {
              "title": "Nextera",
              "icon": "nextera.png",
              "link": "https://www.nexteraenergy.com/"
            },
            {
              "title": "PG&E",
              "icon": "pg&e.png",
              "link": "https://www.pge.com/"
            },
            {
              "title": "Southern Company",
              "icon": "southern_company.png",
              "link": "https://www.southerncompany.com/"
            }
          ]
        },
        {
          "name": "Waste Management",
          "items": [
            {
              "title": "Clean Harbors",
              "icon": "clean_harbors.png",
              "link": "https://www.cleanharbors.com/"
            },
            {
              "title": "GFL Waste",
              "icon": "gfl_waste.png",
              "link": "https://gflenv.com/"
            },
            {
              "title": "Republic Waste Services",
              "icon": "republic_waste_services.png",
              "link": "https://www.republicservices.com/"
            },
            {
              "title": "Stericycle",
              "icon": "stericycle.png",
              "link": "https://www.stericycle.com/"
            },
            {
              "title": "Veolia",
              "icon": "veolia.png",
              "link": "https://www.veolia.com/"
            },
            {
              "title": "Waste Connection",
              "icon": "waste_connection.png",
              "link": "https://www.wasteconnections.com/"
            },
            {
              "title": "Waste Management",
              "icon": "waste_management.png",
              "link": "https://www.wm.com/"
            },
            {
              "title": "Waste Pro",
              "icon": "waste_pro.png",
              "link": "https://www.wasteprousa.com/"
            }
          ]
        },
        {
          "name": "Telecommunications",
          "items": [
            {
              "title": "AT&T",
              "icon": "at&t.png",
              "link": "https://www.att.com/"
            },
            {
              "title": "Cricket",
              "icon": "cricket.png",
              "link": "https://www.cricketwireless.com/"
            },
            {
              "title": "Google Fi",
              "icon": "google_fi.png",
              "link": "https://fi.google.com/"
            },
            {
              "title": "Mint Mobile",
              "icon": "mint.png",
              "link": "https://www.mintmobile.com/"
            },
            {
              "title": "T-Mobile",
              "icon": "tmobile.png",
              "link": "https://www.t-mobile.com/"
            },
            {
              "title": "US Mobile",
              "icon": "us_mobile.png",
              "link": "https://www.usmobile.com/"
            },
            {
              "title": "Verizon",
              "icon": "verizon.png",
              "link": "https://www.verizon.com/"
            },
            {
              "title": "Visible",
              "icon": "visible.png",
              "link": "https://www.visible.com/"
            }
          ]
        },
        {
          "name": "Travel",
          "items": [
            {
              "title": "Disney Cruise Lines",
              "icon": "disney_cruise_lines.png",
              "link": "https://disneycruise.disney.go.com/"
            },
            {
              "title": "Liberty Travel",
              "icon": "liberty_travel.png",
              "link": "https://www.libertytravel.com/"
            },
            {
              "title": "Margaritaville at Sea",
              "icon": "margaritaville_at_sea.png",
              "link": "https://margaritavilleatsea.com/"
            },
            {
              "title": "Norwegian Cruise Line",
              "icon": "norwegian.png",
              "link": "https://www.ncl.com/"
            },
            {
              "title": "Princess Cruises",
              "icon": "princess.png",
              "link": "https://www.princess.com/"
            },
            {
              "title": "Royal Caribbean",
              "icon": "royal_caribbean.png",
              "link": "https://www.royalcaribbean.com/"
            }
          ]
        }
      ]
    },
    {
      "name": "Tech & Dev",
      "categories": [
        {
          "name": "Cloud & Infrastructure",
          "items": [
            {
              "title": "AWS",
              "icon": "aws.png",
              "link": "https://aws.amazon.com/"
            },
            {
              "title": "Azure",
              "icon": "azure.png",
              "link": "https://azure.microsoft.com/"
            },
            {
              "title": "Cloudflare",
              "icon": "cloudflare.png",
              "link": "https://www.cloudflare.com/"
            },
            {
              "title": "Docker",
              "icon": "docker.png",
              "link": "https://www.docker.com/"
            },
            {
              "title": "Netlify",
              "icon": "netlify.png",
              "link": "https://www.netlify.com/"
            },
            {
              "title": "Portainer",
              "icon": "portainer.png",
              "link": "https://www.portainer.io/"
            }
          ]
        },
        {
          "name": "AI & Dev Tools",
          "items": [
            {
              "title": "ChatGPT",
              "icon": "chatgpt.png",
              "link": "https://chat.openai.com/"
            },
            {
              "title": "Claude",
              "icon": "claude.png",
              "link": "https://claude.ai/"
            },
            {
              "title": "Copilot",
              "icon": "copilot.png",
              "link": "https://github.com/features/copilot"
            },
            {
              "title": "Gemini",
              "icon": "gemini.png",
              "link": "https://www.gemini.com"
            }
          ]
        },
        {
          "name": "Repositories",
          "items": [
            {
              "title": "Gitlab",
              "icon": "gitlab.png",
              "link": "https://gitlab.com/"
            },
            {
              "title": "Github",
              "icon": "github.png",
              "link": "https://github.com/"
            },
            {
              "title": "Bitbucket",
              "icon": "bitbucket.png",
              "link": "https://bitbucket.com/"
            },
            {
              "title": "Sourceforge",
              "icon": "sourceforge.png",
              "link": "https://sourceforge.com/"
            }
          ]
        },
        {
          "name": "Remote Access",
          "items": [
            {
              "title": "Google RDP",
              "icon": "google_rdp.png",
              "link": "https://remotedesktop.google.com/"
            },
            {
              "title": "Logmein",
              "icon": "logmein.png",
              "link": "https://www.logmein.com/"
            },
            {
              "title": "Splashtop",
              "icon": "splashtop.png",
              "link": "https://www.splashtop.com/"
            },
            {
              "title": "Teamviewer",
              "icon": "teamviewer.png",
              "link": "https://www.teamviewer.com/"
            }
          ]
        },
        {
          "name": "Domain & Hosting",
          "items": [
            {
              "title": "GoDaddy",
              "icon": "godaddy.png",
              "link": "https://www.godaddy.com/"
            },
            {
              "title": "Envato",
              "icon": "envato.png",
              "link": "https://envato.com/"
            },
            {
              "title": "Netlify",
              "icon": "netlify.png",
              "link": "https://www.netlify.com/"
            }
          ]
        },
        {
          "name": "Utilities",
          "items": [
            {
              "title": "Cloud Convert",
              "icon": "cloudconvert.png",
              "link": "https://cloudconvert.com/"
            },
            {
              "title": "Lastpass",
              "icon": "lastpass.png",
              "link": "https://www.lastpass.com/"
            },
            {
              "title": "Tools",
              "icon": "tools.png",
              "link": "/* Generic tools link */"
            }
          ]
        }
      ]
    },
    {
      "name": "Self Hosted",
      "categories": [
        {
          "name": "Dashboards",
          "items": [
            {
              "title": "Grafana",
              "icon": "grafana.png",
              "link": "https://grafana.com/"
            },
            {
              "title": "Homarr",
              "icon": "homarr.png",
              "link": "https://homarr.dev/"
            },
            {
              "title": "Organizr",
              "icon": "organizr.png",
              "link": "https://organizr.app/"
            },
            {
              "title": "Tautulli",
              "icon": "tautulli.png",
              "link": "https://tautulli.com/"
            }
          ]
        },
        {
          "name": "Arr's",
          "items": [
            {
              "title": "Prowlarr",
              "icon": "prowlarr.png",
              "link": "https://tautulli.com/"
            },
            {
              "title": "Radarr",
              "icon": "radarr.png",
              "link": "https://tautulli.com/"
            },
            {
              "title": "Readarr",
              "icon": "readarr.png",
              "link": "https://tautulli.com/"
            },
            {
              "title": "Sonarr",
              "icon": "sonarr.png",
              "link": "https://tautulli.com/"
            }
          ]
        },
        {
          "name": "Other Self Hosted",
          "items": [
            {
              "title": "Pihole",
              "icon": "pihole.png",
              "link": "https://pi-hole.net/"
            },
            {
              "title": "Qbittorrent",
              "icon": "qbittorrent.png",
              "link": "https://qbittorrent.com/"
            },
            {
              "title": "Tools",
              "icon": "tools.png",
              "link": "/* Generic tools link */"
            }
          ]
        }
      ]
    },
    {
      "name": "Productivity",
      "categories": [
        {
          "name": "EMail",
          "items": [
            {
              "title": "Gmail",
              "icon": "gmail.png",
              "link": "https://mail.google.com/"
            },
            {
              "title": "Outlook.com",
              "icon": "outlook.png",
              "link": "https://www.outlook.com/"
            },
            {
              "title": "Yahoo",
              "icon": "yahoo_mail.png",
              "link": "https://www.yahoo.com/"
            },
            {
              "title": "Proton Mail",
              "icon": "proton_mail.png",
              "link": "https://www.protonmail.com/"
            }
          ]
        },
        {
          "name": "Cloud Storage",
          "items": [
            {
              "title": "Google Drive",
              "icon": "google_drive.png",
              "link": "https://drive.google.com/"
            },
            {
              "title": "One Drive",
              "icon": "onedrive.png",
              "link": "https://drive.google.com/"
            },
            {
              "title": "Dropbox",
              "icon": "dropbox.png",
              "link": "https://drive.google.com/"
            },
            {
              "title": "Mega.nz",
              "icon": "mega_nz.png",
              "link": "https://drive.google.com/"
            }
          ]
        },
        {
          "name": "Notes & Tasks",
          "items": [
            {
              "title": "Keep",
              "icon": "keep.png",
              "link": "https://keep.google.com/"
            },
            {
              "title": "Tasks",
              "icon": "tasks.png",
              "link": "https://tasks.google.com/"
            }
          ]
        },
        {
          "name": "Time Tracking",
          "items": [
            {
              "title": "Everhour",
              "icon": "everhour.png",
              "link": "https://everhour.com/"
            },
            {
              "title": "My Hours",
              "icon": "my_hours.png",
              "link": "https://myhours.com/"
            },
            {
              "title": "Toggl",
              "icon": "toggl.png",
              "link": "https://toggl.com/"
            },
            {
              "title": "Tracking Time",
              "icon": "tracking_time.png",
              "link": "https://trackingtime.co/"
            }
          ]
        }
      ]
    },
    {
      "name": "Weather",
      "categories": [
        {
          "name": "Weather",
          "items": [
            {
              "title": "Accuweather",
              "icon": "accuweather.png",
              "link": "https://www.accuweather.com/"
            },
            {
              "title": "National Weather Service",
              "icon": "national_weather_service.png",
              "link": "https://www.weather.gov/"
            },
            {
              "title": "Open Weather",
              "icon": "open_weather.png",
              "link": "https://openweathermap.org/"
            },
            {
              "title": "Ventsky",
              "icon": "ventusky.png",
              "link": "https://openweathermap.org/"
            },
            {
              "title": "Wunderground",
              "icon": "wunderground.png",
              "link": "https://openweathermap.org/"
            }
          ]
        }
      ]
    },
    {
      "name": "Streaming",
      "categories": [
        {
          "name": "Streaming 1",
          "items": [
            {
              "title": "Disney Plus",
              "icon": "disney_plus.png",
              "link": "https://www.disneyplus.com/"
            },
            {
              "title": "Hulu",
              "icon": "hulu.png",
              "link": "https://www.hulu.com/"
            },
            {
              "title": "Netflix",
              "icon": "netflix.png",
              "link": "https://www.netflix.com/"
            },
            {
              "title": "Paramount Plus",
              "icon": "paramount.png",
              "link": "https://www.paramountplus.com/"
            },
            {
              "title": "Peacock",
              "icon": "peacock.png",
              "link": "https://www.peacocktv.com/"
            },
            {
              "title": "Crunchy Roll",
              "icon": "crunchy_roll.png",
              "link": "https://www.crunchyroll.com/"
            }
          ]
        },
        {
          "name": "Streaming 2",
          "items": [
            {
              "title": "Prime Video",
              "icon": "prime_video.png",
              "link": "https://www.amazon.com/gp/video/storefront/"
            },
            {
              "title": "Disney Plus",
              "icon": "disney_plus.png",
              "link": "https://www.disneyplus.com/"
            },
            {
              "title": "HBO Max",
              "icon": "hbo_max.png",
              "link": "https://www.max.com/"
            },
            {
              "title": "Crunchy Roll",
              "icon": "crunchy_roll.png",
              "link": "https://www.crunchyroll.com/"
            },
            {
              "title": "Pluto TV",
              "icon": "pluto_tv.png",
              "link": "https://pluto.tv/"
            }
          ]
        },
        {
          "name": "Streaming 3",
          "items": [
            {
              "title": "Freevee",
              "icon": "freevee.png",
              "link": "https://www.amazon.com/freevee"
            },
            {
              "title": "Starz",
              "icon": "starz.png",
              "link": "https://www.starz.com/"
            },
            {
              "title": "Tubi",
              "icon": "tubi.png",
              "link": "https://tubitv.com/"
            },
            {
              "title": "Crackle",
              "icon": "crackle.png",
              "link": "https://www.crackle.com/"
            },
            {
              "title": "Fubo",
              "icon": "fubo.png",
              "link": "https://www.fubo.tv/"
            }
          ]
        },
        {
          "name": "Streaming 4",
          "items": [
            {
              "title": "Apple TV",
              "icon": "apple_tv.png",
              "link": "https://tv.apple.com/"
            },
            {
              "title": "Shudder",
              "icon": "shudder.png",
              "link": "https://www.shudder.com/"
            },
            {
              "title": "Plex",
              "icon": "plex.png",
              "link": "https://www.plex.tv/"
            },
            {
              "title": "Prime Video",
              "icon": "prime_video.png",
              "link": "https://www.amazon.com/gp/video/storefront/"
            },
            {
              "title": "Vudu",
              "icon": "vudu.png",
              "link": "https://www.vudu.com/"
            }
          ]
        },
        {
          "name": "Self Hosted",
          "items": [
            {
              "title": "Plex",
              "icon": "plex.png",
              "link": "https://www.plex.tv/"
            },
            {
              "title": "Jellyfin",
              "icon": "jellyfin.png",
              "link": "https://jellyfin.org/"
            },
            {
              "title": "Emby",
              "icon": "emby.png",
              "link": "https://emby.com/"
            }
          ]
        }
      ]
    }
  ]
}
```
