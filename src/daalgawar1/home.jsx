import React from "react";
import "./home.css"
import Header from "./header";
import Card from "./card";
import img1 from "../assets/aa.jpg"
import img2 from "../assets/bb.jpg"
import img3 from "../assets/cc.png"
import img4 from "../assets/dd.png"
import img5 from "../assets/ee.png"
import img6 from "../assets/gg.png"
import img7 from "../assets/gg.png"
import img8 from "../assets/hh.png"

const Home = () =>{
    return(
        <div className="home">
            <Header/>
            <Header/>
            <div className="box">
                <Card title="Bambaruush" img={img1}/>
                <Card title="Bambaruush" img={img2}/>
                <Card title="Bambaruush" img={img3}/>
                <Card title="Bambaruush" img={img4}/>
                <Card title="Bambaruush" img={img5}/>
                <Card title="Bambaruush" img={img6}/>
                <Card title="Bambaruush" img={img7}/>
                <Card title="Bambaruush" img={img8}/>
            </div>
        </div>
    )
}

export default Home;