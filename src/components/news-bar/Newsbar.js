import React from 'react'
import './Newsbar.css'

export function Newsbar() {
    const news_items = [
        { name: "Discover kenya", href: "" },
        { name: "Digital Marketing", href: "" },
        { name: "Tourism Industry Post Corona Virus", href: "" },
        { name: "Stay Safe and travel tommorow", href: "" },
        { name: "Why diani and massai mara are Africa's leading tourisn Destinations", href: "" },
        { name: "Your Adventrous Moment in Kenya", href: "" },
        { name: "VIRTUAL TOUR LAUNCH CAMPAIGN", href: "" },
    ]

    return (
        <div className="m-news-bar mt-3">
            <div className="m-news-title p-3 ml-5 mr-3">
                Latest News
            </div>
            <div className="m-news-link-container">
                {news_items.map((item, index) => (
                    <div className="m-news-links" key={index}>
                        <a href={item.href} >{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function animateNews() {
    let links = document.getElementsByClassName('m-news-links');
    let currentIndex = 0;
    let timer;

    links[currentIndex].style.margin = "0 0 0 0"
    links[currentIndex].style.visibility = "visible";

    function movedown(element){
        setTimeout(() => {
            element.style.margin = "50px 0 0 0"
        }, 2000);
    }

    function slide() {
        let nextslide;
        (currentIndex + 1 >= links.length) ? (nextslide = 0) : nextslide = currentIndex + 1;
        links[currentIndex].style.margin = "-50px 0 0 0"
        links[nextslide].style.visibility = "visible"
        links[nextslide].style.margin = "0 0 0 0";

        links[currentIndex].style.visibility = "hidden"

        movedown(links[currentIndex]);

        currentIndex = nextslide;
    }

    timer = setInterval(slide, 5000);


    Array.from(links).forEach((element) => {
        element.addEventListener('mouseover', () => {clearTimeout(timer)});
    });

    Array.from(links).forEach((element) => {
        element.addEventListener('mouseout', () => {
            timer = setInterval(slide, 5000)
        })
    })
}
