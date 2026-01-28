fetch('data/games.json')
    .then((response) => response.json())
    .then((data) => {
        const container = document.getElementById("games-container")

        function customiseLink(game, link){
            link.href = game.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.className = "game";
            link.style.backgroundImage = game.background ? "url(" + game.background + ")" : "none";
            link.textContent = game.name;
        }

        data.forEach(game => {
            var link = document.createElement("a");
            customiseLink(game, link)
            container.appendChild(link);
        });
 });

