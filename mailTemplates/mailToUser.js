
export function mailToUser(firstName , lastName)
{
    return(
        `
        <!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}

            .btn{
                border: none;
                padding: 10px;
                padding-left:20px ;
                padding-right:20px ;
                background-color: blue;
                color: white;
                font-weight: 700;
                border-radius: 10px;
                cursor: pointer;

                
            }

            btn:hover{
                scale: 95%;
                transition: all;
                transition-duration: 200;
            }
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<a href=""><img class="logo"
					src="https://accredian.com/Rcimages/logo.png" alt="Accredian Logo"></a>
			<div class="message">Referral Sent Successfully</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Your Referral has been Successfully received by ${firstName} ${lastName}  Click on the Button Below To Know The Status of your Referral</p>
				<button class="btn">Know More</button>
				<p>This referral is valid for 1 week . If other person not accepts the referral within given time frame your referral will be automatically cancelled 
				You will receive a mail if the person accepts your Referral</p>
			</div>
			<div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					href="mailto:info@studynotion.com">admissions@accredian.com</a>. We are here to help!</div>
		</div>
	</body>
	
	</html>
        `
    )
}