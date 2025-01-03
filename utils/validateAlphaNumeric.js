export const validateAlphaNumeric = (value) =>{
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(value)
}