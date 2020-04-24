export default {
    "id": "rea-crawler-and-visualizer",
    "title": "Realestate.com.au crawler",
    "tagsByType": {
        "product": ["Realestate.com.au", "Data scraping", "Data post-processing", "API integration"],
        "programming": ["Google Maps API", "PHP"]
    },
    "overview": `
Realestate.com.au is a website that advertises rental opportunities for tenants.
In early 2017, the website did not yet have a feature to visualize rent locations on a map.
Rather, listings only displayed an address, & users had to manually calculate the distance to-and-from key locations.
Visualisation through an interactive & filterable map would prove extremely valuable in allowing tenants to find listings best for them.
Hence, a web suite was created that:
• Data scraped listings from REA HTML webpages
• Post-processed HTML data into JSON through Regex
• PHP endpoints to deliver JSON data to a responsive user interface
    `,
    "preview": {
        "thumbnail": "https://i.imgur.com/Dj8xjiT.jpg"
    },
    "codeSnippets": [
        "https://gist.github.com/vitawebsitedesign/415a9b4fbf631eb21690cd18d4f1f238",
        "https://gist.github.com/vitawebsitedesign/fff9e3c8cb22410c5b15a78e2c10411d"
    ],
    "learnt": [
        "Developing a PHP web crawler to fetch raw data",
        "Determining Regex patterns to extract key information from large raw HTML webpages",
        "Integrating with the Google Maps API"
    ],
    "urlsByType": {
        "source code": [
            "https://github.com/vitawebsitedesign/real-estate-website-crawler"
        ]
    }
};
