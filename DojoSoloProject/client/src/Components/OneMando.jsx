import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams, Link, useNavigate} from 'react-router-dom'
import image from "../img/mandoImage2.jpg";


const OneMando = (props) => {

    const{id} = useParams();
    const navigate = useNavigate();
    const [mando, setMando] = useState({});

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/mando/${id}`)
        .then((res) => {
            setMando(res.data)
        }).catch((err) => {
            console.log(err)
        })
    })

    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/mando/${id}`)
        .then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div style={{backgroundImage: `url(${image})`, color: "#fff", backgroundSize: 'cover', height: '100vh', fontSize: "30px", fontWeight: 'bold'}}>
            <div>
            <a href='/' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Home</a>
            <a href='/sell' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Sell</a>
            <a href='/mando' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Browse</a><br />
    
            <button 
                style={{backgroundColor:"red", 
                color:'white',
                fontWeight:"900", 
                margin:"30px",
                float:"right",
                width: "8%",
                height: "30px",
                boxShadow:"2px 2px black"
            }}
                onClick={deleteHandler}>Buy</button>
            </div>

    
            <div style={{border:"solid", margin:"30px", padding:"10px", backgroundColor: 'white', color: 'black', width: '50%', margin:"5% 25% 10% 25%"}}>
            <div style={{margin:'30px'}}>
    
                <h1 style={{alignItems: 'center'}}>{mando.make}</h1>
                <h2>{mando.modelName}</h2>
            </div>
                    <h3>Year <span style={{marginLeft:"50px"}}>{mando.year}</span></h3>
                    <h3>Price <span style={{marginLeft:"50px"}}>{mando.price}</span></h3>
                    <h3>Description: <span style={{marginLeft:"24px"}}>{mando.description}</span></h3>
                    <h3>Contact information: <span style={{marginLeft:"50px"}}>{mando.contact}</span></h3>
    
                    <div style={{display:"flex"}}>
    

    
                </div>
    
                <div>
                <a href='/mando' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "#000"}}>Back</a>
                    <button style={{color:"white", backgroundColor:"green", boxShadow:"2px 2px black", marginLeft:"50px", width:"15%", cursor: "pointer"}}>Contact {mando.contact}</button>
                </div>
            </div>
    
        </div>
    
        )
    }
    
export default OneMando


