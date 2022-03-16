const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'shubhamkumarlhh@gmail.com',
    subject: 'Welcome to SKr Task Manager',
    text: `Hello ${name}, thanks for creating an account in skr-task-manager-app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'shubhamkumarlhh@gmail.com',
    subject: 'Goodbye from SKr Task Manager',
    text: `Sorry to see you go ${name}, thanks for using skr-task-manager-app.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
