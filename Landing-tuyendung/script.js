function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current + "+";
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}



function startNumber(){
  animateValue("product4", 0, 13, 3000);
  animateValue("product5", 0, 150, 3000);
  animateValue("product6", 0, 15, 3000);
  animateValue("product7", 0, 35, 3000);
  animateValue("product8", 1500, 2000, 3000);
  animateValue("product1", 2000, 5000, 5000);
animateValue("product2", 2000, 5000, 500);
animateValue("product3", 6000, 10000, 500);
}

