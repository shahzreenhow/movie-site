import React from "react";
import styles from "./Content.module.css";

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={styles.content_holder}>
                   <h1>MOVIE MANIAC</h1>
                    <p className={styles.header_id}>SHAHZREEN HOW</p>
            </div>
        )
    }
} export default Content;