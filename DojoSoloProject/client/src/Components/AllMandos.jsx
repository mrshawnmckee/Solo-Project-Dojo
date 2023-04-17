import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import image from "../img/mandoImage2.jpg";

const MandoList = (props) => {

    const [list, setList] = useState([])
    const navigate = useNavigate()
    useEffect( () => {
        axios.get('http://localhost:8000/api/mando')
        .then((res) => {
            console.log(res.data)
            setList(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])      //dependency array

const tableStyle = {
    border:'2px solid black',
    width:"50%",
    margin: '5% 25% 5% 25%'
}

    return (
        <div style={{backgroundImage: `url(${image})`, color: "#fff", backgroundSize: 'cover', height: '100vh', fontSize: "30px", fontWeight: 'bold'}}>
            <a href='/' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Home</a>
            <a href='/sell' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Sell</a>
            <a href='/mando' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Browse</a>


            <h1>Help these Mandolins find a good home</h1>
            <div >
                <table style={tableStyle}>

                    <tr >
                        <th style={{width:"15%", textAlign:'left', borderRight:"solid black 2px", backgroundColor: '#fff', color:'#000'}}>Make</th>
                        <th style={{width:"15%", textAlign:'left', borderRight:"solid black 2px", backgroundColor: '#fff', color:'#000'}}>Model</th>
                        <th  style={{width:"15%", textAlign:'left', backgroundColor: '#fff', color:'#000'}}>More Information</th>
                    </tr>

                {

                    list.map((mando) => [
                        <tr>
                            <td style={{width:"15%", borderRight:"solid black 2px", backgroundColor: '#fff', color:'#000'}}>{mando.make}</td>
                            <td style={{width:"15%", borderRight:"solid black 2px", backgroundColor: '#fff', color:'#000'}}>{mando.modelName}</td>
                            <td style={{width:"15%", backgroundColor: '#fff', color:'#000'}}>
                                <Link style={{textDecoration: "none", color: '#000'}}  to={`/mando/${mando._id}`}>Click Here | </Link>
                                <Link style={{textDecoration: "none", color: '#000'}} to={`/edit/${mando._id}`}>Edit</Link>
                            </td>

                        </tr>
                    ])
                }
                </table>
            </div>
            

        </div>
    )
}

export default MandoList;