/* jshint node: true */
/* globals describe, beforeEach, browser, it, element, expect,by, id */
/* jasmine: true */
"use strict";

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('groceryApp integration tests', function () {
    beforeEach(function () {
        browser.get('/');
    });

    /*
     * Check that browser redirects correctly to #/
     */
    it('should redirect / to #/', function () {
        browser.getCurrentUrl().then(function (url) {
            expect(url.split('#')[1]).toBe('/');
        });
    });





    /******************************************************************************************************/
    /*******************************************************************************
     * Step1. CHECK THAT CLICKING ON A PRODUCT ICON ACTUALLY ADDS A PRODUCT IN THE BASKET *
     *******************************************************************************/

    /*
     * Check that clicking on the icon of peas adds an item to the basket
     */
    it('clicking on the peas icon', function () {
        browser.getCurrentUrl();

        var peasIconAddButton = element(by.id('peasIconAdd'));
        peasIconAddButton.click();

        browser.driver.sleep(1000);

        var peasQty = element(by.id('peasQty'));

        expect(peasQty.getAttribute('value')).toEqual('1');
    });

    /*
     * Check that clicking on the icon of eggs adds an item to the basket
     */
    it('clicking on the eggs icon', function () {
        browser.getCurrentUrl();

        var eggsIconAddButton = element(by.id('eggsIconAdd'));
        eggsIconAddButton.click();

        browser.driver.sleep(1000);

        var eggsQty = element(by.id('eggsQty'));

        expect(eggsQty.getAttribute('value')).toEqual('1');
    });

    /*
     * Check that clicking on the icon of milk adds an item to the basket
     */
    it('clicking on the milk icon', function () {
        browser.getCurrentUrl();

        var milkIconAddButton = element(by.id('milkIconAdd'));
        milkIconAddButton.click();

        browser.driver.sleep(1000);

        var milkQty = element(by.id('milkQty'));

        expect(milkQty.getAttribute('value')).toEqual('1');
    });

    /*
     * Check that clicking on the icon of beans adds an item to the basket
     */
    it('clicking on the beans icon', function () {
        browser.getCurrentUrl();

        var beansIconAddButton = element(by.id('beansIconAdd'));
        beansIconAddButton.click();

        browser.driver.sleep(1000);

        var beansQty = element(by.id('beansQty'));

        expect(beansQty.getAttribute('value')).toEqual('1');
    });





    /******************************************************************************************************/
    /***********************************************
     * Step1. CHECK THAT THE ADD BUTTON OF PRODUCTS WORKS *
     ***********************************************/

    /*
     * Check that adding a (bag of) peas using the add button, works
     */
    it('adding a (bag of) peas using the add button', function () {
        browser.getCurrentUrl();

        var peasAddButton = element(by.id('peasAdd'));
        peasAddButton.click();

        browser.driver.sleep(1000);

        var peasQty = element(by.id('peasQty'));

        expect(peasQty.getAttribute('value')).toEqual('1');
    });

    /*
     * Check that adding a (dozen of) eggs using the add button, works
     */
    it('adding a (dozen of) eggs using the add button', function () {
        browser.getCurrentUrl();

        var eggsAddButton = element(by.id('eggsAdd'));
        eggsAddButton.click();

        browser.driver.sleep(1000);

        var eggsQty = element(by.id('eggsQty'));

        expect(eggsQty.getAttribute('value')).toEqual('1');
    });

    /*
     * Check that adding a (bottle of) milk using the add button, works
     */
    it('adding a (bottle of) milk using the add button', function () {
        browser.getCurrentUrl();

        var milkAddButton = element(by.id('milkAdd'));
        milkAddButton.click();

        browser.driver.sleep(1000);

        var milkQty = element(by.id('milkQty'));

        expect(milkQty.getAttribute('value')).toEqual('1');
    });

    /*
     * Check that adding a (can of) beans using the add button, works
     */
    it('adding a (can of) beans using the add button', function () {
        browser.getCurrentUrl();

        var beansAddButton = element(by.id('beansAdd'));
        beansAddButton.click();

        browser.driver.sleep(1000);

        var beansQty = element(by.id('beansQty'));

        expect(beansQty.getAttribute('value')).toEqual('1');
    });





    /******************************************************************************************************/
    /**************************************************
     * Step1. CHECK THAT THE REMOVE BUTTON OF PRODUCTS WORKS *
     **************************************************/

    /*
     * Check that removing a (bag of) peas using the remove button, works
     */
    it('removing a (bag of) peas using the add button first, and then removing it', function () {
        browser.getCurrentUrl();

        var peasAddButton = element(by.id('peasAdd'));
        peasAddButton.click();

        browser.driver.sleep(1000);

        var peasRemoveButton = element(by.id('peasRemove'));
        peasRemoveButton.click();

        browser.driver.sleep(1000);

        var peasQty = element(by.id('peasQty'));

        expect(peasQty.getAttribute('value')).toEqual('0');
    });

    /*
     * Check that removing a (dozen of) eggs using the remove button, works
     */
    it('removing a (dozen of) eggs using the add button first, and then removing it', function () {
        browser.getCurrentUrl();

        var eggsAddButton = element(by.id('eggsAdd'));
        eggsAddButton.click();

        browser.driver.sleep(1000);

        var eggsRemoveButton = element(by.id('eggsRemove'));
        eggsRemoveButton.click();

        browser.driver.sleep(1000);

        var eggsQty = element(by.id('eggsQty'));

        expect(eggsQty.getAttribute('value')).toEqual('0');
    });

    /*
     * Check that removing a (bottle of) milk using the remove button, works
     */
    it('removing a (bottle of) milk using the add button first, and then removing it', function () {
        browser.getCurrentUrl();

        var milkAddButton = element(by.id('milkAdd'));
        milkAddButton.click();

        browser.driver.sleep(1000);

        var milkRemoveButton = element(by.id('milkRemove'));
        milkRemoveButton.click();

        browser.driver.sleep(1000);

        var milkQty = element(by.id('milkQty'));

        expect(milkQty.getAttribute('value')).toEqual('0');
    });

    /*
     * Check that removing a (can of) beans using the remove button, works
     */
    it('removing a (can of) beans using the add button first, and then removing it', function () {
        browser.getCurrentUrl();

        var beansAddButton = element(by.id('beansAdd'));
        beansAddButton.click();

        browser.driver.sleep(1000);

        var beansRemoveButton = element(by.id('beansRemove'));
        beansRemoveButton.click();

        browser.driver.sleep(1000);

        var beansQty = element(by.id('beansQty'));

        expect(beansQty.getAttribute('value')).toEqual('0');
    });





    /******************************************************************************************************/
    /****************************************************************************************
     * Step 2. CHECK THAT THE CHECKOUT BUTTON WORKS (AFTER ADDING A FEW PRODUCTS IN THE BASKET *
     ****************************************************************************************/

    /*
     * Check the checkout button works
     */
    it('check the checkout button works', function () {
        browser.getCurrentUrl();

        var peasAddButton = element(by.id('peasAdd'));
        peasAddButton.click();

        browser.driver.sleep(1000);

        var eggsAddButton = element(by.id('eggsAdd'));
        eggsAddButton.click();

        browser.driver.sleep(1000);

        var milkIconAddButton = element(by.id('milkIconAdd'));
        milkIconAddButton.click();

        browser.driver.sleep(1000);

        var beansIconAddButton = element(by.id('beansIconAdd'));
        beansIconAddButton.click();

        browser.driver.sleep(1000);

        var checkoutButton = element(by.id('checkoutButton'));
        checkoutButton.click();

        browser.driver.sleep(1000);

        var basketContent = element(by.id('basketContent'));

        // 0.95 + 2.10 + 1.30 + 0.73 = 5.08
        expect(basketContent.getText()).toEqual('Total Cost of basket: 5.08');
    });





    /******************************************************************************************************/
    /****************************************************************************************
     * Step 2. CHECK THAT THE CLEAR BUTTON WORKS (AFTER ADDING A FEW PRODUCTS IN THE BASKET *
     ****************************************************************************************/

    /*
     * Check the clear button works
     */
    it('check the clear button works', function () {
        browser.getCurrentUrl();

        var beansAddButton = element(by.id('beansAdd'));
        beansAddButton.click();

        browser.driver.sleep(1000);

        var eggsAddButton = element(by.id('eggsAdd'));
        eggsAddButton.click();
        eggsAddButton.click();

        browser.driver.sleep(1000);

        var milkIconAddButton = element(by.id('milkIconAdd'));
        milkIconAddButton.click();
        milkIconAddButton.click();
        milkIconAddButton.click();
        milkIconAddButton.click();
        milkIconAddButton.click();
        milkIconAddButton.click();

        browser.driver.sleep(1000);

        var beansIconAddButton = element(by.id('beansIconAdd'));
        beansIconAddButton.click();
        beansIconAddButton.click();

        browser.driver.sleep(1000);

        var clearButton = element(by.id('clearButton'));
        clearButton.click();

        browser.driver.sleep(1000);

        var peasQty = element(by.id('peasQty'));
        var eggsQty = element(by.id('eggsQty'));
        var milkQty = element(by.id('milkQty'));
        var beansQty = element(by.id('beansQty'));

        expect(beansQty.getAttribute('value')).toEqual('0');
        expect(eggsQty.getAttribute('value')).toEqual('0');
        expect(milkQty.getAttribute('value')).toEqual('0');
        expect(beansQty.getAttribute('value')).toEqual('0');
    });





    /******************************************************************************************************/
    /*****************************************************
     * Step 3. CHECK THAT THE CURRENCY CONVERSION WORKS  *
     *****************************************************/

    /*
     * Check the DOLLAR currency conversion works
     */
    it('check the DOLLAR currency conversion works', function () {
        browser.getCurrentUrl();

        var peasAddButton = element(by.id('peasAdd'));
        peasAddButton.click();

        browser.driver.sleep(1000);

        var eggsAddButton = element(by.id('eggsAdd'));
        eggsAddButton.click();

        browser.driver.sleep(1000);

        var milkIconAddButton = element(by.id('milkIconAdd'));
        milkIconAddButton.click();

        browser.driver.sleep(1000);

        var beansIconAddButton = element(by.id('beansIconAdd'));
        beansIconAddButton.click();

        browser.driver.sleep(1000);

        var checkoutButton = element(by.id('checkoutButton'));
        checkoutButton.click();

        browser.driver.sleep(1000);

        var convertToDollar = element(by.id('USD'));
        convertToDollar.click();

        browser.driver.sleep(3000);

        var basketContentCurrency = element(by.id('basketContentCurrency'));

        expect(basketContentCurrency.getText()).toEqual('$');
    });

    /*
     * Check the POUND currency conversion works
     */
    it('check the POUND currency conversion works', function () {
        browser.getCurrentUrl();

        var peasAddButton = element(by.id('peasAdd'));
        peasAddButton.click();

        browser.driver.sleep(1000);

        var eggsAddButton = element(by.id('eggsAdd'));
        eggsAddButton.click();

        browser.driver.sleep(1000);

        var milkIconAddButton = element(by.id('milkIconAdd'));
        milkIconAddButton.click();

        browser.driver.sleep(1000);

        var beansIconAddButton = element(by.id('beansIconAdd'));
        beansIconAddButton.click();

        browser.driver.sleep(1000);

        var checkoutButton = element(by.id('checkoutButton'));
        checkoutButton.click();

        browser.driver.sleep(1000);

        var convertToPound = element(by.id('GBP'));
        convertToPound.click();

        browser.driver.sleep(3000);

        var basketContentCurrency = element(by.id('basketContentCurrency'));

        expect(basketContentCurrency.getText()).toEqual('£');
    });

    /*
     * Check the EURO currency conversion works
     */
    it('check the EURO currency conversion works', function () {
        browser.getCurrentUrl();

        var peasAddButton = element(by.id('peasAdd'));
        peasAddButton.click();

        browser.driver.sleep(1000);

        var eggsAddButton = element(by.id('eggsAdd'));
        eggsAddButton.click();

        browser.driver.sleep(1000);

        var milkIconAddButton = element(by.id('milkIconAdd'));
        milkIconAddButton.click();

        browser.driver.sleep(1000);

        var beansIconAddButton = element(by.id('beansIconAdd'));
        beansIconAddButton.click();

        browser.driver.sleep(1000);

        var checkoutButton = element(by.id('checkoutButton'));
        checkoutButton.click();

        browser.driver.sleep(1000);

        var convertToEuro = element(by.id('EUR'));
        convertToEuro.click();

        browser.driver.sleep(3000);

        var basketContentCurrency = element(by.id('basketContentCurrency'));

        expect(basketContentCurrency.getText()).toEqual('€');
    });

    /*
     * Check the YEN currency conversion works
     */
    it('check the EURO currency conversion works', function () {
        browser.getCurrentUrl();

        var peasAddButton = element(by.id('peasAdd'));
        peasAddButton.click();

        browser.driver.sleep(1000);

        var eggsAddButton = element(by.id('eggsAdd'));
        eggsAddButton.click();

        browser.driver.sleep(1000);

        var milkIconAddButton = element(by.id('milkIconAdd'));
        milkIconAddButton.click();

        browser.driver.sleep(1000);

        var beansIconAddButton = element(by.id('beansIconAdd'));
        beansIconAddButton.click();

        browser.driver.sleep(1000);

        var checkoutButton = element(by.id('checkoutButton'));
        checkoutButton.click();

        browser.driver.sleep(1000);

        var convertToYEN = element(by.id('JPY'));
        convertToYEN.click();

        browser.driver.sleep(3000);

        var basketContentCurrency = element(by.id('basketContentCurrency'));

        expect(basketContentCurrency.getText()).toEqual('¥');
    });

});