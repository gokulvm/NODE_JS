// you have to give access in your mail account :: setting/security/lesssecureappaccess
nm = require("nodemailer")

sender = nm.createTransport({
    service : "gmail",
    auth : {
        user : "Enter your mail address here",
        pass : "Enter your password here"
    }
})

composemail = {
    from : "Enter the sender mail address here",
    to : "Enter the receiver mail address here",
    subject : "This mail is generated by Nodejs",
    html : "<h1>Enter your content here</h1>"  // your can use text parameter to sent the text values 
}

sender.sendMail(composemail,function(err,info){
    if (err){
        console.log(err)
    }
    else{
        console.log("Mail sent successfully   " + info.response)
    }
})