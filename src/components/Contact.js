import React from "react"

const Contact = () =>{
    return(
        <>
        <div>
            <h2 className="centered">Have some valiable infomation about a dog? don't resitate, contact us!</h2>
            <h4 className="centered">Any clue, could bring a puppy back to their family</h4>
        </div>
        <div className="contact-box">
            <form action="https://formsubmit.co/imdoug@icloud.com" method="POST">
                <h2 className="centered">CONTACT US</h2>
                <label for="name">Name</label>
                <br/>
                <input type="text" name="name" placeholder="Your name" required/>
                <br/>
                <label for="email">Email</label>
                <br/>
                <input trype="email" name="email" placeholder="Your email" required/>
                <br/>
                <label for="message">Message</label>
                <br/>
                <textarea type="text" name="message" placeholder="Your Message Here" required/>
                <br/>
                <input className="send-contact" type="submit" value="SEND"/>
            </form>
        </div>
        </>
    )
}
export default Contact