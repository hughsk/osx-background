var $ = require('NodObjC')
  , ffi = require('NodObjC/node_modules/node-ffi')
  , path = require('path')

module.exports = {
    get: getBackground
  , set: setBackground
}

function getBackground() {
  return String($.NSWorkspace('sharedWorkspace')(
      'desktopImageURLForScreen'
    , $.NSScreen('mainScreen')
  )).replace(/^file\:\/\/localhost/i, '')
}

function setBackground(location) {
  var workspace = $.NSWorkspace('sharedWorkspace')
    , mainScreen = $.NSScreen('mainScreen')

  return !!workspace(
      'setDesktopImageURL'
    , $.NSURL('URLWithString', $('file://localhost/' + path.resolve(location)))
    , 'forScreen'
    , mainScreen
    , 'options'
    , workspace('desktopImageOptionsForScreen', mainScreen)('mutableCopy')
    , 'error'
    , ffi.Pointer.NULL
  )
}

$.framework('cocoa')
