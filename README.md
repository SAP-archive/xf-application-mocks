# XF-Application-Mocks

Contains lightweight substitutes for SAP applications to ease the development and testing of extension and integration scenarios based on [Varkes](https://github.com/kyma-incubator/varkes). In conjunction with SAP Cloud Platform Extension Factory (XF), the efficient implementation of application extensions is supported without the need for real SAP applications being accessible during development.

## Description
The SAP CP Extension Factory is designed to easily extend and mash up different SAP applications and third-party APIs. To demo SAP CP Extension Factory functionality, a dummy application is required for integration rather than requiring a full-blown application setup.

A "mock" application allows you to save installation time, maintenance effort, and resources.
A smart and lightweight mock of the application with a friendly user interface allows you to:
- Successfully simulate requests or Events sent from the system to SAP CP Extension Factory as well as the responses from the SAP CP Extension Factory to the application.
- Testing functionality in the SAP CP Extension Factory or on top of the SAP CP Extension Factory without worrying about the dependencies.

The application mocks provided in this repository provide dummy implementations for most of the SAP CX applications. They are not bound to SAP CP Extension Factory scenarios and can be operated standalone. All mocks are built in an API-driven approach and are based on [Varkes](https://github.com/kyma-incubator/varkes).

## Installation
All application mocks are providing detailed installation instructions on its own, please refer to the related README file.

### SAP Commerce Cloud Mock
Application mock for SAP Commerce Cloud, see [commerce-mock](commerce-mock/README.md).

### SAP Marketing Cloud Mock
Application mock for SAP Marketing Cloud, see [marketing-mock](marketing-mock/README.md).

### SAP Cloud for Customer Mock
Application mock for SAP Cloud for Customer, see [c4c-mock](c4c-mock/README.md).

## How to obtain support
In case you find a bug or have ideas please open a [Github Issue](https://github.com/SAP/xf-application-mocks/issues).

## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the `SAP API DEFINITIONS LICENSE` except as noted otherwise in the [LICENSE](LICENSE) file.
