let minEmail = 5;
let minPass = 6;
let email = prompt('Enter your email', '');

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < minEmail) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
    alert('I don’t know you')
} else {
    let password = prompt('Enter your password', '');
    if (password ==='' || password === null) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password !== 'UserPass' || 
    email === 'admin@gmail.com' && password !== 'AdminPass') {
        alert('Wrong password')
    } else {
        let cpassword = confirm('Do you want to change your password?');
        if (!cpassword) {
            alert('You have failed the change')
        } else {
            let oldpass = prompt('Enter old password', '');
            if (oldpass === '' || oldpass === null) {
                alert('Canceled');
            } else if (email === 'user@gmail.com' && password !== 'UserPass' || 
            email === 'admin@gmail.com' && password !== 'AdminPass') {
                alert('Wrong password');
            } else {
                let newpass = prompt('Enter new password', '');
                if (newpass.length < minPass) {
                    alert('It’s too short password. Sorry');
                } else {
                    let confirmNewPass = prompt('Confirm your new password', '');
                    if (newpass === confirmNewPass) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            }
        }
    }
}

