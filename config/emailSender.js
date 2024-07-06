
import nodemailer from 'nodemailer'
import("dotenv/config")

// This function will return mail info
export async function sendMail(email , emailSubject , otp)
{
    try {
        
        let transporter = nodemailer.createTransport(
            {
                host:process.env.MAIL_HOST,
                auth:{
                    user:process.env.MAIL_USER,
                    pass:process.env.MAIL_PASS
                },
            });
    
            let info = await transporter.sendMail(
                {
                    from:"Accerdian - Pranav Arora",
                    to:`${email}`,
                    subject:`${emailSubject}`,
                    html:`${otp}`
                }
            );

            console.log(info);

            // "sendMail"  function is returning info 
            return info;

    } catch (error) {
        console.log("Error in sending mail");
        console.log(error);
    }
}

// module.exports = sendMail;