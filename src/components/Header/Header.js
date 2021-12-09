import React from "react";
import "./Header.css"
import Content from "../Content"
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div id="header">
               <Content/>
            </div>
        )
    }
} export default Home;