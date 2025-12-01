function fun(){

    window.location.href="index.html";
    const uname = document.getElementById("uname"); 
    const pass = document.getElementById("pass"); 

}
const uname = document.getElementById("uname"); 
document.getElementById("uname").addEventListener('input', () => { 
 
    let username = uname.value; 
    let flag = 0; 
 
    for (let i = 0; i < username.length; i++) { 
 
        if (username[i] >= 'A' && username[i] <= 'Z') { 
            continue; 
        } else if (username[i] >= 'a' && username[i] <= 'z') { 
            continue; 
        } else if (username[i] >= '0' && username[i] <= '9') { 
            continue; 
        } else { 
            flag = 1; 
            break; 
        } 
 
    } 
 
    if (flag == 1) { 
 
        document.getElementById("euname").innerHTML = "Usename don't contain any Special Character"; 
        document.getElementById("euname").style.color = 'red'; 
        event.preventDefault(); 
 
    } else if (username.length === 0) { 
        document.getElementById("euname").innerHTML = ""; 
        document.getElementById("euname").style.color = ""; 
    } 
    else { 
        document.getElementById("euname").innerHTML = " "; 
    } 
 
}); 

document.getElementById("login-form").addEventListener('submit', (event) => { 
    if (document.getElementById("uname").value === "") { 
        document.getElementById("euname").innerHTML = "Username Required"; 
        document.getElementById("euname").style.color = 'red'; 
    } 
}) 







const pass = document.getElementById("pass"); 

document.getElementById("pass").addEventListener('input', () => { 
 
    password = pass.value; 
 
    let uppercase = false; 
    let lowercase = false; 
    let number = false; 
    let special = false; 
 
    for (let i = 0; i < password.length; i++) { 
 
        if (password[i] >= 'A' && password[i] <= 'Z') { 
            uppercase = true; 
        } else if (password[i] >= 'a' && password[i] <= 'z') { 
            lowercase = true; 
        } else if (password[i] >= '0' && password[i] <= '9') { 
            number = true; 
        } else { 
            special = true; 
        } 
    } 
    if (password.length === 0) { 
        document.getElementById("epass").innerHTML = " "; 
    } else if (!uppercase) { 
        document.getElementById("epass").innerHTML = "At least one upper case letter"; 
        document.getElementById("epass").style.color = 'red'; 
        event.preventDefault(); 
    } else if (!lowercase) { 
        document.getElementById("epass").innerHTML = "At least one Lower case letter"; 
        document.getElementById("epass").style.color = 'red'; 
    } else if (!number) { 
        document.getElementById("epass").innerHTML = "At least one number"; 
        document.getElementById("epass").style.color = 'red'; 
    } else if (!special) { 
        document.getElementById("epass").innerHTML = "At least one Special Character"; 
        document.getElementById("epass").style.color = 'red'; 
    } else if (password.length < 6) { 
        document.getElementById("epass").innerHTML = "Password Length must be 6 length"; 
        document.getElementById("epass").style.color = 'red'; 
    } 
    else { 
        document.getElementById("epass").innerHTML = "Done"; 
        document.getElementById("epass").style.color = "green"; 
    } 
}); 