var cleverPlatform = cleverPlatform || {};

(function (cleverPlatform) {
    var app,
        config = {},
        events = {
            //trigger engine loading
            EngineLoading: 'EngineLoading',
            //trigger engine loaded
            EngineLoaded: 'EngineLoaded',
            //trigger when new script added
            NewScriptAdded: 'NewScriptAdded',
            //trigger when scripts loading
            ScriptsLoading: 'ScriptsLoading',
            //trigger when scripts are loaded
            ScriptsLoaded: 'ScriptsLoaded',
            //trigger when new script is adding
            NewScriptAdding: 'NewScriptAdding',
            //trigger sidebar initializing
            SidebarInitializing: 'SidebarInitializing',
            //trigger sidebar loaded
            SidebarReady: 'SidebarReady',
            //trigger when sidebar extender is clicked
            SidebarExtenderClicked: 'SidebarExtenderClicked',
            //trigger when sidebar hiding start
            SidebarExtending: 'SidebarExtending',
            //trigger when sidebar hiding is done
            SidebarExtended: 'SidebarExtended',
            //trigger intending
            SidebarIntending: 'SidebarIntending',
            //trigger intended
            SidebarIntended: 'SidebarIntending'
        };

    //base url
    config['baseURL'] = $(location)[0].origin;
    //widgets url
    config['widgetsURL'] = config.baseURL + '/js/widgets/';
    //content container selector
    config['contentContainerSelector'] = '#content';

    cleverPlatform.Helper = cleverPlatform.getHelper(events, config);

    app = cleverPlatform.Run();
    app.addScript('sidebar.js', {
        sidebarSelector: '.sidebar-wrapper',
        menuExtender: '#menu-extender'
    });


    console.log(app);
}(cleverPlatform));