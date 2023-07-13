import React,{useState,useEffect}from 'react'
import './Navbar.css'

function Navbar(){
    
    const [show,handlerShow] = useState(false);

    const transactionNavbar = () => { 
        if(window.scrollY>100)
        {
            handlerShow(true)
        }
        else
        {
            handlerShow(false)
        }
     }

     useEffect(() => {
       window.addEventListener("scroll",transactionNavbar)
     
       return () => {
        window.addEventListener("scroll",transactionNavbar)
       }
     }, [])
     

    return (
    <div>
    <div className={`nav ${show && 'nav-black'}`}>
    <img className="netflix_img" src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix_img'/>
    <img className="profile_img" src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' alt='profile_img'/>
    </div>
    
    </div>
)
}
export default Navbar;


