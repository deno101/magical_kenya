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

    search = () => {
        // make http request to server search
        console.log("Search")
    }

    render() {
        return (
            // main container all
            <div>
                <Flag />
                {/* continer img, search, icons, alt-links, slogan menus*/}
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
                        <div className="searchbar mt-2">
                            <SearchBar onChange={this.onChange} search={this.search} />
                        </div>
                    </div>

                    {/* menus */}
                    <div className="m-nv-menu mr-4">
                        <Menus />
                    </div>

                </div>
            </div>
        )
    }
}

function Img() {
    return (
        <React.Fragment>
            <img className="Img" src={logo} alt="logo" />
        </React.Fragment>
    );
}

function SloganLinks() {
    return (
        <div className="slogan-links m-2 mr-4">
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
            {colors.map((color, index) => (
                <div key={index} style={{ background: color }}> &nbsp;</div>
            ))}
        </div>
    );
}

function SearchBar(props) {
    return (
        <React.Fragment>
            <input type="text" onChange={props.onChange} placeholder="Search..." />
            <i className="fa fa-search" onClick={props.search} ></i>
        </React.Fragment>
    );
}


function Menus() {
    const menu_data = [
        {
            name: "What To Do", href: "http://magicalkenya.com/what-to-do", children: [
                { name: "Go On Safari", href: "" },
                { name: "Water Sports", href: "" },
                { name: "Play Golf", href: "" },
                { name: "Active Travel", href: "" },
                { name: "Special Interests", href: "" },
                { name: "Events & Festivals", href: "" },
                { name: "Culture & Heritage", href: "" },
                { name: "Entertainment & NightLife", href: "" },
            ]
        },

        {
            name: "What To See", href: "http://magicalkenya.com/what-to-see", children: [
                { name: "Musemus & Monuments", href: "" },
                { name: "Porpular Sites", href: "" },
                { name: "Marine Parks", href: "" },
                { name: "Conservancies", href: "" },
                { name: "Rock Art", href: "" },
            ]
        },

        {
            name: "Places To Visit", href: "http://magicalkenya.com/places-to-visit", children: [
                { name: "Northern Kenya", href: "" },
                { name: "Wilderness Areas", href: "" },
                { name: "Coastal Kenya", href: "" },
                { name: "Cities", href: "" },
                { name: "HighLand & Valleys", href: "" },
                { name: "Lakes", href: "" },
                { name: "Forests", href: "" },
                { name: "Shopping", href: "" },
            ]
        },

        {
            name: "Visit Kenya", href: "http://magicalkenya.com/visit-kenya", children: [
                { name: "Visa Information", href: "" },
                { name: "Getting There", href: "" },
                { name: "Plan Your Trip", href: "" },
                { name: "News Update", href: "" },
                { name: "Sesonal Offers", href: "" },
                { name: "Learn Swahili", href: "" },
                { name: "Tour Operators", href: "" },
                { name: "Why I Love Kenya Magazine", href: "" },
            ]
        },

        { name: "Talk To Us", href: "http://magicalkenya/talk-to-us", children: [] },

        { name: "Information On COVID-19", href: "http://magicalkenya/covid-19", children: [] },
    ]
    return (
        <React.Fragment>
            {menu_data.map(((row, index) => (

                <div className={`m-2 m-nv-menuitem ${index === 0 && 'ml-auto'}`} key={index}>
                    <a href={row.href}>
                        {row.name}
                        <i className="fa fa-chevron-down m-1" style={{ color: 'red' }}></i>
                    </a>
                    <div className="m-nv-bottom-of-menu">
                        &nbsp;
                    </div>
                    <div>
                        <div className="m-nv-submenu">
                            {row.children.map((child, index) => (
                                <div className={`m-nv-submenuitem pl-3 pr-3 pt-2 pb-2 ${index !== 0 && 'm-nv-submenuitem-bordertop'}`} key={index}>
                                    <a href={child.href} >
                                        {child.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )))}
        </React.Fragment>
    );
}

export default Navbar;