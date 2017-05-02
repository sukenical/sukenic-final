//EXAMPLE 01

var s = function ( p ) {
    var img;
    p.setup = function () {
        p.createCanvas(200, 400);
        p.background(p.img = loadImage("ian1.jpg"));
    };
    
    
    p.draw = function ( p ) {
        if (p.mouseIsPressed)
            image(p.img "ian1.jpg", 0, 0, 300, 500);
            /*p.img = loadImage("ian1.jpg");*/
        else
            image(p.img "ian2.jpg", 0, 0, 300, 500);
            /*p.img = loadImage("ian2.jpg");*/
        }
    };

    var myp5 = new p5(s, 'Arizona');
