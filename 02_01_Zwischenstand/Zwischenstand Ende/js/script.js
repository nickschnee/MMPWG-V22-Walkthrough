var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic OGFmY2UyYmI3M2I3OjVjMTRhMTM5Y2ZjNjhiMTgxZDQ4OWIzNmY1ZmJlZDI1NzRiZDg0YmY=");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "columns": [
        "page",
        "subsite",
        "date",
        "publishing_date",
        "url",
        "uri",
        "content_language",
        "m_unique_visitors"
    ],
    "sort": [
        "-m_unique_visitors"
    ],
    "segment": {
        "segmentKey": "article_by_uri"
    },
    "space": {
        "s": [
            611078
        ]
    },
    "period": {
        "p1": [
            {
                "type": "D",
                "start": "2022-09-21",
                "end": "2022-10-04"
            }
        ]
    },
    "max-results": 50,
    "page-num": 1,
    "options": {
        "ignore_null_properties": true,
        "eco_mode": true
    }
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://api.atinternet.io/v3/data/getData", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));