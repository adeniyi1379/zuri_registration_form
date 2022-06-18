input = document.getElementsByTagName("input");

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("focus", function (e) {
    value = this.value;
    this.parentElement.style.border = "1px solid red";
    if (value.length == 0) {
        this.nextElementSibling.style.display = "inline";
      }
  });

  input[i].addEventListener("input", function (e) {
    value = this.value;
    e.preventDefault();
    if (value.length == 0) {
      this.nextElementSibling.style.display = "inline";
    } else {
      this.nextElementSibling.style.display = "none";
    }
  });


  input[i].addEventListener("blur", function (e) {
    this.parentElement.style.border = "1.5px solid gray";
    if (this.value.length !== 0) {
      this.nextElementSibling.style.display = "none";
    }
  });
}
