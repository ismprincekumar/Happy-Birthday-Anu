window.onload = () =>{
     alert("Touch Anywhere To Play The Music");
  
    let text = document.getElementsByClassName("wish")[0];
    
    aakuWriter(text, "hfhfyhfy");
    
};

function aakuWriter(target, msg) {
    let i=0,
        id = setInterval(() => {
        
        target.append(msg[i++]);
        if (i >= msg.length) {
            clearInterval(id);         
        }
    }, 70);
}


window.addEventListener('click', () => {
    
    document.getElementById("song").play();
    
});


