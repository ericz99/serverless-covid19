## Serverless COVID-19 API

Realtime COVID-19 tracker API, since the pandemic I wanted to track each cases in realtime using serverless architecture, which will eliminate the need for server.

## Installation

Before following any step below, be sure to have serverless connected to your AWS account, and all your crediential are ready before deploying this serverless application.

1. In your preferred project directory, run `git clone https://github.com/ericz99/serverless-covid19.git .`.
2. In your root directory please run `npm install` to install all necessary dependencies.
3. OPTIONAL: Only if you didn't install serverless framework, please run `npm install -g serverless`.
4. Next, configure your project settings, by running `serverless` You should be prompt with questions, so just fill it out.
5. Finally, once you finish with everything above, you can now run `serverless deploy`.
6. You should now have a fully functional serverless api application. Please redirect to the URL that is being displayed on your CLI.

## API Gateway

This will be using API Gateway as an event trigger, which will trigger the lambda function, aka our express server. After successfully deploying your serverless application, you should get the production endpoint for your API Gateway.

#### /all

- `GET` : Get all cases

### OUTPUT

```json
{
    "cases": "10,802,849",
    "deaths": "518,921",
    "recovered": "5,938,954"
}
```

#### /countries

- `GET` : Get all cases by countries

### OUTPUT

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

- `GET` : Get cases by country

### OUTPUT

```json
{
    "country": "China",
    "totalCases": "83,542",
    "newCases": "+5",
    "newDeaths": "4,634 ",
    "totalRecovered": 0,
    "activeCases": "78,499",
    "critical": "+12",
    "casesPerOneMillion": "409",
    "deathsPerOneMillion": "7",
    "totalTests": "58",
    "testsPerOneMillion": "3"
}
```


## App Info

### Author

Eric Zhang

### Version

1.0.0

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
