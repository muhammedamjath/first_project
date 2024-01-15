const email=document.getElementById('email')
const password=document.getElementById('password')
// const cpassword=document.getElementById('cpassword')
// const 

const passwordRejex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const emailRejex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

email.onblur=()=>{
    
    if(! emailRejex.test(email.value)){
        email.value=""
        email.placeholder='invalid email'
        email.classList.add('re-wright')
    }

}

// cpassword.onblur=()=>{
//     if(cpassword.value !== password.value){
//         cpassword.value=""
//         cpassword.placeholder='password must be eqaul'
//         cpassword.classList.add('re-wright')
//     }else{
//         cpassword.placeholder='Confirm Password'
//         cpassword.classList.remove('re-wright')
//     }
// }

password.onblur=()=>{
    if(! passwordRejex.test(password.value)){
        password.value=''
        password.placeholder='invalid password'
        password.classList.add('re-wright')

    }
}