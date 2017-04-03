/**
 * Created by kliko on 3.4.2017 г..
 */
var cleverPlatform = cleverPlatform || {};

(function (scope) {
    function Test() {
        console.log(exports);
    }

    scope.getTest = () => {
        return new Test();
    };
}(cleverPlatform));