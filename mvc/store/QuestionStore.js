Ext.define('MyApp.store.QuestionStore', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'question', type: 'string'}
    ]
});