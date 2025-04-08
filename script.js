let typewriter_val = 0

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}  

// Texte en fonction de l'heure du jour.
addEventListener("DOMContentLoaded", function(){
    let date = new Date()
    let hour = date.getHours()
    let title = this.document.getElementById("title")

    let tw = this.document.getElementById("typewriter")
    const text = ["Formé en auto-didacte", "Développeur passionné", "Créateur FiveM", "Étudiant en informatique"]

    function clearTyping(node, i = 0){
        let string = node.textContent
        i = node.textContent.length
        node.textContent = string.substring(0, string.length - 1)

        if(i > 0){
            setTimeout(() => clearTyping(node), getRandomInt(20, 70))
        }else{
            if( typewriter_val === text.length - 1){
                typewriter_val = 0
            }else{
                typewriter_val += 1
            }
            setTimeout(() => textTyping(node), 200)
        }
    }

    function textTyping(node, i = 0){
        let string = text[typewriter_val]
        node.textContent += string[i]

        if( i === string.length - 1) {
            setTimeout(() => clearTyping(node), 2000)
            return;
        }

        setTimeout(() => textTyping(node, i + 1), getRandomInt(70, 300))
    }

    textTyping(tw)

    if(hour < 7 || hour > 19){
        title.innerHTML = "Bonsoir, je suis <b>Jordqn</b>."
    }
})