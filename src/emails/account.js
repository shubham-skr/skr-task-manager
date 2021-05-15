const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'globalkingshubhamkumar@gmail.com',
        subject: 'Welcome to Task Manager App',
        text: `Hello ${name}, thanks for creating an account in skr-task-manager.` 
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'globalkingshubhamkumar@gmail.com',
        subject: 'Goodbye from Task Manager App',
        text: `Sorry to see you go ${name}, thanks for using skr-task-manager.` 
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}