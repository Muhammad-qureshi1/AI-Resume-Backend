// const axios = require('axios');
// ===========  Signup  ======== //
document.getElementById("signupForm").addEventListener("submit", async (e) => {
    try {
        e.preventDefault(); // page reload na hoo.

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
    
           if (!name || !email || !password) {
                return alert("Please fill all feilds");
            }
            if (password.length < 6) {
                return alert("Password length must be greater than 6");
            }
        
        const res = await axios.post("http://localhost:5000/api/signup", {
            name,
            email,
            password
        });
            
        const data = res.data;
        console.log(res);
        if (data.status === 505) {
            alert(data.message);
            return;
        }
        if (data.status === 400) {
            alert(data.message);
            return;
        }
        if (data.status === 200) {
            alert(data.message);
            window.location.href = "index.html";
        }
    }
    catch (err) {
        console.log(err);
        alert("Error in Frontend Signup script file.")
    }
})``


// =========== Login  ======== //
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    try {
        e.preventDefault(); // page reload na hoo.

        let email = document.getElementById("loginEmail").value;
        let  password = document.getElementById("loginPassword").value;

      const res =  await axios.post("/http://localhost:5000/api/login", {
           email,
           password
        });
        let data = res.data;
        console.log(res);


        if (data.status === 505) {
            alert(data.message);
            return
        }
        if (data.status === 400) {
            alert(data.message);
        }
        if(data.status === 200){
            alert(data.message);
            window.location.href = 'resume.html';
        }

    } catch (err) {
        console.log(err);
        console.log('Error in Frontend login script file');

    }
})
