/**
 * Created by apapadak on 04/May/2017.
 *
 * This angular module is called 'groceryapp' and during initialization we inject the following:
 * i) a config constant which includes a few initialization parameters (the jsonrates endpoint etc.)
 * ii) the web service layer which handles communication with web services (jsonrates)
 * ii) $sce which provides strict contextual escaping services
 */
'use strict';

angular.module('groceryApp').controller('GroceryBasketController', ['$scope', 'config', 'webServiceDal', '$sce', function ($scope, $config, webServiceDal, $sce) {

    // List of products. To add a new one, simply add one line with all the info required (description, cost etc.) on this list
    $scope.products = [
        {id: 'peas',    description: $sce.trustAsHtml('Tasty peas for 95p/bag &#33;'),                      cost: 0.95, quantity: 0 } ,
        {id: 'eggs',    description: $sce.trustAsHtml('Eggs for &pound;2.10/dozen &#33;'),                  cost: 2.10, quantity: 0 } ,
        {id: 'milk',    description: $sce.trustAsHtml('Your favorite milk for &pound;1.30/bottle &#33;'),   cost: 1.30, quantity: 0 } ,
        {id: 'beans',   description: $sce.trustAsHtml('Delicious beans for 73p/bag &#33;'),                 cost: 0.73, quantity: 0 }
    ];

    // List of currencies. To add a new one, simply add it here and create the button on the html.
    $scope.currencies = [
        {id: 'USD', symbol: $sce.trustAsHtml('&dollar;')},
        {id: 'GBP', symbol: $sce.trustAsHtml('&pound;')},
        {id: 'EUR', symbol: $sce.trustAsHtml('&euro;')},
        {id: 'JPY', symbol: $sce.trustAsHtml('&yen;')}
    ];

    $scope.baksetCostValueInPounds = 0.00;  // We need to keep the initial basket value in pounds to do the conversion every time
    $scope.convertedCostValue = 0.00;       // The current basket value
    $scope.currentCurrency = $scope.currencies[1].symbol;   // The current basket value symbol

    // The method to add a product in the basket
    $scope.addProduct = function (id) {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id === id) {
                $scope.products[i].quantity++;

                return;
            }
        }
    };

    // The method to remove a product from the basket
    $scope.removeProduct = function (id) {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id === id && $scope.products[i].quantity > 0) {
                $scope.products[i].quantity--;

                return;
            }
        }
    };

    // The method called when the user clicks on checkout button. It calculates the total cost of the items in the basket.
    $scope.checkoutBasket = function () {

        $scope.resetValues();
        for (var i = 0; i < $scope.products.length; i++) {
            $scope.baksetCostValueInPounds += $scope.products[i].quantity * $scope.products[i].cost;
        }
    };

    // Clears the basket
    $scope.clearBasket = function () {
        for (var i = 0; i < $scope.products.length; i++) {
            $scope.products[i].quantity = 0;
        }

        $scope.resetValues();
    };

    /*  When the user clicks on any currency, the web service layer is called to handle communication with json rates.
        In case there is an error, it is displayed in globalError.
        Otherwise, the converted value is shown (with the initial cost in pounds next to it).
     */
    $scope.convert = function (id) {

        var jsonRatesSuccess = function(responseData) {
            if (responseData.errorCode) {
                $scope.globalError = $sce.trustAsHtml('Error connecting to liveRates. Code: ' + responseData.errorCode + ' Info: ' + responseData.errorInfo);

                console.log($scope.globalError);

                return;
            }

            if (id === 'USD')   {
                $scope.convertedCostValue = $scope.baksetCostValueInPounds * responseData.quotes[0]['USDGBP'];
                $scope.currentCurrency = $scope.currencies[0].symbol;

                console.log( 'USDGBP rate : ' + responseData.quotes[0]['USDGBP'] );

            } else if (id === 'GBP')   {
                $scope.convertedCostValue = 0.00;
                $scope.currentCurrency = $scope.currencies[1].symbol;

                console.log( 'GBPGBP rate : 1');

            } else if (id === 'EUR')   {
                /*
                 * Unfortunately, the free subscription plan to jsonrates does not support
                 * Source Currency Switching. Thus, I can't send as parameter something like
                 * '&source=GBP', to get the exact rate against the pound.
                 * So, I have to change the basket cost from pounds to dollars first (according
                 * to USDGBP), and then change it to the required currency using the respective rate (e.g. USDEUR).
                 * Not an efficient workaround, but hey.. you get what you pay :)
                 */
                var temp = $scope.baksetCostValueInPounds * responseData.quotes[0]['USDGBP'];    // total cost is now in dollars
                $scope.convertedCostValue = temp * responseData.quotes[0]['USDEUR'];        // total cost is now in euros
                $scope.currentCurrency = $scope.currencies[2].symbol;

                console.log( 'USDGBP rate : ' + responseData.quotes[0]['USDGBP'] );
                console.log( 'USDEUR rate : ' + responseData.quotes[0]['USDEUR'] );

            }  else if (id === 'JPY') {
                /*
                 * Unfortunately, the free subscription plan to jsonrates does not support
                 * Source Currency Switching. Thus, I can't send as parameter something like
                 * '&source=GBP', to get the exact rate against the pound.
                 * So, I have to change the basket cost from pounds to dollars first (according
                 * to USDGBP), and then change it to the required currency using the respective rate (e.g. USDJPY).
                 * Not an efficient workaround, but hey.. you get what you pay :)
                 */
                var temp = $scope.baksetCostValueInPounds * responseData.quotes[0]['USDGBP'];    // total cost is now in dollars
                $scope.convertedCostValue = temp * responseData.quotes[0]['USDJPY'];        // total cost is now in yen
                $scope.currentCurrency = $scope.currencies[3].symbol;

                console.log( 'USDGBP rate : ' + responseData.quotes[0]['USDGBP'] );
                console.log( 'USDJPY rate : ' + responseData.quotes[0]['USDJPY'] );
            }

        };

        // Calling jsonrates with a promise to execute jsonRatesSuccess when we have a response
        webServiceDal.getJsonRates(id).then(jsonRatesSuccess);
    };

    // Reset all values to initial states
    $scope.resetValues = function() {
        $scope.baksetCostValueInPounds = 0.00;
        $scope.convertedCostValue = 0.00;
        $scope.globalError = '';
        $scope.currentCurrency = $scope.currencies[1].symbol;
    }
}]);