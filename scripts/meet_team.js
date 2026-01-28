fetch('data/team.json')
    .then((response) => response.json())
    .then((data) => {
        const container = document.getElementById("team")

        const knownBrands = ["linkedin", "github", "youtube"];

        function createLink({type, url}) {
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.title = type;
            a.setAttribute("aria-label", type);

            let iconName = type.toLowerCase();

            if (!knownBrands.includes(iconName)) {
                iconName = "globe";
            }

            const i = document.createElement("i");
            i.classList.add("fa", `fa-${iconName}`);

            a.appendChild(i);

            const li = document.createElement("li");
            li.appendChild(a);
            return li;
        }


        data.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card"); // CSS class "card"

            const nameElement = document.createElement("h2");
            nameElement.textContent = member.name;

            const roleElement = document.createElement("h3");
            roleElement.textContent = member.role;

            const imgElement = document.createElement("img");
            imgElement.src = member.photo;

            const linksList = document.createElement("ul");
            member.links.forEach(link => linksList.appendChild(createLink(link)));

            const description = document.createElement("p");
            description.textContent = member.description;
           
            card.append(imgElement, nameElement, roleElement, linksList, description);
            container.appendChild(card);
        });
 });

