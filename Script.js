document.getElementById("hamburger").onclick = function toggleMenu() {
    const sectionToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < sectionToggle.length; i++) {
      sectionToggle.item(i).classList.toggle("hidden");
    }
  };