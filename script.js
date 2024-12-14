const container = document.getElementById("container");
const btn = document.getElementById("sides");
let sides = 0;

for (i = 0; i < 16 * 16; i++){
  const newdiv = document.createElement("div");
  newdiv.style.width = 30;
  newdiv.style.height = 30;
  newdiv.style.opacity = 0;
  newdiv.style.transition = "background-color 0.1s"
  container.appendChild(newdiv)
}

const Nodes = container.childNodes;
Nodes.forEach(node => {
  node.addEventListener("mouseover", () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    node.style.backgroundColor = `rgb(${red},${green},${blue})`;
    let opacity = parseFloat(node.style.opacity);
    if (opacity < 1) {
      node.style.opacity = opacity + 0.1;
    }
  })
})

btn.addEventListener("click", () => {
  do {
    sides = Number(prompt("give me the side length"));
  }
  while (sides > 100 || sides < 0)
  
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
  container.style.width = 30 * sides;
  for (i = 0; i < sides * sides; i++){
    const newdiv = document.createElement("div");
    newdiv.style.width = 30;
    newdiv.style.height = 30;
    newdiv.style.opacity = 0;
    newdiv.style.transition = "background-cor 0.1s"
    container.appendChild(newdiv)
  }
  Nodes.forEach(node => {
    node.addEventListener("mouseover", () => {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      node.style.backgroundColor = `rgb(${red},${green},${blue})`;
      let opacity = parseFloat(node.style.opacity);
      if (opacity < 1) {
        node.style.opacity = opacity + 0.1;
      }
    })
  })
})

