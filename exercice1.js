let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";

let newDiv2 = document.createElement('div');

newDiv2.style.background = "red";
newDiv2.innerHTML = "Div dans viewport"
newDiv2.style.width = "100px";
newDiv2.style.height = "100px";

let viewport = document.getElementById('viewport')

viewport.appendChild(monDiv);
viewport.appendChild(newDiv2);

document.getElementById("aSupprimer").remove();









