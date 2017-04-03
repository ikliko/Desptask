/**
 * Created by kliko on 3/13/16.
 */
var cleverPlatform = cleverPlatform || {};

(function (cleverPlatform) {
    var l_isRunned = false,
        l_isInitialization = true;

    function Engine() {
        if (l_isRunned) {
            alert('You Cant initialize two applications');
            console.error('%cYou Cant initialize two applications', 'background-color: red');
            return;
        }
        this._eventCounter = 0;
        cleverPlatform.config = constants;
        this.triggeredEvents = [];
        this.events = {
            //trigger engine loading
            EngineStarting: 'EngineStarting',
            //trigger when engine is loaded
            EngineLoaded: 'EngineLoaded',
            //trigger when scripts loading
            ScriptsLoading: 'ScriptsLoading',
            //trigger when scripts are loaded
            ScriptsLoaded: 'ScriptsLoaded',
            //triggered when special scripts loading
            SpecialScriptsLoading: 'SpecialScriptsLoading',
            //triggered when special scripts loaded
            SpecialScriptsLoaded: 'SpecialScriptsLoaded',
            //triggered when libraries are loading
            LibrariesLoading: 'LibrariesLoading',
            //triggered when libraries are loaded
            LibrariesLoaded: 'LibrariesLoaded',
            //triggered when plugins loading
            PluginsLoading: 'PluginsLoading',
            //triggered when plugins loaded
            PluginsLoaded: 'PluginsLoaded',
            //trigger on widgets loading
            WidgetsLoading: 'WidgetsLoading',
            //trigers on widgets loaded
            WidgetsLoaded: 'WidgetsLoaded'
        };
        //firstly specials are loaded
        this.specialScripts = [
            'q.js',
            'client.js'
        ];
        this.libs = [
            'bootstrap.min.js'
        ];
        this.widgets = [
            {
                file: 'test.js',
                params: []
            }
        ];
        l_isRunned = true;
        this.eventsHandler();
        this.triggerEvent(this.events.EngineStarting);
        this.loadSpecialScripts();
        this.loadLibraries();
        this.loadFakeApi();
        this.loadWidgets();
    }

    Engine.prototype.eventsHandler = function eventsHandler() {
        this.subscribeEvent(this.events.SpecialScriptsLoaded, () => {
            this.loadLibraries(function () {
                this.triggerEvent(this.events.LibrariesLoaded);
            });
        });

        this.subscribeEvent(this.events.LibrariesLoaded, () => {
            this.loadPlugins(function () {
                this.triggerEvent(this.events.PluginsLoaded);
            });
        });

        this.subscribeEvent(this.events.PluginsLoaded, () => {
            this.loadWidgets(function () {
                this.triggerEvent(this.events.WidgetsLoaded);
                this.triggerEvent(this.events.EngineLoaded);
            });
        });

        this.subscribeEvent(this.events.EngineLoaded, () => {
            this.log('engine and all scripts are loaded')
        });
    };

    Engine.prototype.triggerEvent = function triggerEvent(event, response) {
        var _engine = this;
        if (!event) return;
        if (event.contains('ing')) {
            _engine._eventCounter++;
            console.log('event: %c%s ' + '%ccounter:' + ' %c%s', 'color: red', event, 'font-weight: normal', 'font-weight: bold', this._eventCounter);
        } else if (event.contains('ed')) {
            _engine._eventCounter--;
            console.log('event subscr : %c%s ' + '%ccounter:' + ' %c%s', 'color: green', event, 'font-weight: normal', 'font-weight: bold', this._eventCounter);
        } else {
            return;
        }
        this.triggeredEvents[event] = event;
        $(window).trigger(event, response);
    };

    Engine.prototype.subscribeEvent = function subscribeEvent(event, callback) {
        var _engine = this;
        $(window).on(event, function () {
            if (!!callback) {
                callback();
            }
            _engine.subscribeEvent(event);
        });
        if (!this.triggeredEvents[event]) {
            return;
        }
        delete this.triggeredEvents[event];
    };

    Engine.prototype.loadSpecialScripts = function loadSpecialScripts(callback) {
        var _engine = this,
            lastIndex = this.specialScripts.length - 1;

        this.triggerEvent(_engine.events.SpecialScriptsLoading);

        if (!this.specialScripts.length && !!callback) callback();
        this.specialScripts.forEach(function (script, i) {
            $.get(cleverPlatform.config.specialScriptsUrl + script, function (response) {
                console.log(script.split('.')[0].toUpperCaseFirst(), 'is loaded');
                if (i === lastIndex && !!callback) callback();
            });
        });

        return 0;
    };

    Engine.prototype.loadLibraries = function loadLibraries(callback) {
        var _engine = this,
            lastIndex = this.libs.length - 1;

        _engine.triggerEvent(_engine.events.LibrariesLoading);

        if (!this.libs.length && !!callback) {
            callback();
        }
        this.libs.forEach(function (script, i) {
            $.get(cleverPlatform.config.librariesUrl + script, function (response) {
                console.log('%c%s %cis loaded', 'font-weight: bold', script.split('.')[0].toUpperCaseFirst(), 'font-weight: normal');
                if (i === lastIndex && !!callback) {
                    callback();
                }
            });
        });

        return 0;
    };

    Engine.prototype.loadWidgets = function loadWidgets(callback) {
        var _engine = this,
            lastIndex = this.widgets.length - 1;

        _engine.triggerEvent(_engine.events.WidgetsLoading);

        if (!this.widgets.length && !!callback) {
            callback();
        }
        this.widgets.forEach(function (script, i) {
            $.get(cleverPlatform.config.widgetsUrl + script.file, function (response) {
                var runPoint = 'get' + script.file.split('.')[0].toUpperCaseFirst();
                cleverPlatform[runPoint](script.params);
                if (i === lastIndex && !!callback) {
                    callback();
                }
            });
        });

        return 0;
    };

    Engine.prototype.loadFakeApi = (callback) => {
        cleverPlatform.config.fakeApi.forEach((script, i) => {
            $.get(cleverPlatform.config.fakeApiUrl + script, (respose) => {
                console.log(script, 'is loaded');
            })
        });
    };

    cleverPlatform._run = function RunEngine() {
        cleverPlatform.Helper = new Engine();
    };

    cleverPlatform._run();

}(cleverPlatform));