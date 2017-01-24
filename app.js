Ext.onReady(function () {
    Ext.application({
        name: 'MyApp',
        appFolder: 'mvc',
        controllers: ['User-ctrl'],

        launch: function () {
            Ext.create('MyApp.view.RegistrationForm', {
                renderTo: Ext.getBody()
            });
        }
    });
});