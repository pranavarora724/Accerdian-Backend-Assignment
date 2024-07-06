import prisma from '../DB/dbConfig.js'
import {sendMail} from '../config/emailSender.js'
import {mailToReferred} from '../mailTemplates/mailToReferred.js'
import {mailToUser} from '../mailTemplates/mailToUser.js'

export async function saveFormData (req , res){

    try {

        const {
            firstName , 
            lastName , 
            email , 
            phoneNumber,

            referralFirstName,
            referralLastName,
            referralEmail,
            referralPhoneNumber,

            message

        } = req.body

        if(!firstName || !lastName || !email || !phoneNumber || !referralEmail || !referralFirstName || !referralLastName || !referralPhoneNumber || !message)
        {
            return(
                res.status(400).json(
                    {
                        success:false,
                        message:"Enter All The Fields"
                    }
                )
            )
        }

        const existingData = await prisma.formdata.findFirst(
            {
                where:{
                    email:email,
                    referralEmail:referralEmail
                }
            }
        )

        if(existingData)
        {
            return(
                res.status(400).json(
                    {
                        success:false,
                        message:'You Have Already Referred To this Email'
                    }
                )
            )
        }
        
        const newData = await prisma.formdata.create({
            data:{
                firstName:firstName,
                lastName:lastName,
                email:email,
                phoneNumber:phoneNumber,

                message:message,

                referralFirstName:referralFirstName,
                referralLastName:referralLastName,
                referralEmail:referralEmail,
                referralPhoneNumber:referralPhoneNumber
            }
        })

        if(newData)
        {
            const mailTemplate1 = mailToReferred(firstName , lastName);
            const mailTemplate2 = mailToUser (referralFirstName , referralLastName);

            const info1 = await sendMail(referralEmail , 'Referral Email' , mailTemplate1)

            if(info1)
            {
                const info2 = await sendMail(email , 'Referral Sent Successfully' , mailTemplate2);

                if(!info2)
                {
                    return(
                        res.status(400).json(
                            {
                                success:false,
                                message:'Email invalid'
                            }
                        )
                    )    
                }
            }
            else{
                return(
                    res.status(400).json(
                        {
                            success:false,
                            message:'Email invalid'
                        }
                    )
                )
            }

            return(
                res.status(200).json(
                    {
                        success:true,
                        message:'Form Data Saved SuccessFully',
                        formdata:newData
                    }
            ))
        }

    } catch (error) {

        return(
            res.status(401).json(
                {
                    success:false,
                    message:'Error While Saving Form Data',
                    error:error.message
                }
            )
        )
    }
}