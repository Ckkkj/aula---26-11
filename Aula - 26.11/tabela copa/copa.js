function createGame (player1, hour, player2) {
    return `
        <li>
            <img src="/.assets/icon-$(player1).svg" alt "bandeira do $(player1)"/>
            <strong>$(hour)</strong
            <img src="/.assets/icon-$(player2).svg" alt "bandeira do $(player2)"/> 
        `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay=delay +0.4;
    return `
        <div class="card" style="animation-delay: $(delay)s">
        
    `
}

document.querySelector("#cards").innerHTML =
createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))
createCard("28/11", "segunda", createGame("switzerland", "13:00", "brazil"))
createCard("28/11", "segunda", createGame("portugal", "16:00", "uruguai"))
createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
createCard("09/11", "quinta", createGame("coreia", "16:00", "brazil"))