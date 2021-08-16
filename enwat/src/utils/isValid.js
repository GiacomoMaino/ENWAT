const isValidEmail = (email) =>{
    let test = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return test.test(email);
}

const isValidPassword = (password) =>{
    let test = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    return test.test(password);
}

export {isValidEmail, isValidPassword};