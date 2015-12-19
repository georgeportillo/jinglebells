var initialState = 6000;
var jump = 400;

jQuery.fn.rotate = function(degrees) {
$(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
             '-moz-transform' : 'rotate('+ degrees +'deg)',
             '-ms-transform' : 'rotate('+ degrees +'deg)',
             'transform' : 'rotate('+ degrees +'deg)'});
return $(this);
};


$(document).ready(function(){

var snow = {};
var snowflex = {};
var height = $( document ).height()-20;


snowflex.create  = function(){
  var flex = document.createElement('div');
    flex.innerHTML      = "&#10052;";
    flex.style.fontSize   = 4 + Math.random() * 10 + 'px';
    flex.style.top      = - 50 + Math.random() * 20 + 'px';
    flex.style.left     = Math.random() * 1500 + 'px';
    flex.style.position   = "absolute";
    flex.style.color    = "#F3F3F3";
    flex.style.opacity    = Math.random();
    document.getElementsByTagName('body')[0].appendChild(flex);
    return flex;
};


snow.snowflex = function(){
  var flex = snowflex.create();
  var x = -1 + Math.random() * 2;
  var t = setInterval(
        function(){
          flex.style.top  = parseInt(flex.style.top) +  5 + 'px';
          flex.style.left = parseInt(flex.style.left) +  x + 'px';
          if (parseInt(flex.style.top) > height) {
            clearInterval(t);
            document.getElementsByTagName('body')[0].removeChild(flex);
          }
        }, 45 + Math.random() * 20);
};

snow.storm = function(){
  var t = setInterval(
        function(){
          snow.snowflex();
        }, 300);
};

snow.storm();

    $('.icon1').delay(200).animate({ top: 0 }, {duration: 'slow',easing: 'easeOutBack'}).rotate(0);
    $('.icon2').delay(500).animate({ top: 0 }, {duration: 'slow',easing: 'easeOutBack'}).rotate(0);
    $('.icon3').delay(300).animate({ top: 0 }, {duration: 'slow',easing: 'easeOutBack'}).rotate(0);
    $('.icon4').delay(600).animate({ top: 0 }, {duration: 'slow',easing: 'easeOutBack'}).rotate(0);
    $('.icon5').delay(700).animate({ top: 0 }, {duration: 'slow',easing: 'easeOutBack'}).rotate(0);


    //Row 1
setTimeout(playChords.bind(["e1", ".icon3"]), duration(0));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));

setTimeout(playChords.bind(["e1", ".icon3"]), duration(2));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));

setTimeout(playChords.bind(["e1", ".icon3"]), duration(2));
setTimeout(playChords.bind(["g1", ".icon5"]), duration(1));
setTimeout(playChords.bind(["c1", ".icon1"]), duration(1));
setTimeout(playChords.bind(["d1", ".icon2"]),duration(1));

setTimeout(playChords.bind(["e1", ".icon3"]),duration(1));

//Row 2

setTimeout(playChords.bind(["f1", ".icon4"]), duration(3));
setTimeout(playChords.bind(["f1", ".icon4"]), duration(1));
setTimeout(playChords.bind(["f1", ".icon4"]), duration(1));
setTimeout(playChords.bind(["f1", ".icon4"]), duration(1));

setTimeout(playChords.bind(["f1", ".icon4"]), duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));

setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));
setTimeout(playChords.bind(["d1", ".icon2"]), duration(1));
setTimeout(playChords.bind(["d1", ".icon2"]), duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));

setTimeout(playChords.bind(["d1", ".icon2"]), duration(1));
setTimeout(playChords.bind(["g1", ".icon5"]), duration(2));

//Row 3
setTimeout(playChords.bind(["e1", ".icon3"]), duration(2));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));

setTimeout(playChords.bind(["e1", ".icon3"]), duration(2));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));

setTimeout(playChords.bind(["e1", ".icon3"]), duration(2));
setTimeout(playChords.bind(["g1", ".icon5"]), duration(1));
setTimeout(playChords.bind(["c1", ".icon1"]), duration(1));
setTimeout(playChords.bind(["d1", ".icon2"]), duration(1));

setTimeout(playChords.bind(["e1", ".icon3"]), duration(1));


//Row 4
setTimeout(playChords.bind(["f1", ".icon4"]),duration(2));
setTimeout(playChords.bind(["f1", ".icon4"]),duration(1));
setTimeout(playChords.bind(["f1", ".icon4"]),duration(1));
setTimeout(playChords.bind(["f1", ".icon4"]),duration(1));

setTimeout(playChords.bind(["f1", ".icon4"]),duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]),duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]),duration(1));
setTimeout(playChords.bind(["e1", ".icon3"]),duration(1));

setTimeout(playChords.bind(["g1", ".icon5"]),duration(1));
setTimeout(playChords.bind(["g1", ".icon5"]),duration(1));
setTimeout(playChords.bind(["f1", ".icon4"]),duration(1));
setTimeout(playChords.bind(["d1", ".icon2"]),duration(1));

setTimeout(playChords.bind(["c1", ".icon1"]),duration(1));

//Row 5
setTimeout(playChords.bind(["c2", ".title"]),duration(2));

});

function duration(number){
initialState = initialState+(number*jump);
    return initialState;
}

function playChords(chrods, icon){

  var chord = this[0]||chrods;
  var icon = this[1]||icon;


  var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'sounds/'+chord+'.wav');
audioElement.setAttribute('autoplay', 'autoplay');

if(icon==".title"){
  $('.title').css({opacity: 1});
  $('.icon .key, .subtitle').delay(1000).animate({opacity: 1}, 'slow');
}
else{
  $(icon).animate({top: "-=15px"},100);
  $(icon).animate({top: "0px"},100);
}


$.get();

audioElement.addEventListener("load", function() {

  audioElement.play();

}, true);

}

$(document).keydown(function(e){

  //E
  if (e.keyCode == 69) {
    playChords("e1", ".icon3");
}

//G
if (e.keyCode == 71) {
  playChords("g1", ".icon5");
}

//C
if (e.keyCode == 67) {
  playChords("c1", ".icon1");
}

//D
if (e.keyCode == 68) {
  playChords("d1", ".icon2");
}

//F
if (e.keyCode == 70) {
  playChords("f1", ".icon4");
}
});
