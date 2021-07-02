import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Input, StyledRow , StyledButton , Msg } from "../../../../styles/pages/delivery";
import axios from "axios";
import { Slab } from "../../../../styles/themes/font-styles";
import { RiPencilFill } from "react-icons/ri";
import { FaEraser , FaSave } from "react-icons/fa";
import SideNav from "../SideNav";
import { NavDiv } from "../../../../styles/pages/profile-page";
import { fetchResult, postApi } from "../../../../services/api/loaded-services";
import { ApiPostService } from "../../../../services/api/api-services";
import { retriveDetails } from "../../../../services/storage/details";

const DeliveryInformation = () =>{
    const [fname,setfName]=useState( '' )
    const [lname,setlName]=useState( "" )
    const [phno,setPhno]=useState( "" )
    const [address,setAddress]=useState( "" )
    const [pin,setPin]=useState( "" )
    const [city,setCity]=useState( "" )
    const [state,setState]=useState( "" )
    const [err,setErr]=useState("")
    const [msg,setMsg]=useState("")

    function assign(data){
        console.log('data', data)
        var name=data.deliveryName.split(" ");
        setfName(name[0])
        setlName(name[1])
        setPhno(data.phoneNumber)
        setAddress(data.address)
        // console.log(data.pincode)
        data.pincode === 0 ? setPin("") : setPin(data.pincode) 
        setCity(data.city)
        setState(data.state)
    }

    let userId = retriveDetails()
        
    useEffect(() => {
        async function fetchdata(){
            await postApi("profile")
            let det = await fetchResult("delivery")
            assign(det)
        }
        fetchdata()
	}, [])
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
        let delName=fname+" "+lname;
        setMsg("Your Address have been Updated!")
        console.log('cuid', pin)
        let op = ApiPostService(process.env.REACT_APP_DELIVERYUPDATE, { 
            'customer': userId.id, 
            'phoneNumber': phno , 
            'address': address,
            'deliveryName': delName,
            'pincode': pin,
            'nation': 'India',
            'state': state,
            'city': city,
            })
        console.log('output',op)
    }
    
    useEffect(() => {
        async function getpin(){
            let a={pin}
            await axios.get(`https://api.postalpincode.in/pincode/`+a.pin)
            .then((res) => {
                // console.log(res);
                let cy=res.data[0].PostOffice[0]
                setCity(cy.District)
                setState(cy.State)
            })
            .catch((err) => {
                // console.log(err)
                setCity('')
                setState('')
            })
        }
        getpin()
    },[pin])

    return (
        <Container fluid style={{clear: 'both', overflow: 'hidden', marginTop:'9%'}}>
            <Row>

                <SideNav />

                <Col lg={10} md={10} xs={12} style={{overflow:'hidden'}}>
                    <NavDiv type="main" mobile="diff" style={{paddingTop:'1.5em'}}>
                    <h2 style={{textAlign:"center", fontFamily:Slab, color:"purple", textTransform:'uppercase' }}>Delivery Information</h2>
                    <hr style={{width: '70%', margin:"auto"}} />
                    <StyledButton className='form-control' onClick={reset} style={{display:'none', backgroundColor:'#FFB400', border:'none'}} id="clear">Clear<FaEraser className="mx-1 mb-1" size='16' /></StyledButton>
                    <StyledButton className='form-control' onClick={edit} style={{backgroundColor:'#0058E6', border:'none'}} id="edit">Edit<RiPencilFill className="mx-1 mb-1" size='16' /></StyledButton>
                    <br />
                    <StyledRow style={{clear:'both'}}>
                        <Col lg={5} xs={7} md={5}>
                            <div className="form-floating mb-3">
                                <Input width="full" type="text" className="form-control info" id="firstName" value={fname} readOnly onChange={e=>setfName(e.target.value)} />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                        </Col>
                        <Col lg={5} xs={5} md={5}>
                            <div className="form-floating mb-3">
                                <Input style={{width:'80%'}} type="text" className="form-control info" id="lasttName" value={lname} readOnly onChange={e=>setlName(e.target.value)} />
                                <label htmlFor="lasttName">Last Name</label>
                            </div>
                        </Col>
                    </StyledRow>
                    <StyledRow>
                        <Col>
                            <div className="form-floating mb-3">
                                <Input type="number" className="form-control info" id="phone" value={phno} readOnly onChange={e=>setPhno(e.target.value)} />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Input type="text" className="form-control info" id="address" value={address} readOnly onChange={e=>setAddress(e.target.value)} />
                                <label htmlFor="address">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Input type="number" className="form-control info" id="pin" value={pin} readOnly onChange={e=>setPin(e.target.value)} />
                                <label htmlFor="pin">PinCode</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Input type="text" className="form-control info" id="district" value={city} readOnly />
                                <label htmlFor="district">District</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Input type="text" className="form-control info" id="state" value={state} readOnly />
                                <label htmlFor="state">State</label>
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