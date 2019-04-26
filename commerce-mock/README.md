# Commerce Mock
The commerce mock is substituting the **SAP Commerce Cloud**. It embeds the **varkes-app-connector-client** to connect to SAP CP Extension Factory and registers the bundled commerce APIs, which are also mocked using **varkes-openapi-mock**. For details on the mocked APIs, see the [`varkes_config.js`](varkes_config.js) file.

## Run local using Docker

Run the mock locally using the following docker command:

```bash
docker run -p 10000:10000 eu.gcr.io/kyma-project/xf-application-mocks/commerce-mock:latest
```

## Access the mock local
You can access the mock UI at http://localhost:10000

The API to pair the mock with SAP CP Extension Factory is located at: http://localhost:10000/console

The mocked APIs are accessible as:
- http://localhost:10000/rest/v2/console
- http://localhost:10000/assistedservicewebservices/console
- http://localhost:10000/ordermanagementwebservices/console
- http://localhost:10000/couponwebservices/console
- http://localhost:10000/warehousingwebservices/console

## Run mock on SAP CP Extension Factory

To run the mock using SAP CP Extension Factory as runtime environment, run the following kubectl command to set up a namespace:

```bash
kubectl create namespace mocks
kubectl label namespace mocks env=true
```

and to deploy the mock
```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/commerce-mock/deployment/xf.yaml -n mocks
```

That will expose the UI and API of the mock via a `ÀPI` resource and the UI will be accessible at: https://commerce.[yourDomain]

## Run mock on Kubernetes
```bash
kubectl create namespace mocks
```

and to deploy the mock
```bash
kubectl apply -f https://raw.githubusercontent.com/SAP/xf-application-mocks/master/commerce-mock/deployment/k8s.yaml -n mocks
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