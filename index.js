document.addEventListener("DOMContentLoaded",  () => {
  let displayName = document.getElementById("name");
  let details = document.getElementById("details");

  const displayEls = () => {
    let name = document.getElementsByClassName("field-item")[0].value;
    let city = document.getElementById("city").value ;
    let country = document.getElementById("country").value;
    let phone = document.getElementById("phone").value;
    let website = document.getElementById("website").value;
    displayName.innerHTML = name;
    details.innerHTML = `${city}, ${country} | ${phone} | <a href="${website}">${website}</a>`; 
  }


    const btn = document.getElementById("btn");
    btn.addEventListener("click", displayEls);
});