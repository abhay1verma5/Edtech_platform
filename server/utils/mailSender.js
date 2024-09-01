const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
          
    let transporter = nodemailer.createTransport({
      service:"gmail",
      host: process.env.MAIL_HOST,
      port:587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    })

    let info = await transporter.sendMail({
      from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
   
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
