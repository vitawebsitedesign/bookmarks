export default {
    "id": "rea-visualizer",
    "title": "Realestate.com.au visualizer",
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
    },
    "learnt": [
        "Developing a PHP web crawler to fetch raw data",
        "Determining Regex patterns to extract key information from large raw HTML webpages",
        "Integrating with the Google Maps API"
    ],
    "urlsByType": {
        "source code": [
            "https://gitlab.com/thinkfast2008/real-estate-website-crawler"
        ]
    }
};
