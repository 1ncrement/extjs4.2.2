Ext.define('MyApp.store.StateStore', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'field', type: 'string'},
        {name: 'value', type: 'string'}
    ]
});