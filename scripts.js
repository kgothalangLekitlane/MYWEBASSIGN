
document.getElementById("changeTextBtn").addEventListener("click", function() {
    let header = document.getElementById('header-text');
    let content = document.getElementById('content');

    
    header.textContent = "Updated Interactive Webpage";

   
    header.style.color = "#ff4d4d";
    content.style.backgroundColor = "#e0f7fa";
    content.style.fontWeight = "bold";
});


document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let existingElement = document.getElementById("dynamic-element");

    if (existingElement) {
        existingElement.remove(); 
    } else {
        let newElement = document.createElement("p");
        newElement.id = "dynamic-element";
        newElement.className = "new-element";
        newElement.textContent = "This is a newly added dynamic element!";
        document.querySelector(".container").appendChild(newElement);
    }
});
