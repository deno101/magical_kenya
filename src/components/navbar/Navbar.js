import React, { Component } from 'react'
import logo from '../../imgs/magicalkenyalogo.png'
import './Navbar.css'

class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            search_text: "",
        }
    }


    onChange = (event) => {
        this.setState({
            search_text: event.target.value,
        });
    }

    render() {
        return (
            // main container all
            <div>
                {/* continer img, search, icons, alt-links, slogan */}
                <Flag />
                <div className="container-img-search" >
                    {/* image container */}
                    <div className=" m-2 ml-5" > <Img /> </div>
                    {/* slogan, links, socials, search */}
                    <div className="container-slogan-search mt-2 mr-4 mb-2 pl-3">
                        <div className="slogan_nd_socials">
                            {/* slogan and links */}
                            <SloganLinks />
                            {/* socials */}
                            <Socials />
                        </div>
                        {/* search bar */}
                        <div className="searchbar mt-4">
                            <SearchBar onChange={this.onChange} />
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
            <div className="mr-4" style={{ color: '#AF9119', fontStyle: "italic" }} >The Kenya Tourism Board welcomes you to Magical Kenya!</div>
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

    function Link() {
        let data = [
            { key: 1, link: "http://www.facebook.com", background_color: "#0C69A8", icon: "fa-facebook" },
            { key: 2, link: "http://www.youtube.com", background_color: "#0FABC3", icon: "fa-twitter" },
            { key: 3, link: "http://www.youtube.com", background_color: "#D21C1C", icon: "fa-youtube" },
            { key: 4, link: "http://www.instagram.com", background_color: "#507EA3", icon: "fa-instagram" },
            { key: 5, link: "http://www.flickr.com", background_color: "#1F6ED9", icon: "fa-flickr" },
        ]
        return (
            <React.Fragment>
                {data.map(link => (
                    <a className="mr-2" href={link.link} key={link.key}>
                        <div className="m-circle white" style={{ background: link.background_color, color: 'white' }} >
                            <i className={`fa ${link.icon} p-2 fa-2x`}></i>
                        </div>
                    </a>
                ))}
            </React.Fragment>
        );
    }
    return (
        <div className="socials" style={{ marginLeft: 'auto' }} >
            <Link />
        </div>
    );
}

function Flag() {
    let colors = ["red", "black", "green"];
    return (
        <div className="flag mb-3" >
            {colors.map(color => (
                <div style={{ background: color }}> &nbsp;</div>
            ))}
        </div>
    );
}

function SearchBar(props) {
    return (
        <React.Fragment>
            <input type="text" onChange={props.onChange} placeholder="Search..." />
            <i className="fa fa-search" ></i>
        </React.Fragment>
    );
}


export default Navbar;