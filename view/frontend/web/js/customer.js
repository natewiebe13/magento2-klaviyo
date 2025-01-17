define([
    'underscore',
    'Magento_Customer/js/customer-data',
    'domReady!'
], function (_, customerData) {
    'use strict';
    var klaviyo = window.klaviyo || [];

    customerData.getInitCustomerData().done(function () {
        var customer = customerData.get('customer')();

        if(_.has(customer, 'email') && customer.email && !klaviyo.isIdentified()) {
            klaviyo.identify({
                '$email': customer.email,
                '$first_name': _.has(customer, 'firstname') ? customer.firstname : '',
                '$last_name':  _.has(customer, 'lastname') ? customer.lastname : ''
            });
        }
    });

});
