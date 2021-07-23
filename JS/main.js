function changeColor() {
  var color = document.getElementById("color").value;
  color = "#" + color;

  var color2 = document.getElementById("color").value;

  if (/^#[0-9A-F]{6}$/i.test(color)) {
    document.querySelector("body").style.backgroundColor = color;

    document.getElementById("eror").innerText = "";
  } else if (/^#[0-9A-F]{6}$/i.test(color2)) {
    document.querySelector("body").style.backgroundColor = color2;

  } else if (/^#[0-9A-F]{3}$/i.test(color)) {
    document.querySelector("body").style.backgroundColor = color;
    
  } else if (/^#[0-9A-F]{3}$/i.test(color2)) {
    document.querySelector("body").style.backgroundColor = color2;
  } else {
    document.getElementById("error").innerText =
      "please insert code HexaDecimal";
  }
}
document.getElementById("change-color").addEventListener("click", changeColor);
