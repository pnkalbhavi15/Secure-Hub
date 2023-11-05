const password = document.querySelector(".password");
localStorage.clear();

password.addEventListener("change", () => {
    let text = document.querySelector(".password");
    let textvalue = text.value;

    localStorage.setItem("value", textvalue);

    document.querySelector(".setpassword").classList.toggle("active");


    const valueoftext = localStorage.getItem("value");
console.log(valueoftext);


const checkpass = document.querySelector(".checkpass");
checkpass.addEventListener("change", () => {
    let textdata = document.querySelector(".checkpass");
    let textdatavalue = textdata.value;


    if(textdatavalue == valueoftext){
        console.log("Parental Control turned off");
        document.querySelector(".display").classList.toggle("activate");
        document.querySelector(".setpassword").classList.toggle("active");
    }

})

})

