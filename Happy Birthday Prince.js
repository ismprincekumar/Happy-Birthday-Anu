window.onload = () =>{
     alert("Touch Anywhere To Play The Music");
  
    let text = document.getElementsByClassName("wish")[0];
    
    aakuWriter(text, "🎉🎂 Happy Birthday, My Anushka 💖😚

तुम्हारे बिना मेरी ज़िंदगी कुछ ऐसी होती जैसे बिना चाय के बिस्किट 🍪, बिना नमक के नमकीन 😅 और बिना Google के इंटरनेट 😵‍💫

तुम्हारी हँसी मेरी जान है, और आज तो तुम्हारी वो मुस्कान देखनी है जो दिल को direct गुलाबी कर देती है 😍💞

बस आज के दिन कोई टेंशन नहीं, सिर्फ मस्ती, केक, और मेरी जान Anushka की हँसी होनी चाहिए 😘
और हाँ! याद रखना – तुम्हारी उम्र तो बढ़ रही है, लेकिन तुम हर साल और ज़्यादा क्यूट लगने लगती हो... कोई trick है क्या? 😂💁‍♀️

**I love you, Kutiya 💖 उम्माह 😘😘😘**
तेरे बिना सब अधूरा है... तू है तो सब कुछ पूरा है 🥺💕");
    
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

