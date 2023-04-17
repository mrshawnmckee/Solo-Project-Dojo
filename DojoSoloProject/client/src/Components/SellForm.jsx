import {useState, useEffect} from 'react';
import axios from 'axios'
import image from "../img/mandoImage2.jpg";

const SellForm = (props) => {
    const [make, setMake] = useState("");
    const [modelName, setModelName] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");

    //Validation
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/sell", {
                make,
                modelName,
                year,
                price,
                description,
                contact
            })
            .then((res) => {
                console.log(res.data)
                setMake("")
                setModelName("")
                setYear("")
                setPrice("")
                setDescription("")
                setContact("")
            })
            .catch((err) => {
                console.log(err)
                console.log("Validation Error from the back end")
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div style={{backgroundImage: `url(${image})`, color: "#fff", backgroundSize: 'cover', height: '100vh', fontSize: "30px", fontWeight: 'bold'}}>
            <a href='/' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Home</a>
            <a href='/sell' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Sell</a>
            <a href='/mando' style={{margin:"10px 30px 10px 30px", textDecoration:'none', color: "white"}}>Browse</a>

            
            <h1>Sell your instrument</h1>

            <form onSubmit={onSubmitHandler}>
                <div>
                    <div>
                        <label style={{display: 'inline-block'}}>Make</label><br />
                        <input style= {{}}
                            type="text" 
                            onChange={(e) => setMake(e.target.value)}
                            //value={Make}
                            />
                        {errors.make ? <span style={{margin: '10px',color:"red", fontWeight: 'normal'}}>{errors.make.message}</span> : null}
                    </div>

                    <div>
                        <label style={{display: 'inline-block', marginRight: '10px'}}>Model</label><br />
                        <input style= {{}}
                            type="text" 
                            onChange={(e) => setModelName(e.target.value)}
                            //value={Model}
                            />
                        {errors.modelName ? <span style={{margin: '10px',color:"red", fontWeight: 'normal'}}>{errors.modelName.message}</span> : null}
                    </div>

                    <div>
                        <label>Year</label><br />
                        <input
                            type="text" 
                            onChange={(e) => setYear(e.target.value)}
                            //value={Year}
                            />
                        {errors.year ? <span style={{margin: '10px',color:"red", fontWeight: 'normal'}}>{errors.year.message}</span> : null}
                    </div>

                    <div>
                        <label>Price</label><br />
                        <input
                            type="text" 
                            onChange={(e) => setPrice(e.target.value)}
                            //value={price}
                            />
                        {errors.price ? <span style={{margin: '10px',color:"red", fontWeight: 'normal'}}>{errors.price.message}</span> : null}
                    </div>

                    <div>
                        <label>Description</label><br />
                        <input
                            type="text" 
                            onChange={(e) => setDescription(e.target.value)}
                            //value={Description}
                            />
                        {errors.description ? <span style={{margin: '10px',color:"red", fontWeight: 'normal'}}>{errors.description.message}</span> : null}
                    </div>

                    {/* <div>
                        <label htmlFor="">Photos</label>
                        <input type="file" name="photo"/>
                    </div> */}

                    <div>
                        <label>Contact Information</label><br />
                        <input
                            type="email" 
                            onChange={(e) => setContact(e.target.value)}
                            //value={Make}
                            />
                        {errors.contact ? <span style={{margin: '10px',color:"red", fontWeight: 'normal'}}>{errors.contact.message}</span> : null}
                    </div>

                    <button style={{cursor: 'pointer', width: '50px', height: '20px', textAlign: 'center'}}>Submit</button>

                </div>
            </form>



        </div>
    )
}

export default SellForm