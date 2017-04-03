/**
 * Created by kliko on 26.04.15.
 */
var movieShop = movieShop || {};

movieShop._menuController = (function () {
    function MenuController () {
        this.data  = movieShop.Database._db.menu;
        this.dataArr = [];
    }

    MenuController.prototype.getMenuTabs = function (lang) {
        var menuSelector = '#menu';
        $(menuSelector).empty();
        if(this.dataArr.length < 3) {
            this.addTab(this.data.home);
            this.addTab(this.data.catalog);
            this.addTab(this.data.contacts);
        }
        movieShop.view.rendMenuTabs(menuSelector, this.dataArr, lang);
        movieShop.view.rendDropDown('#catalog', this.data.catalog, lang);
    };

    MenuController.prototype.addTab = function (tabObj) {
        this.dataArr.push(tabObj);
    };

    MenuController.prototype.getHomePage = function (selector, lang) {
        movieShop.view.rendHomePage(selector, this.data.home, lang);
    };

    MenuController.prototype.getCatalogPage = function (selector, lang) {
        movieShop.view.rendCatalogPage(selector, lang);
    };

    MenuController.prototype.getContactPage = function (selector, lang) {
        movieShop.view.rendContactPage(selector, this.data.contacts, lang);
    };

    return {
        load: function () {
            return new MenuController();
        }
    }
}());