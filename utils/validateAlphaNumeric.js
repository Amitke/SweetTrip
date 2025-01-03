export const validateAlphaNumeric = (value) =>{
    const regex = /^[a-zA-Z]*$/;
    return regex.test(value)
}