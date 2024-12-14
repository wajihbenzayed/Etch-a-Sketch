const container = document.getElementById("container");
const btn = document.getElementById("sides");
let sides = 0;

for (i = 0; i < 16 * 16; i++){
  const newdiv = document.createElement("div");
  newdiv.style.width = 20;
  newdiv.style.height = 20;
  newdiv.style.transition = "background-color 0.1s"
  container.appendChild(newdiv)
}

const Nodes = container.childNodes;
Nodes.forEach(node => {
  node.addEventListener("mouseover", () => {
    node.style.backgroundColor = "red"
  })
  node.addEventListener("mouseleave", () => {
    node.style.backgroundColor = "white"
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
  container.style.width = 20 * sides;
  for (i = 0; i < sides * sides; i++){
    const newdiv = document.createElement("div");
    newdiv.style.width = 20;
    newdiv.style.height = 20;
    newdiv.style.transition = "background-color 0.1s"
    container.appendChild(newdiv)
  }
  Nodes.forEach(node => {
    node.addEventListener("mouseover", () => {
      node.style.backgroundColor = "red"
    })
    node.addEventListener("mouseleave", () => {
      node.style.backgroundColor = "white"
    })
  })
})

