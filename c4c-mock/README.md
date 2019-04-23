
# Cloud for Customer Mock

This application is used to mock **SAP Cloud for Customer**. It embeds the *varkes-app-connector-client* to connect to Kyma and register the bundled ODATA API. With usage of the *varkes-odata-mock* all APIs are mocked as well. For details on the mocked API's check the [`varkes_config.js`](varkes_config.js).

## Run local using docker
To run the mock local use the following docker command.

```bash
docker run -p 10000:10000 eu.gcr.io/kyma-project/xf-application-mocks/c4c-mock:latest
```

## Access the Mock local
The UI is accessible at http://localhost:10000

The API to pair the mock with SAP CP Extension Factory is located at: http://localhost:10000/console

The mocked APIs are accessible as:
- http://localhost:10000/sap/byd/api/v1/c4codata/console
- http://localhost:10000/sap/byd/odata/v1/c4codata/

## Run mock on SAP CP Extension Factory

To run the mock using SAP CP Extension Factory as runtime environment, run the following kubectl command to set up a namespace:

```bash
kubectl create namespace mocks
kubectl label namespace mocks env=true
```

and to deploy the mock
```bash
curl https://github.com/SAP/xf-application-mocks/master/c4c-mock/deployment/xf.yaml | kubectl apply -n mocks -f -
```

That will expose the UI and API of the mock via a `ÀPI` resource and the UI will be accessible at: https://c4c.[yourDomain]

## Run mock on Kubernetes
```bash
kubectl create namespace mocks
```

and to deploy the mock
```bash
curl https://github.com/SAP/xf-application-mocks/master/c4c-mock/deployment/k8s.yaml | kubectl apply -n mocks -f -
```

That will deploy a `Service` of type ClusterIP, which need to expose manually via any Ingress type.

## Development

To build and run the mock local, you require `npm` only.

```
npm install
npm start
```
will start the mock local on port 10000.
The debug mode can be enabled having the environment variable set: DEBUG=true

To run the test, please execute:
```
npm test
```