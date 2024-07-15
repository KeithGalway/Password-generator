let passwordOneEl = document.getElementById('passwordOne-el')    // get passwordOne element - first password displayed in the password section
let passwordTwoEl = document.getElementById('passwordTwo-el')    // get passwordTwo element - second password displayed in the password section

// define characters array to hold all possible characters in password
const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
                    '0','1','2','3','4','5','6','7','8','9','~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=',
                    '{','[','}',']',',','|',':',';','<','>','.','?','/']

// genpass function will generate two 16 character length passwords
function genpass() {
    let password = ''
    let password2 = ''
    for (i = 0; i < 16; i++) {
        let pass1 = Math.floor(Math.random() * characters.length)
        password += characters[pass1]
        passwordOneEl.textContent = password
    }
    for (i = 0; i < 16; i++) {
        let pass2 = Math.floor(Math.random() * characters.length)
        password2 += characters[pass2]
        passwordTwoEl.textContent = password2
    }
}