/**
 * Created by kliko on 3/13/16.
 */
var cleverPlatform = cleverPlatform || {};

(function(scope) {
    function Sidebar() {
        this.isInitializing = true;
        this.isExtended = true;
        this._selectors = {
            $sidebar: $(cleverPlatform.config.sidebar.selector),
            $menuExtender: $(cleverPlatform.config.sidebar.extender),
            $body: $(document.body)
        };
        this.events = {
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

        this.attachEvents();
    }

    Sidebar.prototype.show = function sidebarShow() {
        scope.Helper.triggerEvent(scope.Helper.events.SidebarExtending);

        this._selectors.$sidebar.addClass("extended");
        this._selectors.$sidebar.find('.sidebar-description').show();
        this._selectors.$body.css({
            'padding-left': this._selectors.$sidebar.width() - 1
        });
        this._selectors.$menuExtender.find('.fa').removeClass('fa-arrow-right').addClass('fa-arrow-left');
        this.isExtended = true;

        return 0;
    };

    Sidebar.prototype.hide = function sidebarHide() {
        scope.Helper.triggerEvent(scope.Helper.events.SidebarIntending);

        this._selectors.$sidebar.removeClass("extended");
        this._selectors.$sidebar.find('.sidebar-description').hide();
        this._selectors.$menuExtender.find('.fa').removeClass('fa-arrow-left').addClass('fa-arrow-right');
        this._selectors.$body.css({
            'padding-left': this._selectors.$sidebar.width() - 1
        });
        this.isExtended = false;

        return 0;
    };

    Sidebar.prototype.attachEvents = function events() {
        var sidebarScope = this;
        this._selectors.$menuExtender.on('click', function(event) {
            event.preventDefault();
            scope.Helper.triggerEvent(scope.Helper.events.SidebarExtenderClicked);
            if(sidebarScope.isExtended) {
                sidebarScope.hide();
                scope.Helper.triggerEvent(scope.Helper.events.SidebarIntended);
            } else {
                sidebarScope.show();
                scope.Helper.triggerEvent(scope.Helper.events.SidebarExtended);
            }
        });

        $(window).on(scope.Helper.events.SidebarInitializing, function(){
            cleverPlatform.Helper.completeEvent();
        });

        $(window).on(scope.Helper.events.SidebarReady, function(){
            this.isInitializing = false;

            cleverPlatform.Helper.completeEvent();
        });

        $(window).on(scope.Helper.events.SidebarExtenderClicked, function() {

            cleverPlatform.Helper.completeEvent();
        });

        $(window).on(scope.Helper.events.SidebarExtending, function() {

            cleverPlatform.Helper.completeEvent();
        });

        $(window).on(scope.Helper.events.SidebarExtended, function() {
            sidebarScope.isExtended = true;

            cleverPlatform.Helper.completeEvent(scope.Helper.events.SidebarExtended);
        });

        $(window).on(scope.Helper.events.SidebarIntending, function() {
            cleverPlatform.Helper.completeEvent(scope.Helper.events.SidebarIntending);
        });

        $(window).on(scope.Helper.events.SidebarIntended, function() {
            sidebarScope.isExtended = false;

            cleverPlatform.Helper.completeEvent(scope.Helper.events.SidebarIntended);
        });

        if(this.isInitializing) {
            scope.Helper.triggerEvent(scope.Helper.events.SidebarInitializing);

            if(this.isExtended) this.show();
            else this.hide();

            this._selectors.$sidebar.css({
                'left': 0
            });

            scope.Helper.triggerEvent(scope.Helper.events.SidebarReady);
        }
    };

    scope.getSidebar = function getSidebar () {
        return new Sidebar();
    }

}(cleverPlatform));