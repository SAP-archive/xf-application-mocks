
# Marketing Mock

The marketing mock emulates SAP Marketing Cloud. It uses the **varkes-api-server** to connect to SAP Cloud Platform Extension Factory and register the bundled marketing APIs, which are also mocked using **varkes-odata-mock**. For the list of mocked APIs, see [`varkes_config.json`](varkes_config.json).

## Run local using Docker

To run the mock locally, run:

```bash
docker run -p 10000:10000 eu.gcr.io/kyma-project/xf-application-mocks/marketing-mock:latest
```

### Access the Mock

* For mock UI, see `http://localhost:10000`
* For the API to pair the mock with SAP Cloud Platform Extension Factory, see `http://localhost:10000/console`
* For mocked APIs, see:
  * `http://localhost:10000/sap/opu/api/sap/API_MKT_CAMPAIGN_SRV/console`
  * `http://localhost:10000/sap/opu/odata/sap/API_MKT_CAMPAIGN_SRV/odata/`
  * `http://localhost:10000/sap/opu/api/sap/API_MKT_CONTACT_SRV/console`
  * `http://localhost:10000/sap/opu/odata/sap/API_MKT_CONTACT_SRV/odata/`
  * `http://localhost:10000/sap/opu/api/sap/API_MKT_EXPORT_DEFINITION_SRV/console`
  * `http://localhost:10000/sap/opu/odata/sap/API_MKT_EXPORT_DEFINITION_SRV/odata/`
  * `http://localhost:10000/sap/opu/api/sap/API_MKT_INTERACTION_SRV/console`
  * `http://localhost:10000/sap/opu/odata/sap/API_MKT_INTERACTION_SRV/odata/`
  * `http://localhost:10000/sap/opu/api/sap/API_MKT_INTERACTION_CONTACT_SRV/console`
  * `http://localhost:10000/sap/opu/odata/sap/API_MKT_INTERACTION_CONTACT_SRV/odata/`

## Run mock on SAP Cloud Platform Extension Factory

To run the mock using SAP CP Extension Factory as a runtime environment, perform the following steps:

1. Set up the Namespace:

```bash
kubectl create namespace mocks
```

2. Deploy the mock

```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/marketing-mock/deployment/k8s.yaml -n mocks
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/marketing-mock/deployment/xf.yaml -n mocks
```

These commands expose the UI and API of the mock via an `API` resource and makes the UI accessible at `https://marketing.{yourDomain}`.

## Run mock on Kubernetes

1. Set up the Namespace:

```bash
kubectl create namespace mocks
```

2. Deploy the mock:

```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/marketing-mock/deployment/k8s.yaml -n mocks
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
