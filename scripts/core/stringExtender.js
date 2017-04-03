/**
 * Created by kliko on 4/4/16.
 */
String.prototype.contains = function(str) {
    return this.indexOf(str) !== -1;
};

String.prototype.toUpperCaseFirst = function() {
    return this[0].toUpperCase() + this.substr(1);
};