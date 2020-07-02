## Serverless Covid19

Realtime COVID-19 tracker, since the pandemic I wanted to track each cases in realtime using serverless architecture, which will eliminate the need for server.

## Installation

1. In your preferred project directory, run `git clone https://github.com/ericz99/serverless-covid19.git .`.
2. In your root directory please run `./deploy.sh` OR `bash deploy.sh` to install all necessary dependencies.
3. By running `deploy.sh` it should already deploy the serverless, and basically the web application in the cloud.

## API Gateway

This will be using API Gateway as an event trigger, which will trigger the lambda function, aka our express server. After successfully deploying your serverless application + the web application you should be given the web application URL + API Gateway endpoint.

#### /all

- `GET` : Get all cases

# OUTPUT

```json
{
    "cases": "10,802,849",
    "deaths": "518,921",
    "recovered": "5,938,954"
}
```

#### /countries

- `GET` : Get all cases by countries

# OUTPUT

```json
[
    {
        "country": "World",
        "totalCases": "10,802,849",
        "newCases": "+7,749",
        "newDeaths": "518,921",
        "totalRecovered": "+863",
        "activeCases": "5,938,954",
        "critical": "+3,960",
        "casesPerOneMillion": "4,344,974",
        "deathsPerOneMillion": "57,959",
        "totalTests": "1,386",
        "testsPerOneMillion": "66.6"
    },
    ...
]
```

#### /{country}

- `GET` : Get specify case by country

```json
[
    {
        "country": "World",
        "totalCases": "10,802,849",
        "newCases": "+7,749",
        "newDeaths": "518,921",
        "totalRecovered": "+863",
        "activeCases": "5,938,954",
        "critical": "+3,960",
        "casesPerOneMillion": "4,344,974",
        "deathsPerOneMillion": "57,959",
        "totalTests": "1,386",
        "testsPerOneMillion": "66.6"
    },
    ...
]
```


## App Info

### Author

Eric Zhang

### Version

1.0.0

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
