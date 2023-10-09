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
          to: `mufaqar@gmail.com,homeandgardenmasters@gmail.com, ${req.body.email}`,
          subject: `Message From ${req.body.name}`,
          text: req.body.message + " | Sent from: " + req.body.email,
          html: `
          <p><strong>What kind of property is it: </strong> ${req.body.property_type}</p>
          <p><strong>What Kind Of Services Do You Need: </strong> ${JSON.stringify(req.body.servicesType)}</p>
          <p><strong>How Is The Access To The Garden/Property: </strong> ${req.body.property_access}</p>
          <p><strong>When Would You Like The Work To Begin: </strong> ${req.body.workToBegin}</p>
          <p><strong>Please Describe The Job You Would Like To Be Done In A Few Words: </strong> ${req.body.describe_job}</p>
          <p><strong>Full Name: </strong> ${req.body.full_name}</p>
          <p><strong>E-Mail: </strong> ${req.body.email}</p>
          <p><strong>Mobile: </strong> ${req.body.mobile}</p>
          <p><strong>Address: </strong> ${req.body.address}</p>
          `,
          attachments: [{
               filename: "smtpjs.png",
               path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
          }]
     }

     // step-3
     transporter.sendMail(mailData, function (err, info) {
          if (err)
               console.log(err)
          else {
               res.status(200).json({ message: "email sended!", info })
          }
     })


}