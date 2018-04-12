List of ISO-639-2 languages
============

[![npm version](https://badge.fury.io/js/iso-639-2-english.svg)](https://badge.fury.io/js/iso-639-2-english)
[![renovate-app](https://img.shields.io/badge/renovate-app-blue.svg)](https://renovateapp.com/) 
[![Known Vulnerabilities](https://snyk.io/test/github/fabulator/iso-639-2-english/badge.svg)](https://snyk.io/test/github/fabulator/iso-639-2-english)
[![codecov](https://codecov.io/gh/fabulator/iso-639-2-english/branch/master/graph/badge.svg)](https://codecov.io/gh/fabulator/iso-639-2-english) 
[![travis](https://travis-ci.org/fabulator/iso-639-2-english.svg?branch=master)](https://travis-ci.org/fabulator/iso-639-2-english)

This library constains list of ISO-639-2 languages. It is simple object where key is code and value is english name of language. It is divited to 6 types - living, ancient, constructed, extinct, historical and other.

Source of languages is wikipedia https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes. Where was more names for languages, only the first was used. Years was scraped from names.

You can use package as npm module. Just install it:

```sh
npm install iso-639-2-english --save
```

and use it in you project:

```js
var livingISO6392 = require('iso-639-2-english').living;
console.log(livingISO6392);
```

You can also install it as bower package:
```sh
bower install iso-639-2-english
```

and use is very similar as in npm
```js
console.log(ISO6392.living);
```

It can be also used with RequireJS, CommonJS, Browserify or Webpack.

## Format
```json
{
  "aar": "Afar",
  "abk": "Abkhazian",
  "ace": "Achinese",
  "ach": "Acoli",
  "ada": "Adangme",
  "ady": "Adyghe",
  "afr": "Afrikaans",
  "ain": "Ainu",
  "aka": "Akan",
  ...
}
```
