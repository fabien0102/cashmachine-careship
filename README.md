# Cash machine - Careship®

Simple cash machine as a technical test for Careship®.

This project is build with:
- vuejs (frontend)
- vue-apollo (frontend - graphql client)
- jest (testing)
- graphql-yoga (backend)
- netlify (hosting)

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080 and backend at localhost:9000
yarn start

# build for production with minification
yarn build:vue

# build for production and view the bundle analyzer report
yarn build:vue --report

# build for production vue application and lambda functions
yarn build

# run unit tests
yarn test:unit

# run e2e tests
yarn test:e2e

# run lint tests
yarn test:lint

# run all tests
yarn test
```

## Playing with the API

The GraphQL API is serve by a netlify lambda function.

You can start the API alone with `yarn start:lambda` and go to http://localhost:9000/playground for playing.

Example of query:
```graphql
{
  notes(amount: 120)
}
```

Enjoy ;)

## Notes
It's my first project with vuejs, be nice ;)