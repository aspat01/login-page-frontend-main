const validation = (values) => {
   
    let errors = {};

if(!values.fullname){
    errors.fullname = "Name is required."
}
if(!values.email){
    errors.email = "Email is required."
}
else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email= "Email is Invalid."
}
if(!values.password){
    errors.password ="Password is required."
}
else if(values.password.length < 13) 
{
     errors.password ="Password must be atleast 12 characters."
}

else if(!/[A-Z]/.test(values.password))
{
    errors.password = "Password should have atleast one Upper Character."
}
else if(!/[0-9]/.test(values.password))
{
     errors.password = "Password should have atleast one Number."
}
else if(!/[!@#$%?~^*&]/.test(values.password))
{
     errors.password = "Password should have atleast one Special Character."
}
else if(!/[a-z]/.test(values.password))
{
    errors.password ="Password should have atleast one Lower Character."
}
return errors;
};


export default validation;