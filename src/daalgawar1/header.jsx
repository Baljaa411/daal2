import React from "react";
import "./header.css"
// import img from "../../assets/logo.png"

const Header = () =>{
    return(
        <div className="header">
            <div className="item1">
                <h1>ИРГЭНИЙ БОЛОВСРОЛ ТӨВ</h1>
            </div>
            <div className="item2">
                <a href="https://www.youtube.com/watch?v=upV9wPKd-XY">Нүүр</a>
                <a href="https://www.youtube.com/watch?v=upV9wPKd-XY">Бидний тухай</a>
                <a href="https://www.youtube.com/watch?v=upV9wPKd-XY">Мэдээ</a>
                <a href="https://www.youtube.com/watch?v=upV9wPKd-XY">Хөтөлбөр</a>
                <a href="https://www.youtube.com/watch?v=upV9wPKd-XY">Архив</a>
                <a href="https://www.youtube.com/watch?v=upV9wPKd-XY">Нийтлэлүүд</a>
            </div>
        </div>
    )
}

export default Header;