const validateEmail = (email) => {
    //Check if the email is valid and has 3 characters after the @ and 5 after
    if(email === "") return {status: false, message: "Missing field"}

    if(!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(email) || 
    email.substring(0,email.indexOf("@")).length < 3 ||
    email.substring(email.indexOf("@") + 1,email.length).length < 5) return {status: false, message: "Invalid Email"}
    
    return {status: true}
}

const validatePassword = (password) => {
    //Check if the input is not empty and is a string
    if(password === "") return {status: false, message: "Missing field"}

    if(password.length < 6) return {status: false, message: "Minimum password is 6 characters"}

    return {status: true}
}

export {validateEmail, validatePassword};