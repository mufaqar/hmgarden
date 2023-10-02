export default function (req, res) {
     // require('dotenv').config()
     let nodemailer = require('nodemailer')

     const FROM = process.env.EMAIL
     const TO = process.env.TO_EMAIL
     const PASSWORD = process.env.GMAIL_PASSWORD

     // step-1 
     const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
               user: "gillanix007@gmail.com",
               pass: "vdrylevqwbmdasgu",
          },
          secure: true,
     })

     // step-2
     const mailData = {
          from: FROM,
          to: `zunairgillani54@gmail.com, ${req.body.email}`,
          subject: `Message From ${req.body.name}`,
          text: req.body.message + " | Sent from: " + req.body.email,
          html: `<div>${req.body.message}</div><p>Sent from:
         ${req.body.email}</p>`,
          attachments: [{
               filename: "smtpjs.png",
               path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
          }]
     }

     // step-3
     transporter.sendMail(mailData, function (err, info) {
          if (err)
               console.log(err)
          else{
               res.status(200).json({message:"email sended!", info})
          }
     })

     
}