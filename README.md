# es5-class

Use Class-likely in `es5` Inspired by `http://ejohn.org/blog/simple-javascript-inheritance/`

## Install

**Node.js 4 or higher**

    $ npm install es5-class-ployfill --save

## Usage

```js
var Class = require('es5-class-ployfill');

// Shape
var Shape = Class.extend({
  constructor: function() {
    this.x = 0;
    this.y = 0;
  },

  move: function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  },

  echo: function() {
    console.log('I am Shape.');
  }
});

// Rectangle
var Rectangle = Shape.extend({
  move: function(x, y) {
    this._super(x, y);
    console.info('Rectangle moved.');
  },

  echo: function() {
    console.log('I am Rectange.');
  }
});

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// true
rect.echo(); // Outputs, 'I am Rectange.'
rect.move(1, 1); // Outputs, 'Shape moved. Rectangle moved.'
```

## API

`Class.extend(proto)`

### proto

Define Function prototype, especially `proto.constructor` is Function constructor
