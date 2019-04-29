# XF mock
This application mocks **SAP CP Extension Factory**. You can mock all APIs using **varkes-openapi-mock**. For the list of mocked APIs, see [`varkes_config.json`](varkes_config.json).

## Run mock locally using Docker

To run the mock locally, run:

```bash
docker run -p 10000:10000 eu.gcr.io/kyma-project/xf-application-mocks/xf-mock:latest
```

### Access the mock locally

* For mocked API definitions, see:
    - `http://localhost:10000/v1/console`
    - `http://localhost:10000/v1/api`
* For mocked API available at basePath, see `http://localhost:10000/v1`. For example, `http://localhost:10000/v1/applications`

## Run mock on SAP CP Extension Factory
To run the mock using SAP CP Extension Factory as a runtime environment, perform the following steps:

1. Set up the Namespace:

```bash
kubectl create namespace mocks
kubectl label namespace mocks env=true
```

2. Deploy the mock:
```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/xf-mock/deployment/xf.yaml -n mocks
```

This command exposes the UI and API of the mock via an `ÀPI` resource and the makes the UI accessible at `https://xf.{yourDomain}`

## Run mock on Kubernetes

1. Set up the Namespace:
```bash
kubectl create namespace mocks
```

2. Deploy the mock:
```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/xf-mock/deployment/k8s.yaml -n mocks
```

That will deploy a `Service` of type ClusterIP, which need to expose manually via any Ingress type.

## Development

Use `npm` to build and run the mock locally for development:
```
npm install
npm start
```
This starts the mock locally on port 10000.
To enable the debug mode, set the **{DEBUG}** environment variable to `true`.

To run the test,  execute:
```
npm test
```