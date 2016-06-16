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
  constructor: function(w, h) {
    this.w = w;
    this.h = h;

    this._super();
  },

  move: function(x, y) {
    this._super(x, y);
    console.info('Rectangle moved.');
  },

  area: function() {
    console.log('Area is', this.w * this.h);
  },

  echo: function() {
    console.log('I am Rectangle.');
  }
});

// Square
var Square = Rectangle.extend({
  constructor: function(w) {
    this._super(w, w);
  },

  echo: function() {
    console.log('I am Square.');
  }
});

var rect = new Rectangle(2, 4);
var square = new Square(4);

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// true
console.log('Is rect an instance of Square?', rect instanceof Square);// false
rect.echo(); // Outputs, 'I am Rectange.'
rect.move(1, 1); // Outputs, 'Shape moved. Rectangle moved.'
rect.area(); // Outputs, 'Area is 8'

console.log('Is square an instance of Square?', square instanceof Square);// true
console.log('Is square an instance of Rectangle?', square instanceof Rectangle);// true
console.log('Is square an instance of Shape?', square instanceof Shape);// true
square.echo(); // Outputs, 'I am Square.'
square.area(); // Outputs, 'Area is 16'

```

## API

`Class.extend(proto)`

### proto

Define Function prototype, especially `proto.constructor` is Function constructor
