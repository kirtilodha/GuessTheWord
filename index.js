var buttons=document.querySelectorAll(".buttons");
var values;


for(var button=0;button<buttons.length;button++){
    buttons[button].addEventListener("click", function(){
        values = this.value;
        console.log(values);
    })
}
