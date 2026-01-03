let pageurl = encodeURIComponent(window.location.href);

document.getElementById("readmore").addEventListener("click",()=>{
    document.getElementById("mmgtxt").style.maxHeight = 100+'vh';
    let whatsappurl = `https://wa.me/?text=${pageurl} Here is a guide for you to start making money online.`
    window.location.href = whatsappurl;
})
