import React, { PureComponent } from 'react'
import './Footer.css'
import logo from '../../imgs/ktblogo.png'

export default class Footer extends PureComponent {

    data = [
        {
            title: 'Links', children: [
                { name: 'What To Do', href: 'http://magicalkenya.com/what-to-do' },
                { name: 'What To See', href: 'http://magicalkenya.com/what-to-see' },
                { name: 'Places To Visit', href: 'http://magicalkenya.com/places-to-visit' },
                { name: 'Visit Kenya', href: '' },
                { name: 'Brochures', href: '' },
                { name: 'MagicalKenya Signature Experience', href: '' },
                { name: 'Contact Us', href: '' },
            ]
        },

        {
            title: 'Resources', children: [
                { name: 'Tourism Directory', href: '' },
                { name: 'KTB Pre-qualified', href: '' },
                { name: 'Exhibitions & Roadshows', href: '' },
                { name: 'Tenders', href: '' },
                { name: 'Charter Incentives', href: '' },
                { name: 'Recruitment', href: '' },
                { name: 'KTB Annual Financial Reports', href: '' },
                { name: 'Latest WILK issue', href: '' },
            ]
        },

        {
            title: 'Miscellaneous', children: [
                { name: 'Site Map', href: '' },
                { name: 'KTB privacy Policy', href: '' },
                { name: 'STACKLA image rights terms and conditions', href: '' },
                { name: 'MKSE sourvenir Booklet', href: '' },
                { name: 'Signature Experience Listing', href: '' },
            ]
        },
        {
            title: 'Patners', children: [
                { name: 'Ministry of Tourism, Kenya', href: '' },
                { name: 'Kenya Tourism Federation (KFT)', href: '' },
                { name: 'Kenya Assiciation of Tour Operators (KATO)', href: '' },
                { name: 'Kenya Association of HotelKeppers & Caterers', href: '' },
                { name: 'Ecotourism Society of Kenya', href: '' },
                { name: 'Kenya Wildlife Service', href: '' },
                { name: 'Kenya International Convention Center', href: '' },
                { name: 'National Museums of kenya', href: '' },
                { name: 'Kenya Association of Air Operators', href: '' },
            ]
        },
    ]

    render() {
        return (
            <div className="footer-super-container">
                <div className="footer-col-container">
                    <div className="footer-col m-2">
                        <span className="m-border-bottom pt-2 pb-2 mb-2">Official Site By</span><br />
                        <img src={logo} alt="Copy Right Logo" />
                    </div>
                    {this.data.map((column, index) => (
                        <div key={index} className="footer-col m-2">
                            <span className="m-border-bottom pt-2 pb-2  mb-2">{column.title}</span><br />
                            {column.children.map((child, i) => (
                                <a href={child.href} className="mb-1" key={`child-${i}`}>{child.name}</a>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="copyright-container m-top-margin-1 mt-2 mb-4">
                    <span className="mt-2">
                        Copyright &copy; 2014. Kenya Tourism Board. All Rights Reserved. | Magical Kenya. The Official Destination Website for Kenya.
                    </span>
                </div>
            </div>
        )
    }
}
