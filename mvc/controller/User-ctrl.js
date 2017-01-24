Ext.define('MyApp.controller.User-ctrl', {
    extend: 'Ext.app.Controller',
    models: ['User'],
    // views: ['RegistrationForm'], // TODO разобраться что это такое
    // stores: ['GenderStore', 'PhoneStore', 'QuestionStore', 'StateStore'],

    refs: [{
        ref: 'registrationForm',
        selector: 'form#registrationForm'
    }],

    init: function () {
        var me = this;

        me.control({
            'button#saveBtn': {
                click: me.saveBtnHandler
            },
            'button#cancelBtn': {
                click: me.cancelBtnHandler
            },
            'form#registrationForm': {
                afterrender: function (form) {
                    form.loadRecord(me.returnUser());
                }
            }
        });
    },

    returnUser: function () {
        return Ext.create('MyApp.model.User', {
            firstName: "Evgeniy",
            lastName: "Vakulenko",
            email: "vakula@gmail.com",
            reemail: "vakula@gmail.com",
            password: "1vakula@gmail.com",
            repassword: "1vakula@gmail.com",
            address: "адрес",
            city: "город",
            state: 2,
            zipCode: "666 66",
            phonePrefix: 2,
            phoneNumber: "0999999999",
            dateOfBirth: "01/04/1993",
            gender: 0,
            securityQuestion: 1,
            securityAnswer: "net"
        });
    },

    saveBtnHandler: function () {
        var form = this.getRegistrationForm();

        if (form.isValid()) {
            var viewValues = form.getValues();
            console.log(viewValues);
            console.log(JSON.stringify(viewValues));
        }
    },
    cancelBtnHandler: function () {
        var me = this;
        Ext.Msg.confirm('Clear form', 'Are you shure?', function (e) {
            if (e === 'yes') {
                var form = me.getRegistrationForm();
                form.getForm().reset();
            }
        });
    }
});