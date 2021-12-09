import React from "react";
import styles from "./New.module.css"
import Newlist from "../../components/Newlist.js"
import {useState} from "react";


import img1 from "../../assests/img1.jpg"
import img2 from "../../assests/img2.jpg"
import img3 from "../../assests/img3.jpg"
import img4 from "../../assests/img4.jpg"
import img5 from "../../assests/img5.jpeg"
import img6 from "../../assests/img6.jpg"
import img7 from "../../assests/img7.jpg"
import img8 from "../../assests/img8.jpg"


const DATA = [{
    img: img1,
    title: 'Red Notice',
    subTitle: 'Action',
    views: 300,
},{
    img: img2,
    title: "A-Team",
    subTitle: "Action",
    views: 300,
},{
    img: img3,
    title: "Money Heist",
    subTitle: "Action",
    views: 300,
},{
    img: img4,
    title: "Iron Man",
    subTitle: "Sci-fi",
    views: 300,
},{
    img: img5,
    title: "WandaVision",
    subTitle: "Comedy",
    views: 300,
},{
    img: img6,
    title: "Train to Busan",
    subTitle: "Horror",
    views: 300,
},{
    img: img7,
    title: "Avengers End Game",
    subTitle: "Action",
    views: 300,
},{
    img: img8,
    title: "JoJo",
    subTitle: "Anime",
    views: 300,
}]

export default function New () {
        const [query, setQuery] = useState("")

        return(
            <div id={styles.new_release}>
                <h2 id="new">New Release</h2>
                <input className={styles.searchbar} placeholder="Enter Title" onChange={event => setQuery(event.target.value)} />
                
                <div className={styles.blog_containers}>
                    {/* {DATA.map((list) => {
                        return <Newlist 
                        bannerImg= {list.img}
                        title={list.title} subTitle={list.subTitle}
                        />
                        
                    })}; */}

                    {DATA.filter(list => {
                    if (query === "") {
                        //if query is empty
                        return list;
                    } else if (list.title.toLowerCase().includes(query.toLowerCase())) {
                        //returns filtered array
                        return list;
                    }
                    }).map((list) => {
                        return <Newlist 
                        bannerImg= {list.img}
                        title={list.title} subTitle={list.subTitle}
                        />
                        
                    })};

                </div>
            </div>
             
        )
    }
