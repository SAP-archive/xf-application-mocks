# XF mock
You can use this application to mock **SAP CP Extension Factory**. You can mock all APIs using **varkes-openapi-mock**. For details on the mocked APIs, see the [`varkes_config.json`](varkes_config.json) file.

## Run mock locally using Docker

Run the mock locally run the following docker command:

```bash
docker run -p 10000:10000 eu.gcr.io/kyma-project/xf-application-mocks/xf-mock:latest
```

## Access the mock local

The mocked API definitions are accessible as:
- http://localhost:10000/v1/console
- http://localhost:10000/v1/api

The mocked API is available at basePath:
- http://localhost:10000/v1

like
- http://localhost:10000/v1/applications

## Run mock on SAP CP Extension Factory
To run the mock using  SAP CP Extension Factory as runtime environment, run the following kubectl command to set up a namespace:

```bash
kubectl create namespace mocks
kubectl label namespace mocks env=true
```

and to deploy the mock
```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/xf-mock/deployment/xf.yaml -n mocks
```

That will expose the UI and API of the mock via a `ÀPI` resource and the UI will be accessible at: https://xf.[yourDomain]

## Run mock on Kubernetes
```bash
kubectl create namespace mocks
```

and to deploy the mock
```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/xf-mock/deployment/k8s.yaml -n mocks
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