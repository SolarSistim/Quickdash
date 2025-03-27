

# Quickdash

Quickdash is a simple Angular/JSON powered self-hosted start page.

![quickdash](https://github.com/user-attachments/assets/2cb1f949-e468-45f0-84ba-a799a294fc29)

# Features

- Global search feature allows searching Google and filters the links you've configured.
- JSON powered links list (YAML detractors eat your heart out)
- PNG icons (No icon library is loaded)

# Icons

There are no icon libraries loaded in this project. The "icons" are just 120x120 PNG images @ 300 DPI. 

Why do this? - Because no matter HOW MANY icons libraries I load into this thing, there will ALWAYS be something missing.

Instead of going to all the effort and code necessary to select icons from an icon library - at least in my case - it's easier to google for a matching image, pop open Photoshop, paste and save the "icon" at the necessary dimensions.

There are about 150 custom PNG "icons" included in this project.

The icon library is found within the compiled project at /assets/icons.

# Editing the colors & settings

The configuration file "board-data.json" is found at /assets/board-data.json in the compiled app.

Quickdash Settings:

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
