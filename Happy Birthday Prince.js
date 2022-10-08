window.onload = () =>{
     alert("Touch Anywhere To Play The Music");
  
    let text = document.getElementsByClassName("wish")[0];
    
    aakuWriter(text, "Happy Wala Birthday Prince, Thank you soo much for being my loveliest Friend. You have tought me many things. I missed you so much. Happy birthday to my dearest one.");
    
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
