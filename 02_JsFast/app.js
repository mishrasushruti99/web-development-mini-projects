(function(){
  var utime = new Date().getTime();
  var shape = document.getElementById("shape");
  
  function getColor(){
    let letters = "0123456789ABCDEF".split('');
    let color = "#";
    for(let i = 0; i < 6; i++){
      let jdx = Math.floor(Math.random() * 16);
      color += letters[jdx];
    }
    return color;
  }
  
  function genShape(){
    let top = Math.random() * 220 + 200;
    let left = Math.random() * 400;
    let width = (Math.random() * 200) + 100;
    
    if (Math.random() > 0.5) {
      shape.style.borderRadius = "50%";
    } 
    else {
      shape.style.borderRadius = "0"; 
    }
    
    shape.style.backgroundColor = getColor();
    shape.style.width = width + "px";
    shape.style.height = width + "px";
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.display = "block";
    
    utime = new Date().getTime();
  }
  
  function appearAfterDelay() {
    setTimeout(genShape, Math.random() * 2000);  
  }
  
  shape.onclick = function(){
    shape.style.display = "none";
    var etime = new Date().getTime();
    var ctime = (etime - utime) / 1000;
    document.getElementById("time-taken").innerHTML = ctime + "s";
    appearAfterDelay();
  };
  
  appearAfterDelay();
  
}())