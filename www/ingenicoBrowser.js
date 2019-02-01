// Empty constructor
function IngenicoBrowser() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
IngenicoBrowser.prototype.open = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
}

// Installation constructor that binds IngenicoBrowser to window
IngenicoBrowser.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.ingenicoBrowser = new IngenicoBrowser();
  return window.plugins.ingenicoBrowser;
};
cordova.addConstructor(IngenicoBrowser.install);