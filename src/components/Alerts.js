import React from "react";

const Alerts = () =>{
    const clearInput= (event) =>{
        event.currentTarget.reset()
    }
    return(
        <>
            {/* Begin Mailchimp Signup Form  */}
            <div id="mc_embed_signup">
            <form action="https://icloud.us5.list-manage.com/subscribe/post?u=e7980e618eb8151a4ba71b154&amp;id=d056cabcc3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <p>Stay on top of evertyhting and sign up to receive daily emails about new dogs reports </p>
                    <label for="mce-EMAIL">Subscribe</label>
                    <input type="email"  name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required/>
                    <div class="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" onClick={event => clearInput(event)} class="button"/>
                    </div>
                </div>
            </form>
            </div>

{/* End mc_embed_signup */}
        </>
    )
}
export default Alerts