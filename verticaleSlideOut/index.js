var i=0;
function expand() {
var toggle = document.getElementById('toggle');
var menu = document.getElementById('menu');
var arrow = document.getElementById('arrow');

    if (i==0) {
    arrow.style.transform = 'rotate(-180deg)';
    menu.style.left="0";
    i=1;
    }
    else
    {
    arrow.style.transform = 'rotate(715deg)';
    menu.style.left="-100px";
    i=0;
    }
}