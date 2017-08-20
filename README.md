# grow.js
This is a javascript plugin to have the ability for a textarea to automatically grow and shrink dynamically with its content.

# Getting started

### Installation

#### Quick Start with GIT with [Documentation](https://github.com/RidwanulHafiz/vue-google-autocomplete-ridwan)
```
git clone https://github.com/RidwanulHafiz/vue-google-autocomplete-ridwan.git
```


#### Quick Start with NPM
* Install with [NPM](https://www.npmjs.com/package/vue-google-autocomplete-ridwan) ```npm install vue-google-autocomplete-ridwan```
* [Get an API Key from the Google API Console](https://developers.google.com/maps/documentation/javascript/get-api-key)
* Include Google location script with Google API key

```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY=places"></script>
```

### Usage

HTML component
```
<input type=text data-name="autocomplete"/>
```

Import package into component
```
import location from 'google-autocomplete-ridwan'
```


Then call it anywhere you need
```
location.AutoComplete();
```
