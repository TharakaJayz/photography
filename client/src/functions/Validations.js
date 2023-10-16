

export const checkEmpty = (value) => {
    console.log('value form validation function',value)
  if (value.trim() === ""  || value.trim() === null) {
    return true;
  } else {
    return false;
  }
};

export const emailValidation = (value) =>{
    if( (checkEmpty(value))){
        // return {state: false,message:"email could not be empty !"}
        return [ false,"E-mail could not be empty !"]
    }
    const emailPattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    if(!emailPattern.test(value)){
        return [ false,"This is not a valid email !"]
    }

    return [true,"this is a correct email"]

}
