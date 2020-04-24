export default {
    "id": "sql-keyword-formatter",
    "title": "SQL Keyword Formatter",
    "tagsByType": {
        "product": ["Open source", "Microsoft Store"],
        "programming": ["C#", "UWP", "T-SQL", "Regex"]
    },
    "overview": `
In ASP.NET architectures, raw T-SQL is often used as an alternative to Entity Framework statements (Dapper/ADO.NET).
When it comes to bulk operations, raw SQL offers a scalable & performant option for database operations.

However raw T-SQL casing can sometimes be mixed up. Some developers prefer an "all lowercase" format for T-SQL.
Later on, they may decide that the more traditional "uppercase keyword" formatting is more readable.

SQL Keyword Formatter is a modern UWP Windows app that allows a developer to move to the later keyword format.
Specifically, one can now just copy & paste an entire T-SQL snippet, and immediately retrieve the functional equivalent in the later format.
The significant productivity boost enabled by this app proves valuable.
    `,
    "preview": {
        "thumbnail": "https://i.imgur.com/ssULoKz.jpg",
        "images": [
            {
                "src": "https://i.imgur.com/WxfoIFD.jpg",
                "alt": "Example of the SQL Keyword Formatter in action"
            }
        ]
    },
    "codeSnippets": [
        "https://gist.github.com/vitawebsitedesign/a4bc1a4004d88dfe34c5daab3bb9dfbe",
        "https://gist.github.com/vitawebsitedesign/b9ff00fc48308aa5f7c678bc970834d7"
    ],
    "learnt": [
        "The different scenarios T-SQL keywords may be used in, then translating those into regex patterns",
        "Thorough use of fixtures in automated parallelable nUnit tests to minimize regressions",
        "How to develop with the UWP framework & passing auditing to enable publishing to the Microsoft Store"
    ],
    "urlsByType": {
        "source code": [
            "https://github.com/vitawebsitedesign/sql-keyword-formatter"
        ],
        "product": [
            "https://www.microsoft.com/en-au/p/sql-keyword-formatter/9mv09gl7hrt1?cid=msft_web_chart&activetab=pivot:overviewtab"
        ]
    }
};
