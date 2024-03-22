document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    fetch("send_email.php", {
        method: "POST",
        headers : {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body : "subjet=" + encodeURIComponent(nom) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById("contactFrom").reset();
    })
    .catch(error => console.error("Erreur : ",error));
    
});


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

window.addEventListener('resize', kill_space);