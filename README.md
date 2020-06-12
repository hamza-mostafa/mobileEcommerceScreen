[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]


## Installation

Update the MonoDB database connection in ```config/db.js```

and then
```bash
$ npm i
```


## Running the application

After downloading the repository; run the below

```bash
$ npm run start
```


## API docs


find the api docs in the  http://localhost:3000/api-docs

you can update the link path from ```config/index.js```


---------------

 - Pagination ```Express-Paginate```
 - MVC
 - Separated services from Models
 - API documentation ```Swagger```
 - API test environment wihtout setup ```Swagger```
 - ```CORS``` enabled
 - ```Helmet ``` installed
 - separate ```config``` folder
 - ```morgan``` Logger with formats
 - Rate limiter to avoid DoS attack
 - error handling

----------------

 - [All large machines](http://localhost:3000/api-docs/swagger.yaml#/Coffee%20Machine/get_coffee_machines) *click on the link for the api docs **AFTER** running the application*
 ```
{
  "status": 200,
  "data": [
    {
      "waterLineCompatible": 0,
      "availableQuantity": 10,
      "_id": "5ee3670119e40343491b2cc2",
      "skuId": "CM101",
      "productType": "large",
      "model": "base"
    },
    {
      "waterLineCompatible": 1,
      "availableQuantity": 10,
      "_id": "5ee3670119e40343491b2cc3",
      "skuId": "CM102",
      "productType": "large",
      "model": "premium"
    },
    {
      "waterLineCompatible": 1,
      "availableQuantity": 10,
      "_id": "5ee3670119e40343491b2cc4",
      "skuId": "CM103",
      "productType": "large",
      "model": "deluxe"
    }
  ],
  "queryCount": 3,
  "total_items": 9,
  "total_pages": 1,
  "pages": [
    {
      "number": 1,
      "url": "/api/v1/coffee-machines?productType=large&page=1&limit=10"
    }
  ],
  "has_more_pages": false,
  "message": "Successfully coffee machines retrieved"
}
```

- [All large pods](http://localhost:3000/api-docs/swagger.yaml#/Coffee%20Pod/get_coffee_pods) *click on the link for the api docs **AFTER** running the application*
```
{
  "status": 200,
  "data": [
    {
      "_id": "5ee382f719e40343491b2ce3",
      "skuId": "CP101",
      "productType": "large",
      "packSize": 1,
      "flavor": "vanilla",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2ce4",
      "skuId": "CP103",
      "productType": "large",
      "packSize": 3,
      "flavor": "vanilla",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2ce5",
      "skuId": "CP111",
      "productType": "large",
      "packSize": 1,
      "flavor": "caramel",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2ce6",
      "skuId": "CP113",
      "productType": "large",
      "packSize": 3,
      "flavor": "caramel",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2ce7",
      "skuId": "CP121",
      "productType": "large",
      "packSize": 1,
      "flavor": "psl",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2ce8",
      "skuId": "CP123",
      "productType": "large",
      "packSize": 3,
      "flavor": "psl",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2ce9",
      "skuId": "CP131",
      "productType": "large",
      "packSize": 1,
      "flavor": "mocha",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cea",
      "skuId": "CP133",
      "productType": "large",
      "packSize": 3,
      "flavor": "mocha",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2ceb",
      "skuId": "CP141",
      "productType": "large",
      "packSize": 1,
      "flavor": "hazelnut",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cec",
      "skuId": "CP143",
      "productType": "large",
      "packSize": 3,
      "flavor": "hazelnut",
      "availableQuantity": 10
    }
  ],
  "queryCount": 10,
  "total_items": 26,
  "total_pages": 3,
  "pages": [
    {
      "number": 1,
      "url": "/api/v1/coffee-pods?productType=large&page=1&limit=10"
    },
    {
      "number": 2,
      "url": "/api/v1/coffee-pods?productType=large&page=2&limit=10"
    },
    {
      "number": 3,
      "url": "/api/v1/coffee-pods?productType=large&page=3&limit=10"
    }
  ],
  "has_more_pages": true,
  "message": "Successfully coffee pods retrieved"
}
```



- [All espresso vanilla pods](http://localhost:3000/api-docs/swagger.yaml#/Coffee%20Pod/get_coffee_pods) *click on the link for the api docs **AFTER** running the application*
```
{
  "status": 200,
  "data": [
    {
      "_id": "5ee382f719e40343491b2ced",
      "skuId": "EP003",
      "productType": "espresso",
      "packSize": 3,
      "flavor": "vanilla",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cee",
      "skuId": "EP005",
      "productType": "espresso",
      "packSize": 5,
      "flavor": "vanilla",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cef",
      "skuId": "EP007",
      "productType": "espresso",
      "packSize": 7,
      "flavor": "vanilla",
      "availableQuantity": 10
    }
  ],
  "queryCount": 3,
  "total_items": 26,
  "total_pages": 3,
  "pages": [
    {
      "number": 1,
      "url": "/api/v1/coffee-pods?productType=espresso&flavor=vanilla&page=1&limit=10"
    },
    {
      "number": 2,
      "url": "/api/v1/coffee-pods?productType=espresso&flavor=vanilla&page=2&limit=10"
    },
    {
      "number": 3,
      "url": "/api/v1/coffee-pods?productType=espresso&flavor=vanilla&page=3&limit=10"
    }
  ],
  "has_more_pages": true,
  "message": "Successfully coffee pods retrieved"
}
```

- [All espresso machines](http://localhost:3000/api-docs/swagger.yaml#/Coffee%20Machine/get_coffee_machines) *click on the link for the api docs **AFTER** running the application*
```
{
  "status": 200,
  "data": [
    {
      "waterLineCompatible": 0,
      "availableQuantity": 10,
      "_id": "5ee3670119e40343491b2cc5",
      "skuId": "EM001",
      "productType": "espresso",
      "model": "base"
    },
    {
      "waterLineCompatible": 0,
      "availableQuantity": 10,
      "_id": "5ee3670119e40343491b2cc6",
      "skuId": "EM002",
      "productType": "espresso",
      "model": "premium"
    },
    {
      "waterLineCompatible": 1,
      "availableQuantity": 10,
      "_id": "5ee3670119e40343491b2cc7",
      "skuId": "EM003",
      "productType": "espresso",
      "model": "deluxe"
    }
  ],
  "queryCount": 3,
  "total_items": 9,
  "total_pages": 1,
  "pages": [
    {
      "number": 1,
      "url": "/api/v1/coffee-machines?productType=espresso&page=1&limit=10"
    }
  ],
  "has_more_pages": false,
  "message": "Successfully coffee machines retrieved"
}
```

- [All small pods](http://localhost:3000/api-docs/swagger.yaml#/Coffee%20Pod/get_coffee_pods) *click on the link for the api docs **AFTER** running the application*
```
{
  "status": 200,
  "data": [
    {
      "_id": "5ee382f719e40343491b2ce2",
      "skuId": "CP043",
      "productType": "small",
      "packSize": 3,
      "flavor": "hazelnut",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cf3",
      "skuId": "CP001",
      "productType": "small",
      "packSize": 1,
      "flavor": "vanilla",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cf4",
      "skuId": "CP003",
      "productType": "small",
      "packSize": 3,
      "flavor": "vanilla",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cf5",
      "skuId": "CP011",
      "productType": "small",
      "packSize": 1,
      "flavor": "caramel",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cf6",
      "skuId": "CP013",
      "productType": "small",
      "packSize": 3,
      "flavor": "caramel",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cf7",
      "skuId": "CP021",
      "productType": "small",
      "packSize": 1,
      "flavor": "psl",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cf8",
      "skuId": "CP023",
      "productType": "small",
      "packSize": 3,
      "flavor": "psl",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cf9",
      "skuId": "CP031",
      "productType": "small",
      "packSize": 1,
      "flavor": "mocha",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cfa",
      "skuId": "CP033",
      "productType": "small",
      "packSize": 3,
      "flavor": "mocha",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cfb",
      "skuId": "CP041",
      "productType": "small",
      "packSize": 1,
      "flavor": "hazelnut",
      "availableQuantity": 10
    }
  ],
  "queryCount": 10,
  "total_items": 26,
  "total_pages": 3,
  "pages": [
    {
      "number": 1,
      "url": "/api/v1/coffee-pods?productType=small&page=1&limit=10"
    },
    {
      "number": 2,
      "url": "/api/v1/coffee-pods?productType=small&page=2&limit=10"
    },
    {
      "number": 3,
      "url": "/api/v1/coffee-pods?productType=small&page=3&limit=10"
    }
  ],
  "has_more_pages": true,
  "message": "Successfully coffee pods retrieved"
}
```

- [All pods sold in 7 dozen packs](http://localhost:3000/api-docs/swagger.yaml#/Coffee%20Pod/get_coffee_pods) *click on the link for the api docs **AFTER** running the application*
```
{
  "status": 200,
  "data": [
    {
      "_id": "5ee382f719e40343491b2cef",
      "skuId": "EP007",
      "productType": "espresso",
      "packSize": 7,
      "flavor": "vanilla",
      "availableQuantity": 10
    },
    {
      "_id": "5ee382f719e40343491b2cf2",
      "skuId": "EP017",
      "productType": "espresso",
      "packSize": 7,
      "flavor": "caramel",
      "availableQuantity": 10
    }
  ],
  "queryCount": 2,
  "total_items": 26,
  "total_pages": 3,
  "pages": [
    {
      "number": 1,
      "url": "/api/v1/coffee-pods?packSize=7&page=1&limit=10"
    },
    {
      "number": 2,
      "url": "/api/v1/coffee-pods?packSize=7&page=2&limit=10"
    },
    {
      "number": 3,
      "url": "/api/v1/coffee-pods?packSize=7&page=3&limit=10"
    }
  ],
  "has_more_pages": true,
  "message": "Successfully coffee pods retrieved"
}
```
