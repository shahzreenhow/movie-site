import React from "react";
import styles from "./Home.module.css";
import Homeimg from "../../assests/funfact.png"

class Home extends React.Component {
    render() {
        return (
            <div id="Home" className={styles.title} >
                <h1>Welcome to my Humble Movie Collection</h1>
                <p>Here you can find your favourite movie</p>
                <p>A movie a day, Keep the doctor away</p>
                <img src={Homeimg}></img>
            </div>
        )
    }
} export default Home;