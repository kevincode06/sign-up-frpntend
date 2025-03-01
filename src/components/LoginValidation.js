function Validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    if (!values.email === "") {
      errors.email = "Name should not be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email Does not match";
    }else{
      errors.email = "";
    }
  
    if (!values.password === "") {
      errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password Does not match";
    }else{
      errors.password = ""; 
    }
  
    return errors;
  }     
  
  export default Validation;