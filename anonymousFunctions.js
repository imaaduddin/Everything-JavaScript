// anonymous function = function w/o a name. often not accessible after its initial creation.

// benefits = does not clutter global namespace, usable once, can be passed as arguments 

// IIFE = a JS function that runs as soon as it is defined 
// grouping operator = ()

(function(){
  document.getElementById("myH1").innerHTML = "hey!";
})();

// setTimeout(function, milliseconds);

let task = function(){document.getElementById("myH1").innerHTML = "Hi!";}

setTimeout(task, 1000)