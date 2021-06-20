import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Input, StyledRow , StyledButton , Msg } from "../../../../styles/pages/delivery";
import data from "../../../../api/DeliveryInfo.json";
import axios from "axios";
import { Slab } from "../../../../styles/themes/font-styles";
import { RiPencilFill } from "react-icons/ri";
import { FaEraser , FaSave } from "react-icons/fa";
import SideNav from "../SideNav";
import { NavDiv } from "../../../../styles/pages/profile-page";

const DeliveryInformation = () =>{
    const [fname,setfName]=useState( data.fname )
    const [lname,setlName]=useState( data.lname )
    const [phno,setPhno]=useState( data.phno )
    const [address,setAddress]=useState( data.address )
    const [pin,setPin]=useState( data.pin )
    const [city,setCity]=useState( data.city )
    const [state,setState]=useState( data.state )
    const [err,setErr]=useState("")
    const [msg,setMsg]=useState("")

    const edit= () =>{
        var TextElements = document.getElementsByClassName("info");
        
        document.getElementById('clear').style['display']="block";
        document.getElementById('save').style['display']="block";
        document.getElementById('edit').style['display']="none";

        for (var i = 0, max = TextElements.length; i < max; i++) {
            TextElements[i].removeAttribute("readOnly")
        }
        setErr("")
        setMsg("")
    }
    const reset= () =>{
        setfName("");
        setlName("");
        setPhno("");
        setAddress("");
        setPin("");
        setCity("");
        setState("");
    }
    const save =() =>{
        if (fname==="" || lname==="" || phno==='' || address==="" || pin===""|| city==="" || state==="") {
            setErr("All fields are required!")
            return;
        }
        if(phno.length<10 || phno.length>10){
            setErr('Enter a valid phone number!')
            return;
        }
        if(pin.length<6 || pin.length>6){
            setErr('Enter a valid pincode!')
            return;
        }
        setErr("")
        var TextElements = document.getElementsByClassName("info");
        for (var i = 0, max = TextElements.length; i < max; i++) {
            TextElements[i].readOnly = true;
        }
        document.getElementById('clear').style['display']="none";
        document.getElementById('save').style['display']="none";
        document.getElementById('edit').style['display']="block";
        setMsg("Your Address have been Updated!")
    }
    let a={pin}
    useEffect(async () => {
        await axios.get(`https://api.postalpincode.in/pincode/`+a.pin)
        .then((res) => {
            console.log(res);
            let cy=res.data[0].PostOffice[0]
            setCity(cy.District)
            setState(cy.State)
        })
        .catch((err) => {
            console.log(err)
            setCity('')
            setState('')
        })
    },[pin])

    return (
        <Container fluid style={{clear: 'both', overflow: 'hidden'}}>
            <Row>

                <SideNav />

                <Col lg={10} md={10} xs={12} style={{overflow:'hidden'}}>
                    <NavDiv type="main" mobile="diff">
                    <h2 style={{textAlign:"center", fontFamily:Slab, color:"purple", textTransform:'uppercase' }}>Delivery Information</h2>
                    <hr style={{width: '70%', margin:"auto"}} />
                    <StyledButton className='form-control' onClick={reset} style={{display:'none', backgroundColor:'#FFB400', border:'none'}} id="clear">Clear<FaEraser className="mx-1 mb-1" size='16' /></StyledButton>
                    <StyledButton className='form-control' onClick={edit} style={{backgroundColor:'#0058E6', border:'none'}} id="edit">Edit<RiPencilFill className="mx-1 mb-1" size='16' /></StyledButton>
                    <br />
                    <StyledRow style={{clear:'both'}}>
                        <Col lg={5} xs={7} md={5}>
                            <div class="form-floating mb-3">
                                <Input width="full" type="text" className="form-control info" id="floatingInput" value={fname} readOnly onChange={e=>setfName(e.target.value)} />
                                <label for="floatingInput">First Name</label>
                            </div>
                        </Col>
                        <Col lg={5} xs={5} md={5}>
                            <div class="form-floating mb-3">
                                <Input style={{width:'80%'}} type="text" className="form-control info" id="floatingInput" value={lname} readOnly onChange={e=>setlName(e.target.value)} />
                                <label for="floatingInput">Last Name</label>
                            </div>
                        </Col>
                    </StyledRow>
                    <StyledRow>
                        <Col>
                            <div class="form-floating mb-3">
                                <Input type="number" className="form-control info" id="floatingInput" value={phno} readOnly onChange={e=>setPhno(e.target.value)} />
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <Input type="text" className="form-control info" id="floatingInput" value={address} readOnly onChange={e=>setAddress(e.target.value)} />
                                <label for="floatingInput">Address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <Input type="number" className="form-control info" id="floatingInput" value={pin} readOnly onChange={e=>setPin(e.target.value)} />
                                <label for="floatingInput">PinCode</label>
                            </div>
                            <div class="form-floating mb-3">
                                <Input type="text" className="form-control info" id="floatingInput" value={city} readOnly onChange={e=>setCity(e.target.value)} />
                                <label for="floatingInput">District</label>
                            </div>
                            <div class="form-floating mb-3">
                                <Input type="text" className="form-control info" id="floatingInput" value={state} readOnly onChange={e=>setState(e.target.value)} />
                                <label for="floatingInput">State</label>
                            </div>
                        </Col>
                    </StyledRow>
                    <Msg type='err' style={{color:'#F83535'}}>{err}</Msg>
                    <StyledButton className='form-control ' onClick={save} style={{display:'none', backgroundColor:'#00A550' }} type='save' id="save">Save<FaSave className="mx-1 mb-1" size='16' /></StyledButton>
                    <Msg style={{marginLeft:'16rem', color:'#00A550'}}>{msg}</Msg>
                    <br />
                    </NavDiv>
                </Col>
                
            </Row>
        </Container>
    );
};

export default DeliveryInformation;