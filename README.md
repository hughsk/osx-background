# osx-background #

A Node module for getting and setting your desktop background image
programmatically on your Mac!

Uses
[NodObjC](http://npmjs.org/package/NodObjC) and
[node-ffi](http://npmjs.org/package/node-ffi) under the hood, and should
work on OSX 10.6 and above.

## Installation ##

``` bash
npm install osx-background
```

## Usage ##

#### `require('osx-background').get()` ####

Returns the absolute path to the current desktop background image.

#### `require('osx-background').set(filename)` ####

Sets the background image to the chosen `filename` - returns `true` if
successful, and `false` if it fails... I'm not very familiar with Objective-C,
and I'm not quite sure how to check the error - pull requests are welcome if
you feel it's important.
