

const users = [
    { email: 'admin1@sentinelSafe.com', password: 'password1' },
    { email: 'admin2@sentinelSafe.com', password: 'password2' },
    { email: 'admin3@sentinelSafe.com', password: 'password3' },
    { email: 'admin4@sentinelSafe.com', password: 'password4' },
    { email: 'admin5@sentinelSafe.com', password: 'password5' }
];

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate login credentials
        let validUser = false;
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && password === users[i].password) {
                validUser = true;
                break;
            }
        }

        if (validUser) {
            document.getElementById('loginMessage').textContent = 'Welcome to SentinelSafe';
        } else {
            document.getElementById('loginMessage').textContent = 'Invalid email or password';
        }
    });
});




function ShowForgotPasswordForm(){
    SetTitle("Forgot Password");

    ShowHideForm("loginForm", "Hide");
    ShowHideForm("FogotPasswordForm", "Show");



}