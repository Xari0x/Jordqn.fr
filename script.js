// Texte en fonction de l'heure du jour.
addEventListener("DOMContentLoaded", function(){
    let date = new Date()
    let hour = date.getHours()
    let title = this.document.getElementById("title")

    if(hour < 7 || hour > 19){
        title.innerHTML = "Bonsoir, je suis <b>Jordqn</b>."
    }
})