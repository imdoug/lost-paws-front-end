import React from "react";

const Alerts = () =>{
    const clearInput= (event) =>{
        event.currentTarget.reset()
    }
    return(
        <>
            {/* Begin Mailchimp Signup Form  */}
            <div id="mc_embed_signup" className="alert-box">
            <form action="https://icloud.us5.list-manage.com/subscribe/post?u=e7980e618eb8151a4ba71b154&amp;id=d056cabcc3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <p>Stay on top of evertyhting and sign up to receive daily emails about new dogs reports</p>
                <div id="mc_embed_signup_scroll" className="email-row">
                    <input type="email"  name="EMAIL" className="email" id="mce-EMAIL" placeholder="enter your email" required/>
                    <div class="clear">
                        <input type="submit" value="subscribe" name="subscribe" id="mc-embedded-subscribe" onClick={event => clearInput(event)} class="btn-alert"/>
                    </div>
                </div>
            </form>
            </div>

{/* End mc_embed_signup */}
        </>
    )
}
export default Alerts