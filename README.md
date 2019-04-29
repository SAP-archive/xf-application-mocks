# XF-Application-Mocks

Contains lightweight substitutes for SAP applications to ease the development and testing of extension and integration scenarios based on [Varkes](https://github.com/kyma-incubator/varkes). Together with SAP Cloud Platform Extension Factory, it allows for efficient implementation of application extensions without the need to access the real SAP applications during development.

## Overview
The SAP Cloud Platform Extension Factory is designed to easily extend and mash up different SAP applications and third-party APIs. To demo SAP Cloud Platform Extension Factory functionality, you can use a dummy application for integration rather than a full-blown application setup.

A smart and lightweight mock application allows you to save installation time, maintenance effort, and resources. Use its user-friendly interface to:
- Successfully simulate requests or Events sent from an external system to SAP Cloud Platform Extension Factory, and returned responses.
- Testing functionality in or on top of the SAP Cloud Platform Extension Factory without worrying about the dependencies.

The application mocks in this repository provide dummy implementations for most of the SAP Customer Experience applications. They are not bound to SAP Cloud Platform Extension Factory scenarios and can be operated standalone. All mocks are built with the API-driven approach in mind.

## Requirements
The application mocks are NodeJS projects based on [Varkes](https://github.com/kyma-incubator/varkes) libraries and [Express](https://www.npmjs.com/package/express) web framework.
To run them, you require a Docker-based container infrastructure, like pure Docker, Kubernetes or SAP Cloud Platform Extension Factory. 

## Installation
Each application mock holds detailed installation instructions in a `README` file:

* [SAP Commerce Cloud Mock](commerce-mock/README.md)
* [SAP Marketing Cloud Mock](marketing-mock/README.md)
* [SAP Cloud for Customer Mock](c4c-mock/README.md)


## Known issues
The application mocks based on the `@varkes/odata-mock` (currently the marketing and c4c mocks) do not support any relations between the model definitions provided in the related `EDMX` files. A solution supporting the full `EDMX` specification will be provided soon.

## Support
If you find an issue or want to submit an idea, open a [Github Issue](https://github.com/SAP/xf-application-mocks/issues). Also, feel free to contribute by creating a pull request.

## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the `SAP API DEFINITIONS LICENSE` except as noted otherwise in the [LICENSE](LICENSE) file.
