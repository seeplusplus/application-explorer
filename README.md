# application-explorer

[![CircleCI](https://circleci.com/gh/seeplusplus/application-explorer/tree/main.svg?style=svg)](https://circleci.com/gh/seeplusplus/application-explorer/tree/main)

## Angular app

Allows the user to explore and manipulate the applications.

The source for the applications can be changed in the `src/environments/` files.
Keep the value as `assets/data.json` for testing without Azure functions or to
the URI of an API that returns application data.

## Azure functions

Exposes a list of applications at `api/applications`.

Requires `dotnet` SDK >= 3.1 and [Azure Function Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local).

Updating the `applications-fn/data.json` file will update the response from the `api/applications` endpoint.
