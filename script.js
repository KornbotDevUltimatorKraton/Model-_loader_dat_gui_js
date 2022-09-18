var settings = {
  message: "dat.GUI",
  checkbox: true,
  colorA: '#FF00B4', 
  colorB: '#22CBFF', 
  step5: 10,
  range: 50,
  options:"Option 1",
  speed:0,
  func: function() 
  { 
      console.log(this.range);
  },
  justgooddesign: function() 
  { 
    window.location = "https://www.justgooddesign.com";
  },
  field1: "Field 1",
  field2: "Field 2",
  color0: "#ffae23", // CSS string
  color1: [ 0, 128, 255 ], // RGB array
  color2: [ 0, 128, 255, 0.3 ], // RGB with alpha
  color3: { h: 350, s: 0.9, v: 0.3 } // Hue, saturation, value
};


var gui = new dat.GUI(); 
gui.add(settings, 'message').onChange(function (value) {

});  
gui.add(settings, 'step5', 0, 255).step(5); 
gui.add(settings, 'checkbox').onChange(function (value) {

}); 
gui.add(settings, 'range', 1, 100).onChange(function (value) {

});
gui.add(settings, 'options', [ 'Option 1', 'Option 2', 'Option 3' ] );
gui.add(settings, 'speed', { Low: 0, Med: 0.5, High: 1 } );
gui.addColor(settings, 'colorA').onChange(function (value) {

});
gui.addColor(settings, 'colorB').onChange(function (value) {

});
gui.add(settings, 'func');
gui.open();

var f1 = gui.addFolder('Fields');
f1.add(settings, 'field1');
f1.add(settings, 'field2');
f1.close();

var f2 = gui.addFolder('Colors');
f2.addColor(settings, 'color0');
f2.addColor(settings, 'color1');
f2.addColor(settings, 'color2');
f2.addColor(settings, 'color3');
f2.close();

var f3 = gui.addFolder('Just Good Design'); 
f3.add(settings, 'justgooddesign');
f3.close();

// update display outside of gui
// http://workshop.chromeexperiments.com/examples/gui/#10--Updating-the-Display-Manually





