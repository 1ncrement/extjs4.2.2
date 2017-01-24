Ext.define('MyApp.view.RegistrationForm', {
    extend: 'Ext.form.Panel',
    requires: ['MyApp.view.components.HelpingTo'],
    model: 'MyApp.model.User',
    title: 'Form',
    width: 480,
    bodyPadding: '5 20',
    itemId: 'registrationForm',
    floating: true,
    draggable: true,
    defaultType: 'textfield',
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 120,
        labelStyle: 'font-weight: bold',
        margin: '0 7 15 7',
        anchor: '90%'
    },
    initComponent: function () {
        var me = this,
            HELPURL = 'img/Help.png';

        Ext.applyIf(me, {
            items: [
                {
                    fieldLabel: 'First Name',
                    name: 'firstName',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Last Name',
                    name: 'lastName',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    itemId: 'email',
                    vtype: 'email',
                    afterSubTpl: '<span>(You email address will be your username)</span>',
                    listeners: {
                        blur: function () {
                            var reemail = me.down('#reemail');
                            reemail.validate();
                        }
                    }
                },
                {
                    fieldLabel: 'Re-type Email',
                    vtype: 'email',
                    name: 'reemail',
                    itemId: 'reemail',
                    allowBlank: false,
                    validator: function (value) {
                        var email = me.down('field#email');

                         return (email.getValue().localeCompare(value) === 0)
                         ? true
                         : 'This field is not equal field email';
                    }
                },
                {
                    fieldLabel: 'Password',
                    name: 'password',
                    itemId: 'password',
                    minLength: 8,
                    inputType: 'password',
                    regex: /\w*[0-9]+/, // TODO (потестить регулярку)
                    listeners: {
                        blur: function () {
                            var repass = me.down('field#repassword');
                             repass.validate();
                        }
                    },
                    afterSubTpl: '<span>(Min, 8 characters, 1 number, case-sensitive)</span>',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Re-type Password',
                    name: 'repassword',
                    itemId: 'repassword',
                    inputType: 'password',
                    validator: function (value) {
                        var password = me.down('field#password');

                         return (password.getValue().localeCompare(value) === 0)
                         ? true
                         : 'This field is not equal field Password';
                    }
                },
                {
                    fieldLabel: 'Address',
                    name: 'address',
                    allowBlank: false
                },
                {
                    fieldLabel: 'City',
                    name: 'city',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    name: 'state',
                    fieldLabel: 'State',
                    store: Ext.create('MyApp.store.StateStore', {
                        data: [
                            {"id": 0, "field": "USA", "value": "USA"},
                            {"id": 1, "field": "RUS", "value": "Russia"},
                            {"id": 2, "field": "UA", "value": "Ukrain"}
                        ]
                    }),
                    emptyText: 'Choose a state',
                    valueField: 'id',
                    displayField: 'field',
                    allowBlank: false
                },
                {
                    xtype: 'container', // тут будет инпут и селектор
                    name: 'zipCode',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'Zip Code',
                            buttonText: 'Optional',
                            name: 'zipCode',
                            afterSubTpl: '<span>Optional</span>'
                        }
                    ]
                },
                {
                    xtype: 'container', // тут будет инпут и селектор
                    layout: 'hbox',
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'Phone',
                            name: 'phoneNumber',
                            flex: 1,
                            emptyText: 'xxxxxxxxxx',
                            maskRe: /[\d]/,
                            regex: /^\d{10}$/,
                            regexText: 'regex text',
                            afterSubTpl: '<span>No spaces or dashes</span>'
                        }, {
                            xtype: 'myapp.helpingto',
                            name: 'helpPhone',
                            width: 20,
                            height: 20,
                            toolTip: {
                                title: 'Phone help',
                                text: 'что бы заработало надо перекреститься'
                            },
                            autoEl: {
                                tag: 'img',
                                src: HELPURL
                            }
                        }, {
                            xtype: 'combobox',
                            name: 'phonePrefix',
                            emptyText: 'Mobile',
                            width: 100,
                            store: Ext.create('MyApp.store.PhoneStore', {
                                data: [
                                    {"id": 0, "field": "USA", "value": "+1"},
                                    {"id": 1, "field": "RUS", "value": "+7"},
                                    {"id": 2, "field": "UA", "value": "+3"}
                                ]
                            }),
                            valueField: 'id',
                            // TODO добавить при изменении изменение левого поля, что бы добавляло к цифрам
                            displayField: 'field',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    items: [
                        {
                            allowBlank: false,
                            xtype: 'datefield',
                            name: 'dateOfBirth',
                            fieldLabel: 'Date of Birth',
                            flex: 1,
                            emptyText: 'mm/dd/yyyy'
                        }, {
                            xtype: 'myapp.helpingto',
                            toolTip: {
                                title: 'Date help',
                                text: 'что бы заработало надо перекреститься'
                            },
                            width: 20,
                            height: 20,
                            autoEl: {
                                tag: 'img',
                                src: HELPURL
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    items: [
                        {
                            xtype: 'combobox',
                            name: 'gender',
                            fieldLabel: 'Gender',
                            emptyText: 'Choose a gender',
                            store: Ext.create('MyApp.store.GenderStore', {
                                data: [
                                    {'id': 0, gender: 'male'},
                                    {'id': 1, gender: 'female'}
                                ]
                            }),
                            valueField: 'id',
                            displayField: 'gender',
                            allowBlank: false
                        }, {
                            xtype: 'myapp.helpingto',
                            toolTip: {
                                title: 'Gender help',
                                text: 'что бы заработало надо перекреститься'
                            },
                            width: 20,
                            height: 20,
                            autoEl: {
                                tag: 'img',
                                src: HELPURL
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    items: [
                        {
                            xtype: 'combobox',
                            name: 'securityQuestion',
                            fieldLabel: 'Security Question',
                            flex: 1,
                            emptyText: 'Choose a sequrity question',
                            store: Ext.create('MyApp.store.QuestionStore', {
                                data: [
                                    {id: 0, question: 'Фамилия мамки?'},
                                    {id: 1, question: 'Когда курил?'},
                                    {id: 2, question: 'Кличка домашнего питомца\\друга?'}
                                ]
                            }),
                            valueField: 'id',
                            displayField: 'question',
                            allowBlank: false
                        }, {
                            xtype: 'myapp.helpingto',
                            toolTip: {
                                title: 'Security help',
                                text: 'что бы заработало надо перекреститься'
                            },
                            width: 20,
                            height: 20,
                            autoEl: {
                                tag: 'img',
                                src: HELPURL
                            }
                        }
                    ]
                },
                {
                    fieldLabel: 'Security Answer',
                    name: 'securityAnswer',
                    // inputType: 'password', // TODO сделать скрытие пароля через чекбокс если поставить чекбокс то будет показываться ответ на вопрос
                    afterSubTpl: '<span>(Not case-sensitive)</span>',
                    allowBlank: false
                },
                {
                    xtype: 'button',
                    text: 'Add',
                    itemId: 'saveBtn'
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    itemId: 'cancelBtn'
                }
            ]
        });
        me.callParent(arguments);
    }
});