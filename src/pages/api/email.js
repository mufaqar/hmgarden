export default function (req, res) {
     // require('dotenv').config()
     let nodemailer = require('nodemailer')

     const EMAIL="softsgens@gmail.com"
     const GMAIL_PASSWORD="bczjxzfatgxsebrz"

     // step-1 
     const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
               user: EMAIL,
               pass: GMAIL_PASSWORD
          },
          secure: true,
     })

     // step-2
     const mailData = {
          from: EMAIL,
          to: `mufaqar@gmail.com,homeandgardenmasters@gmail.com, ${req.body.email}`,
          subject: `Message From ${req.body.full_name}`,
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
               filename: req?.body?.file?.name,
               path: req?.body?.file?.url
          }]
     }

     const mailDataForProposal = {
          from: EMAIL,
          to: `mufaqar@gmail.com, homeandgardenmasters@gmail.com`,
          subject: `Proposal`,
          text: "",
          html: `
          <p><strong>Your Proposal: </strong> ${req.body.proposal}</p>
          `,
          
     }

     // step-3
     transporter.sendMail(req.body?.proposal ? mailDataForProposal : mailData , function (err, info) {
          if (err)
               console.log(err)
          else {
               res.status(200).json({ message: "email sended!", info })
          }
     })


}