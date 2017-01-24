Ext.tip.QuickTipManager.init();

Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
    maxWidth: 200,
    minWidth: 100,
    showDelay: 50      // Show 50ms after entering target
});

Ext.define('MyApp.view.components.HelpingTo', {
    extend: 'Ext.Component',
    alias: 'myapp.helpingto',
    xtype: 'myapp.helpingto',

    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            listeners: {
                render: function () {
                    Ext.tip.QuickTipManager.register({
                        target: me.getEl(),
                        title: me.toolTip.title,
                        text: me.toolTip.text,
                        width: 'auto',
                        dismissDelay: 10000 // Hide after 10 seconds hover
                    });
                }
            }
        });
        me.callParent(arguments);
    }
});