const alertDetails = document.querySelector(".alertDetails");
alertDetails.addEventListener("change", () => {
    let text = document.querySelector(".alertDetails");
    let textvalue = text.value;
    console.log(textvalue);


    localStorage.setItem("alert", textvalue);
});
