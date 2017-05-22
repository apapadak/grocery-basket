'use strict';

/**
 * Created by apapadak on 04/May/2017.
 *
 * This is the web service layer which has one method to consume the web service jsonRates
 */

angular.module('groceryApp').factory( 'webServiceDal', [ '$http', '$q', 'config',
        function($http, $q, config) {

            //Object containing service calls
            return {
                getJsonRates: function () {

                    // We take the endpoint from the initialization parameters in config
                    var endpoint = config.endpointDict['getJsonRates'] ;//+ '&source=GBP';

                    // This method is called when the http post has returned with a response
                    var onSuccess = function (response) {
                        var result = {}; // use for results

                        var responseData = response.data;
                        if (!responseData) {
                            result.responseError = 'Missing valid response object.';
                        }
                        else {
                            if (!responseData.success) { // set error code & info in case jsonRates fails
                                result.errorCode = responseData.error.code;
                                result.errorInfo = responseData.error.info;

                                return result;
                            }

                            // create the result object to return to the controller
                            result.timestamp = responseData.timestamp;
                            result.source = responseData.source;
                            result.quotes = createArrayFromObject(responseData.quotes);
                        }

                        return result;
                    };

                    var onError = function (response) {
                        return $q.reject(response.data);
                    };

                    // the actual post to jsonrates
                    return $http.post(endpoint).then(onSuccess, onError);
                }
            };
        }
    ]);

/////////////////////////////////////////////////////
//Helper function to convert the object to an array//
/////////////////////////////////////////////////////
function createArrayFromObject(object) {
    var result = [];
    if (object && object.length > 0) {
        //it is array
        result = object;
    } else if (object) {
        result.push(object);
    }
    return result;
}