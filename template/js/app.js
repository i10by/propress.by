/** BASIC CODE **/
var $ = function(sl) {

};

var ObjectCollection = {

};




find: function(selector) {
    if(typeof selector !== 'string')
        return false;

    var nl = document.querySelectorAll(selector),
        arr = [];

    for(var i = nl.length; i--; arr.unshift(nl[i]));

    return arr;
},

getWidth: function(object) {
    return object.offsetWidth;
},

addEvent: function(object, event, callback) {
    object.addEventListener(event, callback);
}

/** POPUP WINDOWS **/
// var wndArr = $.find('popup-wnd');

var a = "gggg"
