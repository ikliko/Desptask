/**
 * Created by kliko on 26.04.15.
 */
var movieShop = movieShop || {};

movieShop.controller = (function () {
    function Controller() {
        this._menuController = movieShop._menuController.load();
        this._catalogController = movieShop._catalogController.load();
    }

    return {
        load: function () {
            return new Controller();
        }
    }
}());