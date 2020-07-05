import React, { Component } from 'react'
import logo from '../../imgs/magicalkenyalogo.png'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            // main container all
            <div>
                {/* continer img, search, icons, alt-links, slogan */}
                <div className="container-img-search" >
                    {/* image container */}
                    <div className=" m-2 ml-5" > <Img /> </div>
                    {/* slogan, links, socials, search */}
                    <div className="container-slogan-search mt-2 mr-5 mb-2">
                        {/* slogan and links */}
                        <SloganLinks />
                        {/* socials */}
                        <Socials />
                        {/* search bar */}
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function Img() {
    return (
        <div>
            <img className="Img" src={logo} alt="logo" />
        </div>
    );
}

function SloganLinks() {
    return (
        <div className="slogan-links m-2">
            {/* slogan */}
            <div className="mr-4" style={{ color: '#AF9119', fontStyle:"italic" }} >The Kenya Tourism Board welcomes you to Magical Kenya!</div>
            {/* link */}
            <div >
                <p>
                    <a className="active pr-1 pl-1 right-border" href="https://www.magicalkenya.com/">EU</a>
                    <a className="pr-1 pl-1 right-border" href="https://www.magicalkenya.com/ru">RU</a>
                    <a className="pr-1 pl-1" href="https://www.magicalkenya.com/it">IT</a>
                </p>
            </div>
        </div>
    );
}

function Socials() {
    return (
        <div className="socials" >
            <a className="mr-2" href="http://www.facebook.com" style={{marginLeft: 'auto'}} >
                <div className="m-circle white"  style={{background: '#0C69A8', color:'white'}} >
                    <i className="fa fa-facebook p-3 "></i>
                </div>
            </a>
            <a className="mr-2" href="http://www.twitter.com">
                <div  className="m-circle"  style={{background: '#0FABC3', color:'white'}}>
                    <i className="fa fa-twitter p-3 "></i>
                </div>
            </a>
            <a className="mr-2" href="http://www.youtube.com">
                <div className="m-circle" style={{background: '#D21C1C', color:'white'}}>
                    <i className="fa fa-youtube p-3"></i>
                </div>
            </a>
            <a className="mr-2" href="http://www.instagram.com">
                <div className="m-circle" style={{background: '#507EA3', color:'white'}} >
                    <i className="fa fa-instagram p-3"></i>
                </div>
            </a>
            <a className="" href="http://www.flickr.com">
                <div className="m-circle" style={{background: '#1F6ED9', color:'white'}}>
                    <i className="fa fa-flickr p-3"></i>
                </div>
            </a>
        </div>
    );
}



export default Navbar;