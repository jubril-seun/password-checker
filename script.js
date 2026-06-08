/* PSEUDOCODE
Prompt that asks for password
Check if the password meets the minimum length
    return true if it does, false if otherwise
Check if the password has at least one uppercase letter
    return true if it does
Check if the password contains at least one digit (0 - 9)
    return true if it does
Print the results of all three checks and a strength rating 
    fewer than 2 checks pass: weak
    exactly 2 checks pass: medium
    all 3 checks pass: strong
*/


const MIN_LENGTH = 18;

function createPassword(){
    let password = prompt("Please create a new password:", "New Password");
    return password;
    // return "Paaassword";
}

// console.log(createPassword());

function hasMinLength(password, minLength){  
    if (password.length >= minLength){
       return true;
    } else {
        return false;
    }
}

// console.log(hasMinLength(createPassword(), 12));

function hasUpperCase(password) {
    for (let i = 0; i < password.length; i++){
       let char = password[i];

        if (char === char.toUpperCase() && char.toUpperCase() !== char.toLowerCase()){
            return true;
        } 
    }
    return false;
}

// console.log(hasUpperCase(createPassword()));

function hasNumber(password){
    for (let i = 0; i < password.length; i++){
        let char = password[i];

        if (char >= "0" && char <= "9") {
            return true;
        }
    }
   return false;
}

// console.log(hasNumber(createPassword()));

function getStrength(password){
    let strength = 0;

    if (hasMinLength(password, MIN_LENGTH)){
        strength++;
    }

    if (hasUpperCase(password)){
        strength++;
    }
    
    if (hasNumber(password)){
        strength++;
    }

    if (strength < 2){
        return "weak";
    } else if (strength === 2) {
        return "medium";
    } else {
        return "strong";
    }
}

// console.log(getStrength());

function checkPassword(password) {
   let pass = password;
    
    console.log("Password: " + pass);
    console.log("Strength: " + getStrength(pass));
    console.log("✓ Min length " + "(" + MIN_LENGTH + "): " + hasMinLength(pass,MIN_LENGTH));
    console.log("✓ Has uppercase: " + hasUpperCase(pass));
    console.log("✓ Has number: " + hasNumber(pass));
}

checkPassword(createPassword());