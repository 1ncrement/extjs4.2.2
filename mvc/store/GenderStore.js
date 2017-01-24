Ext.define('MyApp.store.GenderStore', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'gender', type: 'string'}
    ]
});