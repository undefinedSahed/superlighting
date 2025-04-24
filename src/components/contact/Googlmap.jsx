import React from 'react'

const Googlmap = () => {
return (
    <section className="google-map">
            <div className="container w-full mx-auto">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.328095282874!2d90.34981837605698!3d23.825036784546164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac7f3a48336e6375%3A0x8170a55898a9b7f2!2sSuper%20Lighting%20BD!5e0!3m2!1sen!2sbd!4v1699339665407!5m2!1sen!2sbd" 
                    className="w-full h-[400px] md:h-[600px] p-6"
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
    </section>
)
}

export default Googlmap
