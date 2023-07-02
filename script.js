function addBurger() {
    var burgerName = prompt("ბურგერის სახელი:");
    if (burgerName !== null && burgerName.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = burgerName;
      document.getElementById("burger-list").appendChild(li);
  
      // გასუფთავებს ინფუთს
      document.getElementById("burger-input").value = "";
    }
  }
  