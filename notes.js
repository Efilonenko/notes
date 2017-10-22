/**
* bubblesort
*/
var arr = [1, 4, 25, 13, 99];
var n = arr.length;
for (var i = 0; i < n-1; i++) {
    for (var j = 0; j < n-1-i; j++) {
        if (arr[j+1] < arr[j]) {
            var t = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = t;
        }
    }
}                

//console.log(arr);

/**
* set cookie
*/
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
};
// example
// var timeExpiresDate = new Date(new Date().getTime() + (30 * 1000));
// setCookie('cnstime', true, {expires: timeExpiresDate});