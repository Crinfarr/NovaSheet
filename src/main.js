const classElements = Array.from(document.getElementsByClassName("ClassDependent"));
document.getElementById('class').addEventListener('change', (e) => {
    switch(e.target.value) {
        case "Pyre":
            classElements.forEach(e => {
                e.style.border = "2px solid #bd361a";
                e.style.color = "#bd361a";
            });
            break;
        case "Scorch":
            classElements.forEach(e => {
                e.style.border = "2px solid #624386";
                e.style.color = "#624386";
            });
            break;
        case "Voyager":
            classElements.forEach(e => {
                e.style.border = "2px solid #2a8aa1";
                e.style.color = "#2a8aa1";
            });
            break;
        case "Warden":
            classElements.forEach(e => {
                e.style.border = "2px solid #f7b62b";
                e.style.color = "#f7b62b";
            });
            break;
        case "Pox":
            classElements.forEach(e => {
                e.style.border = "2px solid #2eac1d";
                e.style.color = "#2eac1d";
            });
            break;
        case "Grim":
            classElements.forEach(e => {
                e.style.border = "2px solid #51fffe";
                e.style.color = "#51fffe";
            });
            break;
        case "Drifter":
            classElements.forEach(e => {
                e.style.border = "2px solid #67251e";
                e.style.color = "#67251e";
            });
            break;
        case "Sanguine":
            classElements.forEach(e => {
                e.style.border = "2px solid #cc100d";
                e.style.color = "#cc100d";
            });
            break;
        case "Infernal":
            classElements.forEach(e => {
                e.style.border = "2px solid #710f5a";
                e.style.color = "#710f5a";
            });
            break;
        default:
            classElements.forEach(e => {
                e.style.border = "2px solid var(--purple)";
                e.style.color = "var(--purple)";
            });
            break;
    }
});