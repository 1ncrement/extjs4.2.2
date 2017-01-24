Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    idProperty: 'email',
    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'reemail', type: 'string'},
        {name: 'password', type: 'string'},
        {name: 'repassword', type: 'string'},
        {name: 'address', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'state', type: 'int'},
        {name: 'zipCode', type: 'string'},
        {name: 'phonePrefix', type: 'int'},
        {name: 'phoneNumber', type: 'string'},
        {name: 'dateOfBirth', type: 'date'},
        {name: 'gender', type: 'int'},
        {name: 'securityQuestion', type: 'int'},
        {name: 'securityAnswer', type: 'string'}
    ]
});