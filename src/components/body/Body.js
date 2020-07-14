import React, { PureComponent } from 'react'
import img_one from '../../imgs/watersportsthumb.jpg'
import img_two from '../../imgs/popularsitesthumb.jpg'
import img_three from '../../imgs/highlandsandvalleysthumb.jpg'
import './Body.css'
import img_four from "../../imgs/logoxxxx.jpg"
import img_porini from '../../imgs/porini-ad-300x250.jpg'

export class Body extends PureComponent {
    render() {
        return (
            <div className="mt-3 body-super-container">
                <div className="main-body-container">
                    <MainBody />
                </div>
                <div className="body-side-bar">
                    <BodySideBar />
                </div>
            </div>
        )
    }
}

function MainBody() {
    const subcontent = [
        {
            image: img_one,
            content: 'From hand feeding Giraffes, to adopting orphaned elephants to taking breathtaking balloon safaris at dawn. There is a lot to do in Kenya.',
            footer: "What To Do", footer_color: '#00AB3C'
        },
        {
            image: img_two,
            content: 'The big 5, a beautiful diversity of landscapes, animals, bird and plant life and fascinating cultures. Kenya is endowed with all these and more.',
            footer: "What To See", footer_color: '#EC0000'
        },
        {
            image: img_three,
            content: 'White Sandy beaches on the East African coast, more than 45 National parks and reserves not to mention bustling metropolitan cities and towns.',
            footer: "Places To Visit", footer_color: '#918700'
        },
    ]
    return (
        <React.Fragment>
            <h1 className="body-header pt-2 pb-2">Africa's Leading Tourist Board 2018, The Kenya Tourism Board welcomes you to Magical Kenya! </h1>
            <p>
                We have designed this website to let you explore Kenya and discover the untold wealth of
                destinations and experiences available to the visitor. If you planning a trip to Kenya or just interested
                in learning more about the country, you'll find everything you are looking for here.
            </p>
            {subcontent.map((data, index) => (
                <div className="main-body-subcontent p-2" key={index}>
                    <img src={data.image} alt={index} />
                    <p className="mt-2">{data.content}</p>
                    <div className="body-footer pt-4 pb-4" style={{ background: data.footer_color }}>
                        <span>EXPLORE</span><br />
                        {data.footer}
                    </div>
                </div>
            ))}


        </React.Fragment>
    );
}

function BodySideBar() {
    return (
        <React.Fragment>
            <iframe title="Magical Kenya" src="https://www.youtube.com/embed/56AdQWoC7QI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            <a href="http://magicalkenya.com/mksc" target="_blank" rel="noopener noreferrer">
                <img src={img_four} alt="MKSC"/>
            </a>

            <a href="http://porini.com" target="_blank" rel="noopener noreferrer">
                <img src={img_porini} alt="potini.com"/>
            </a>
        </React.Fragment>
    );
}

export default Body
