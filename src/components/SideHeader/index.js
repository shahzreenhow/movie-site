import React from "react";
import styles from "./SideHeader.module.css"
import Content from "../../components/Content"
import logo from "../../assests/logo.jpg"
import { Link } from "react-router-dom";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={styles.side_header}>
                <div className={styles.logo}>
                    <img src={logo}/>
                </div>
                <div className={styles.nav}>
                    <ul className={styles.nav_list}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/new">New Release</Link></li>
                        <li>Most Popular</li>
                        <li>Top Chart</li>
                    </ul>
                </div>

                <div className={styles.collection}>
                    <ul className={styles.collection_list}>
                        <li>My Collection</li>
                        <li>Bookmarks</li>
                        <li>History</li>
                        <li>Subscription</li>
                    </ul>
                </div>
            </div>
        )
    }
} export default About