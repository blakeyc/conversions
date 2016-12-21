# conversions

[![npm version](https://img.shields.io/npm/v/conversions.svg?style=flat-square)](https://www.npmjs.com/package/conversions)
[![Build Status](https://travis-ci.org/blakeyc/conversions.svg?branch=master)](https://travis-ci.org/blakeyc/conversions)
[![Coverage Status](https://coveralls.io/repos/github/blakeyc/conversions/badge.svg?branch=master)](https://coveralls.io/github/blakeyc/conversions?branch=master)
[![npm downloads](https://img.shields.io/npm/dm/conversions.svg?style=flat-square)](https://www.npmjs.com/package/conversions)

Converts many different distance measures.

## Install

`npm install --save conversions`

## Usage

`conversions(value, fromUnit, toUnit)`

### Example

```
var conversions = require('conversions');
conversions(1000, 'metres', 'kilometres'); // equals 1
conversions(1000, 'm', 'km'); // equals 1
```

## Supported Units

* metres
* kilometres
* feet
* miles

It is possible to pass through other unit values for each unit, for example m or metres or meters.
