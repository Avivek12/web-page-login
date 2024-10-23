let userDetails = document.getElementById("userDetails");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let emailAdd = document.getElementById("emailAdd");
let passwordId = document.getElementById("passwordId");
let mobileNumber = document.getElementById("mobileNumber");

let errMsgFirstName = document.getElementById("errMsgFirstName");
let errMsgLastName = document.getElementById("errMsgLastName");
let errMsgEmail = document.getElementById("errMsgEmail");
let errMsgPassword = document.getElementById("errMsgPassword");
let errMsgMobileNumber = document.getElementById("errMsgMobileNumber");



let submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function() {
    if (firstName.value === "") {
        errMsgFirstName.textContent = "Required firstName**";
        errMsgFirstName.style.color = "red";
        errMsgFirstName.style.marginLeft = "50px";

    }
    if (lastName.value === "") {
        errMsgLastName.textContent = "Required lasttName**";
        errMsgLastName.style.color = "red";
        errMsgLastName.style.marginLeft = "50px";

    }
    if (emailAdd.value === "") {
        errMsgEmail.textContent = "Required email**";
        errMsgEmail.style.color = "red";
        errMsgEmail.style.marginLeft = "50px";

    }
    if (passwordId.value === "") {
        errMsgPassword.textContent = "Required password**";
        errMsgPassword.style.color = "red";
        errMsgPassword.style.marginLeft = "50px";

    }

    if (mobileNumber.value === "") {
        errMsgMobileNumber.textContent = "Required Mobile Number**";
        errMsgMobileNumber.style.color = "red";
        errMsgMobileNumber.style.marginLeft = "50px";

    }

    if (firstName.value && lastName.value && emailAdd.value && passwordId.value && mobileNumber.value !== "") {

        errMsgFirstName.textContent = "";
        errMsgLastName.textContent = "";
        errMsgEmail.textContent = "";
        errMsgPassword.textContent = "";
        errMsgMobileNumber.textContent = "";

        userDetails.style.backgroundColor = "dodgerblue";
        userDetails.style.marginTop = "20px";


        let heading = document.createElement("h1");
        heading.textContent = "The User Input Data is Here...";
        heading.style.textAlign = "center";
        heading.style.color = "pink";
        heading.style.fontWeight = "bold";
        heading.style.paddingBottom = "10px";
        userDetails.appendChild(heading);

        let hr = document.createElement("hr");
        hr.classList.add("horizontal-line");
        userDetails.appendChild(hr);

        let fname = document.createElement("p");
        fname.textContent = "First_Name:  " + firstName.value;
        fname.style.color = "white";
        fname.style.fontSize = "20px";
        userDetails.appendChild(fname);

        let lName = document.createElement("p");
        lName.textContent = "Last_Name:  " + lastName.value;
        lName.style.color = "white";
        lName.style.fontSize = "20px";
        userDetails.appendChild(lName);


        let email = document.createElement("p");
        email.textContent = "email_Id:  " + emailAdd.value;
        email.style.color = "white";
        email.style.fontSize = "20px";
        userDetails.appendChild(email);

        let password = document.createElement("p");
        password.textContent = "Password:  " + passwordId.value;
        password.style.color = "white";
        password.style.fontSize = "20px";
        userDetails.appendChild(password);

        let mobileNumber1 = document.createElement("p");
        mobileNumber1.textContent = "Mobile_Number:  " + mobileNumber.value;
        mobileNumber1.style.color = "white";
        mobileNumber1.style.fontSize = "20px";
        userDetails.appendChild(mobileNumber1);


        let hr1 = document.createElement("hr");
        hr1.classList.add("horizontal-line");
        userDetails.appendChild(hr1);



    }
}