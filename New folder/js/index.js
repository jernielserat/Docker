document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.querySelector("button[type='submit']");

    registerBtn.addEventListener("click", function (event) {
        event.preventDefault();

        
        const firstName = document.getElementById("Firstname").value.trim();
        const middleName = document.getElementById("Middlename").value.trim();
        const lastName = document.getElementById("Lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("number").value.trim();
        const batch = document.getElementById("Batch").value.trim();
        const id = document.getElementById("ID").value.trim();
        const course = document.querySelector("select[name='Course']").value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        } 

        
        if (!firstName || !lastName || !email || !contact || !batch || !id || !course) {
            alert("Please fill in all required fields.");
            return;
        }


        if (contact.length !== 11 || isNaN(contact)) {
            alert("Contact number must be 11 digits.");
            return;
        }

        if (batch.length > 2 || isNaN(batch)) {
            alert("Batch must be a number with a maximum of 2 digits.");
            return;
        }
        
        console.log("Registration Successful!");
        console.log({
            firstName,
            middleName,
            lastName,
            email,
            contact,
            batch,
            id,
            course
        });

        alert("Registration Successful!");
    });
});
