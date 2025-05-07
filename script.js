function changeText() {
    const textElement = document.getElementById("dynamicText");
    textElement.textContent = "The text has been changed!";
  }
  
  function changeStyle() {
    const textElement = document.getElementById("dynamicText");
    textElement.style.color = "red";
    textElement.style.fontWeight = "bold";
  }
  
  function toggleElement() {
    const existing = document.getElementById("newItem");
    if (existing) {
      existing.remove();
    } else {
      const newElement = document.createElement("p");
      newElement.id = "newItem";
      newElement.textContent = "This paragraph was added";
      document.body.appendChild(newElement);
    }
  }
  