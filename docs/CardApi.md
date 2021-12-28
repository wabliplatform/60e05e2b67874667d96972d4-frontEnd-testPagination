# TempApi.CardApi

All URIs are relative to *http://83.212.100.226:3002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createcard**](CardApi.md#createcard) | **POST** /card | Creates the data
[**deletecard**](CardApi.md#deletecard) | **DELETE** /card/{cardId} | Delete the element
[**getAllcard**](CardApi.md#getAllcard) | **GET** /card/getAll | Get all the data
[**getcard**](CardApi.md#getcard) | **GET** /card/{cardId} | Get the element
[**updatecard**](CardApi.md#updatecard) | **PUT** /card/{cardId} | Updates the element



## createcard

> Card createcard(card)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CardApi();
let card = new TempApi.Card(); // Card | data to be created
apiInstance.createcard(card, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card** | [**Card**](Card.md)| data to be created | 

### Return type

[**Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletecard

> deletecard(cardId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CardApi();
let cardId = "cardId_example"; // String | the Id parameter
apiInstance.deletecard(cardId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllcard

> [Card] getAllcard()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CardApi();
apiInstance.getAllcard((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Card]**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getcard

> Card getcard(cardId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CardApi();
let cardId = "cardId_example"; // String | the Id parameter
apiInstance.getcard(cardId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardId** | **String**| the Id parameter | 

### Return type

[**Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatecard

> Card updatecard(cardId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CardApi();
let cardId = "cardId_example"; // String | the Id parameter
let opts = {
  'card': new TempApi.Card() // Card | data to be updated
};
apiInstance.updatecard(cardId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardId** | **String**| the Id parameter | 
 **card** | [**Card**](Card.md)| data to be updated | [optional] 

### Return type

[**Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

