import React from "react";
import styles from "./Newlist.module.css"

class Newlist extends React.Component {
    render() {
        return(
            <div className={styles.blog_holder}>
                <div className={styles.blog_img}>
                <img src={this.props.bannerImg}
                alt="" width="250px" height="auto"/>
                </div>
            
                <div className={styles.blog_container}>
                    <div className={styles.blog_content_holder}>
                        <div className={styles.blog_profile}></div>
                        <div>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} export default Newlist;