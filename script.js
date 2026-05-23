const sendMessage = document.querySelector("#send-message");
sendMessage.addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    console.log(name);
    console.log(email);
    console.log(message);
    const userDetails = "my Name:" + name + "my Email:" + email + "Message:" + message;
    const whatsappLink = "https://wa.me/255666019018?text=+userDetails";
    window.open(whatsappLink);
});