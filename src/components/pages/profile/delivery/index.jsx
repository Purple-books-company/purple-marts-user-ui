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
    const [details,setDetails]= useState( 
        { fname:'', lname:'' , phno:'' , address:'' , pin:'' , city:'' ,state:'' }
    )
    const [msg,setMsg]=useState({ err:'', msg:'' })

    const handleChange = e => {
        const { name, value } = e.target;
        setDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function assign(data){
        console.log('data', data)
        var name=data.deliveryName.split(" ");
        var pincode= data.pincode === 0 ? "" : data.pincode
        setDetails({
            'fname':name[0] ,
            'lname': name[1],
            'phno':data.phoneNumber ,
            'address':data.address,
            'pin':pincode,
            'city':data.city,
            'state':data.state});
    }

    function messages(name, str){
        setMsg(prevState => ({
            ...prevState,
            [name]: str
         }));
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
        messages('err',"")
        messages('msg',"")
    }
    const reset= () =>{
        setDetails({ fname:'', lname:'' , phno:'' , address:'' , pin:'' , city:'' ,state:'' })
    }
    const save =() =>{
        if (details.fname==="" || details.lname==="" || details.phno==='' || details.address==="" || details.pin===""|| details.city==="" || details.state==="") {
            messages('err',"All fields are required!")
            return;
        }
        if(details.phno.length<10 || details.phno.length>10){
            messages('err', 'Enter a valid phone number!')
            return;
        }
        if(details.pin.length<6 || details.pin.length>6){
             messages('err', 'Enter a valid pincode!')
            return;
        }
        messages('err','')
        var TextElements = document.getElementsByClassName("info");
        for (var i = 0, max = TextElements.length; i < max; i++) {
            TextElements[i].readOnly = true;
        }
        document.getElementById('clear').style['display']="none";
        document.getElementById('save').style['display']="none";
        document.getElementById('edit').style['display']="block";
        let delName=details.fname+" "+details.lname;
        let op = ApiPostService(process.env.REACT_APP_DELIVERYUPDATE, { 
            'customer': userId.id, 
            'phoneNumber': details.phno , 
            'address': details.address,
            'deliveryName': delName,
            'pincode': details.pin,
            'nation': 'India',
            'state': details.state,
            'city': details.city,
        })
        messages('msg','Your Address have been Updated!')
    }
    
    useEffect(() => {
        async function getpin(){
            let a={details}
            await axios.get(`https://api.postalpincode.in/pincode/`+a.details.pin)
            .then((res) => {
                let cy=res.data[0].PostOffice[0]
                setDetails(prevState => ({
                    ...prevState,
                    city: cy.District,
                    state: cy.State
                 }));
            })
            .catch((err) => {
                console.log(err)
                setDetails(prevState => ({
                    ...prevState,
                    city: '',
                    state: ''
                 }));
            })
        }
        getpin()
    },[details.pin])

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
                                <Input width="full" type="text" className="form-control info" id="firstName" value={details.fname} readOnly onChange={handleChange} name="fname" />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                        </Col>
                        <Col lg={5} xs={5} md={5}>
                            <div className="form-floating mb-3">
                                <Input style={{width:'80%'}} type="text" className="form-control info" id="lasttName" value={details.lname} readOnly onChange={handleChange} name='lname'/>
                                <label htmlFor="lasttName">Last Name</label>
                            </div>
                        </Col>
                    </StyledRow>
                    <StyledRow>
                        <Col>
                            <div className="form-floating mb-3">
                                <Input type="number" className="form-control info" id="phone" value={details.phno} readOnly onChange={handleChange} name='phno' />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Input type="text" className="form-control info" id="address" value={details.address} readOnly onChange={handleChange} name='address' />
                                <label htmlFor="address">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Input type="number" className="form-control info" id="pin" value={details.pin} readOnly onChange={handleChange} name='pin' />
                                <label htmlFor="pin">PinCode</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Input type="text" className="form-control info" id="district" value={details.city} readOnly name='district' />
                                <label htmlFor="district">District</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Input type="text" className="form-control info" id="state" value={details.state} readOnly name='state' />
                                <label htmlFor="state">State</label>
                            </div>
                        </Col>
                    </StyledRow>
                    <Msg type='err' style={{color:'#F83535'}}>{msg.err}</Msg>
                    <StyledButton className='form-control ' onClick={save} style={{display:'none', backgroundColor:'#00A550' }} type='save' id="save">Save<FaSave className="mx-1 mb-1" size='16' /></StyledButton>
                    <Msg style={{marginLeft:'16rem', color:'#00A550'}}>{msg.msg}</Msg>
                    <br />
                    </NavDiv>
                </Col>
                
            </Row>
        </Container>
    );
};

export default DeliveryInformation;