const menu = document.getElementById('menu')

let counter = 0

let prevScrollpos = scrollY;

window.onscroll = function() {

    if(scrollY == 0)
    menu.classList.remove('menu__hide')

    if (prevScrollpos > scrollY) {
        counter++;
        
        if(counter > 20) 
        menu.classList.remove('menu__hide')
        
    } else {
        counter = 0
        menu.classList.add('menu__hide')
    }
    prevScrollpos = scrollY;  
    

}











