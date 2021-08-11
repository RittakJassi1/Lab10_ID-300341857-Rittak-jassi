var id = null; 
var pos = 0;
function runPuppy() {                
    const puppy = document.getElementById("puppy");
    puppy.style.visibility = "visible";
    puppy.style.position = "absolute";
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos >= screen.availWidth) {
            clearInterval(id);
      } else {
        pos++;
        puppy.style.bottom.trimRight= pos + "px"; 
        puppy.style.left = pos + "px"; 
      }
    }			
}
