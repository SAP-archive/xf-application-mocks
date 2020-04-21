# Commerce Mock

The commerce mock emulates SAP Commerce Cloud. It uses the **varkes-api-server** to connect to SAP Cloud Platform Extension Factory and register the bundled commerce APIs, which are also mocked using the **varkes-openapi-mock**. For the list of mocked APIs, see [`varkes_config.json`](varkes_config.json).

## Run locally using Docker

To run the mock locally, run:

```bash
docker run -p 10000:10000 eu.gcr.io/kyma-project/xf-application-mocks/commerce-mock:latest
```

### Access the mock locally

* For mock UI, see `http://localhost:10000`
* For the API to pair the mock with SAP Cloud Platform Extension Factory, see `http://localhost:10000/console`
* For mocked APIs, see:
  * `http://localhost:10000/rest/v2/console`
  * `http://localhost:10000/assistedservicewebservices/console`
  * `http://localhost:10000/ordermanagementwebservices/console`
  * `http://localhost:10000/couponwebservices/console`
  * `http://localhost:10000/warehousingwebservices/console`

## Run mock using SAP CP Extension Factory

To run the mock using SAP CP Extension Factory as a runtime environment, perform the following steps:

1. Set up the Namespace:

```bash
kubectl create namespace mocks
```

2. Deploy the mock:

```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/commerce-mock/deployment/k8s.yaml -n mocks
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/commerce-mock/deployment/xf.yaml -n mocks
```

These commands expose the UI and API of the mock via an `APIRule` resource and makes the UI accessible at `https://commerce.{yourDomain}`.

## Run mock on Kubernetes

1. Set up the Namespace:

```bash
kubectl create namespace mocks
```

2. Deploy the mock:

```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/commerce-mock/deployment/k8s.yaml -n mocks
```

This command deploys a `Service` of a ClusterIP type. You need to expose it manually using any Ingress type.

## Development

Use `npm` to build and run the mock locally for development:

```bash
npm install
npm start
```

This starts the mock locally on port 10000.
To enable the debug mode, set the **{DEBUG}** environment variable to `true`.

To run the test, execute:

```bash
npm test
```
