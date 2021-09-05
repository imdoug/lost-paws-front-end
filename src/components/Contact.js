import React from "react"

const Contact = () =>{
    return(
        <>
        <div>
            <form action="https://formsubmit.co/imdoug@icloud.com" method="POST">
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="Your name" required/>
                <br/>
                <label for="email">Email</label>
                <input trype="email" name="email" placeholder="Your email" required/>
                <br/>
                <label for="message"></label>
                <textarea type="text" name="message" placeholder="Your Message Here" required/>
                <br/>
                <input type="submit" value="SEND"/>
            </form>
        </div>
        </>
    )
}
export default Contact