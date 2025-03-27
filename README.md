

# Quickdash

Quickdash is a simple Angular/JSON powered self-hosted start page.

# Features

- Global search feature allows searching Google, or other specified search engine, and filters the links you've configured.
- JSON powered links list (YAML detractors eat your heart out)
- PNG icons (No icon library is loaded)

# Icons

There are no icon libraries loaded in this project. The "icons" are just 120x120 PNG images @ 300 DPI. 

Why do this? - Because no matter HOW MANY icons libraries I load into this thing, there will ALWAYS be something missing.

Instead of going to all the effort and code necessary to select icons from an icon library - at least in my case - it's easier to google for a matching image, pop open Photoshop, paste and save the "icon" at the necessary dimensions.

There are about 150 custom PNG "icons" included in this project.

The icon library is found within the compiled project at /assets/icons.

![icons2](https://github.com/user-attachments/assets/30e8c493-b8eb-4b0f-a5cd-876fa1ce99d2)

# Editing the colors & settings

The configuration file "board-data.json" is found at /assets/board-data.json in the compiled app.

Quickdash Settings:

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

Theme settings:

Colors are set by CSS colors, example: "#242B33" or "black".

- background-color: The CSS Background color of the entire app.
- category-background-color: The background color of each category panel in CSS format. 
- category-header-color: The background color of each category panel header in CSS format.
- category-link-color: The color of each category link in CSS format.

Search settings:

- enabled: Boolean, enables or disables the search feature.
- provider: The name of the search provider, Example: Google, DuckDuckGo.
- url: The url prefix for the search provider. Example: "https://www.google.com/search?q=" for Google, or "https://duckduckgo.com/?t=h_&q=" for DuckDuckGo.
- search_bar_color: The color of the border around the search bar in CSS format.

# Editing categories & links

Quickdash Settings:

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

Category & links settings:

Quickdash will iterate over the "links" portion of board-data.json and display them in the order that they're in within the JSON file.

- name: The name of the category. This is the part that will cause a category panel to appear.
- title: The title of the link. This is what the link will apear as on the dashboard.
- icon: The icon's filename. All icons are hosted at /assets/icons.
- link: The link that you will navigate to when you click on it. Always opens in new tab.

# Deployment

Quickdash is an HTML/Javascript only application. That means there are no back-end technologies in use like NodeJS, PHP or ASP, and all you have to do to deploy it is to plop it into your favorite Web server's wwwroot folder (or equivalent).

Example: 

- Nginx: /var/www/html/Quickdash\
- IIS: \wwwroot\Quickdash\
- Apache: /var/www/html/Quickdash/
