function generateAvatarId(){
    let OTP = ""
    let digits = "1234567890"
    for(let i=0;i<10;i++){
        OTP += digits[Math.floor(Math.random() * 10)]
    }
    return OTP
}

module.exports = { generateAvatarId };