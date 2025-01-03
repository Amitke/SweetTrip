export const validatePhoneNumber = (phoneNumber) =>{
    const regex = /^[0-9+]*$/;
    return regex.test(phoneNumber)
}