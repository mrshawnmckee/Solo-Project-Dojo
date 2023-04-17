import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link, useNavigate} from 'react-router-dom'
import image from "../img/mandoImage.jpg";

const Home = (props) => {




    return (
        <div style={{backgroundImage: `url(${image})`, color: "#fff", backgroundSize: 'cover', height: '100vh', fontSize: "30px", fontWeight: 'bold'}}>
            <div>

            </div>
            <a href='/sell' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Sell your Instrument</a>
                <a href='/mando' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Browse available Mandolins</a>
            <div >
                <h1>Welcome to Mandolin Trader</h1>
            </div>
            <div>
                <p style={{display: 'flex', justifyContent: 'center', margin: '10% 20% 10% 20%', backgroundColor: 'rgb(169, 169, 169, 0.7'}}>We would like to welcome you to our space. We created this page to try to help those looking for Mandos find those trying to get rid of them. Please do not tell angry spouses about our place, we only provide the vehicle for your bad habits. You are the Driver. Happy shopping!</p>
            </div>
            <div>


            </div>


        </div>
    )
}

export default Home