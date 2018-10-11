[![CircleCI](https://circleci.com/gh/klevamane/Maintenance-tr-client.svg?style=svg)](https://circleci.com/gh/klevamane/Maintenance-tr-client)
<a href="https://codeclimate.com/github/klevamane/Maintenance-tr-client/test_coverage"><img src="https://api.codeclimate.com/v1/badges/4fb961928dd6bd1dac42/test_coverage" /></a>


# Maintenance Tracker
Maintenance Tracker is an application that provides users with the ability to reach out to
maintenance department regarding repair or maintenance of devicess by creating requests, with the provision of enhanced and monitoring services.

# Getting Started

## Prerequisite
1. Internet connection
2. Internet browser

## Template URL
* https://klevamane.github.io/Maintenance-tr/UI/Index.html

## Api URL
* https://maintenancetr.herokuapp.com

## Home URL
* https://maintenancetr-client.herokuapp.com/

## Api Documentation
* https://maintenancetr.herokuapp.com/api-docs/#

## User Access
Admin user
- email: admin@gmx.com
- password: Password123 (note that the password is case sensitive)

- email: dere@live.com
- password: password123

## How to get a local copy
#### Clone repository
* Copy repository link
* Create a folder location in your computer eg my/path/
* cd my/path/
* git clone repositorylink.git
* cd maintenance-tr-client
* npm install
* npm run dev
* Sign-in with any dummy email id and passowrd

## Routes
```
* PUT https://maintenancetr.herokuapp.com/api/v1/users/requests/:requestId - Modify a user request
* GET https://maintenancetr.herokuapp.com/api/v1/users/requests - List all user requests
* GET https://maintenancetr.herokuapp.com/api/v1/requests - List all users requests
* GET https://maintenancetr.herokuapp.com/api/v1/users/requests/:requestid - List a user request by Id
* PUT https://maintenancetr.herokuapp.com/api/v1/requests/:requestId/approve - Approve a user request
* PUT https://maintenancetr.herokuapp.com/api/v1/requests/:requestId/disapprove - Disapprove a user request
* PUT https://maintenancetr.herokuapp.com/api/v1/requests/:requestId/resolve - Resolve a user request
* POST https://maintenancetr.herokuapp.com/api/v1/auth/signup - Register a new user
* POST https://maintenancetr.herokuapp.com/api/v1/auth/login - Authenticate registered user
* POST https://maintenancetr.herokuapp.com/api/v1/users/requests -Create a user request
 
 ```

## Branches
The branches are structured in a way that they correspond to feature developed in the application. for example the with name a ft_#xxxx_login-xxxx corresponds codes for the log in page and ft-signup-xxx corresponds to codes for the signup page, some other branches to update user interface and implement quick fix also exist.
The develop branch is positioned currently as the default branch due to the on-going nature of this project. It is expected that as the project nears completion some branches will be merged and completely deleted

## Testing

Test locally by executing "npm test"


# Built with
1. ReactJs
2. Html
3. Css
4. Javascript
4. Axios

# Contributors
* Onengiye Richard (klevamane)
# Author
* Onengiye Richard (klevamane)

