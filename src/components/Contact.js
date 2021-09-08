import React from "react"

const Contact = () =>{
    return(
        <>
        <div className="contact-container">
            <div>
                <h2 className="centered">Have some valiable infomation about a dog? don't resitate, contact us!</h2>
                <h4 className="centered">Any clue, could bring a puppy back to their family</h4>
            </div>
            <div className="contact-box">
                <form action="https://formsubmit.co/imdoug@icloud.com" method="POST">
                    <h2 className="centered">CONTACT US</h2>
                    <div>
                    <label for="name">Name</label>
                    <br/>
                    <input className="email-name" type="text" name="name" required/>
                    </div>
                    <div>
                    <label for="email">Email</label>
                    <br/>
                    <input  className="email-name" type="email" name="email" required/>
                    </div>
                    <div>
                    <label for="message">Message</label>
                    <br/>
                    <textarea className="email-message" type="text" name="message" required/>
                    </div>
                    <input className="send-contact" type="submit" value="send"/>
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact