import React from "react"
// import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              

              <div className='input flex'>
                <input className="email" type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 Succedo Mortgage.</span>
      </div>
    </>
  )
}

export default Footer
