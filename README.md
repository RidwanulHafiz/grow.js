# grow.js
This is a javascript plugin to have the ability for a textarea to automatically grow and shrink dynamically with its content.

# Getting started

### Installation

##### Quick Start with GIT with [Documentation](https://github.com/RidwanulHafiz/grow.js)
```
git clone https://github.com/RidwanulHafiz/grow.js.git
```


##### Quick Start with NPM
* Install with [NPM](https://www.npmjs.com/package/textarea-auto-grow-ridwan) ```npm install textarea-auto-grow-ridwan```


### Usage

HTML component
```
<textarea data-grow="auto"></textarea>
```

Import ```grow.js``` inside ```</head>``` section
```
<script src="/path/grow.js"></script>
```


Then call it when document is ready. It will automatically call with 
default options when document is ready. 
if you want to call it with custom option then call it after document ready.
```
document.addEventListener('DOMContentLoaded', function(){
        var option = {
            height : 100,
            maxHeight : 500
        };
        AutoGrow.init(option);
    }, false);
```

### Usage in Vue JS 2
HTML component
```
<textarea data-grow="auto"></textarea>
```

Import package into component
```
import grow from 'textarea-auto-grow-ridwan'
```


Then call it when component is ready.
```
var option = {
    height : 100,
    maxHeight : 500
};
grow.init(option);
```