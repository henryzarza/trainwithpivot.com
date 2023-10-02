This project was bootstrapped with [REACT-BOOTSTRAP-WOLOX](https://github.com/Wolox/react-bootstrap).
​
## Screens
​
These are the screens you can to choose for your app.
​
- Classes
- Home
- Technology
- Product
​
## Running the project
​
To start the server run:
​
`npm run start`
​
To start a specific environment, run:
​
`npm run start-env environment`
​
## Deploying in strict mode
​
At Wolox we work with a methodology in which only is allowed to do deploy with specific branch (`development`, `master`, `stage` and `wolox`).
​
### Requirements
​
In order to deploy it is necessary that:
1. The current branch matches the desired environment.
2. The environment file is created at the root of the project using the notation: `.env.environment` (e.g. `.env.development`)
3. The `aws.js` file has an entry with the credentials for the desired environment.
​
Valid environments are _development_, _stage_, _master_ and _wolox_.
​
### Deploying
​
After checking the previous requirements, run the following command to deploy: `npm run deploy environment` (where environment is the desired environment)
​
### Example
​
If you are in `wolox` branch:
​
- `.env.wolox` exists
- `aws.js` contains an entry for the `wolox` environment
​
Then, run `npm run deploy wolox`
​
## Creating a build
​
Keep in mind the deploy requirements (except `aws.js` file because not is required for this step) and then run: `npm run build environment` (eg. `npm run build wolox`)
​
### Example
​
If you are in `wolox` branch:
​
- `.env.wolox` file might exists (at the moment it's empty)
​
Then, run `npm run build wolox`
