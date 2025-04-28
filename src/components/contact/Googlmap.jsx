import React from 'react'

const Googlmap = () => {
return (
    <section className="google-map">
            <div className="container w-full mx-auto">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.569098623581!2d77.5900513146323!3d12.97159898970739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f5e0c7e1%3A0x8f7d1e8b6b1f7f3e!2sNamma%20Metro%20-%20Vijayanagar%20Station!5e0!3m2!1sen!2sin!4v1626845799830!5m2!1sen!2sin" 
                    className="w-full h-[400px] md:h-[600px]"
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
    </section>
)
}

export default Googlmap
