function kill_space(){
    if(window.innerWidth <= 768)
    {
        document.getElementById('espace').classList.remove('icon_3');
        document.getElementById('espace').classList.add('icon_1');
    }
    else
    {
        document.getElementById('espace').classList.remove('icon_1');
        document.getElementById('espace').classList.add('icon_3');
    }
}

kill_space()

window.addEventListener('resize', kill_space)