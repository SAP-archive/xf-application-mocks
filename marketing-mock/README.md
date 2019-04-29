
# Marketing Mock

The marketing mock emulates SAP Marketing Cloud. It uses the **varkes-app-connector-client** to connect to SAP Cloud Platform Extension Factory and register the bundled marketing APIs, which are also mocked using **varkes-odata-mock**. For the list of mocked APIs, see [`varkes_config.js`](varkes_config.js).

## Run local using Docker

To run the mock locally, run:

```bash
docker run -p 10000:10000 eu.gcr.io/kyma-project/xf-application-mocks/marketing-mock:latest
```

### Access the Mock

* For mock UI, see `http://localhost:10000`
* For the API to pair the mock with SAP Cloud Platform Extension Factory, see `http://localhost:10000/console`
* For mocked APIs, see:
    - `http://localhost:10000/sap/opu/api/sap/API_MKT_CAMPAIGN_SRV/console`
    - `http://localhost:10000/sap/opu/odata/sap/API_MKT_CAMPAIGN_SRV/odata/`
    - `http://localhost:10000/sap/opu/api/sap/API_MKT_CONTACT_SRV/console`
    - `http://localhost:10000/sap/opu/odata/sap/API_MKT_CONTACT_SRV/odata/`
    - `http://localhost:10000/sap/opu/api/sap/API_MKT_EXPORT_DEFINITION_SRV/console`
    - `http://localhost:10000/sap/opu/odata/sap/API_MKT_EXPORT_DEFINITION_SRV/odata/`
    - `http://localhost:10000/sap/opu/api/sap/API_MKT_INTERACTION_SRV/console`
    - `http://localhost:10000/sap/opu/odata/sap/API_MKT_INTERACTION_SRV/odata/`
    - `http://localhost:10000/sap/opu/api/sap/API_MKT_INTERACTION_CONTACT_SRV/console`
    - `http://localhost:10000/sap/opu/odata/sap/API_MKT_INTERACTION_CONTACT_SRV/odata/`

## Run mock on SAP Cloud Platform Extension Factory

To run the mock using SAP CP Extension Factory as a runtime environment, perform the following steps:

1. Set up the Namespace:

```bash
kubectl create namespace mocks
kubectl label namespace mocks env=true
```

2. Deploy the mock
```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/marketing-mock/deployment/xf.yaml -n mocks
```

This command exposes the UI and API of the mock via an `ÀPI` resource and the makes the UI accessible at `https://marketing.{yourDomain}`.

## Run mock on Kubernetes

1. Set up the Namespace:

```bash
kubectl create namespace mocks
```

2. Deploy the mock:
```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/marketing-mock/deployment/k8s.yaml -n mocks
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