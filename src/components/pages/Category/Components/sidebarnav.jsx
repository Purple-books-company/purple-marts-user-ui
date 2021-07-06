import React, { useState,useEffect} from "react";
import $ from 'jquery';
import PuffLoader from "react-spinners/PuffLoader";
import { fetchResult } from "../../../../services/api/loaded-services";
import { GoGrabber } from "react-icons/go";
import {AiFillCaretDown,AiOutlinePlus} from 'react-icons/ai';
import {Links,ListGroup, PageContentWrapper, PriceLink, RadioGroup, SidebarHeading, SidebarWrapper, SizeLink, Toggle, TogglePrice, UnorderedList,ActiveClass } from "../../../../styles/pages/category-styles";
import { Lora } from "../../../../styles/themes/font-styles";
import {
  useHistory,useParams
} from "react-router-dom";

const SidebarNav = () => {
  const [caturls, setcaturls] = useState([]);
  const [subcaturls, setsubcaturls] = useState([]);
  const [showGadgets, setShowGadgets] = useState({});
  const [showSidebar, setShowSidebar] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const[radioPrice,SetRadioPrice] = useState('₹100 - ₹200');
  const[radioSize,SetRadioSize] = useState('S');
  const [loading, setloading] = useState(true);
  
  const fetchCategories = async () => {
    let categories = [];
    categories = await fetchResult("categories");
    if (categories === null) categories = [];
    setcaturls(categories);
    setloading(false);
    // console.log(caturls[0].name);
    // console.log(caturls);
    setShowGadgets(data=>{
      return {...data,...Array(categories.length).fill(false)}
    });
    // console.log("show",showGadgets);
  };
  const history = useHistory();
  function HandleCategory() {
    if (window.location.pathname === '/category'){
      history.push('/category/All');
    }
  }
  let params = useParams();
  console.log("sdcs",params);
  const fetchSubCategories = async () => {
    let subcategories = [];
    subcategories = await fetchResult("subcategories");
    if (subcategories === null) subcategories = [];
    setsubcaturls([...subcategories]);
    setloading(false);
    // console.log(caturls[0].name);
    console.log("subcat",subcaturls);
  };
  useEffect(() => {
    $('div input').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
    fetchCategories();
    fetchSubCategories();
    HandleCategory();
  },[])
  function handleactiveparent(e){
    let cls=""
    e.target.classList.forEach(a=>{
      cls="."+a+" "
    })
    $(cls).parent("li").removeClass('active');
    $(e.target).parent("li").addClass("active").siblings().removeClass("active");
  }
  function handleactivechildren(e,index){
    let cls=""
    e.target.classList.forEach(a=>{
      cls="."+a+" "
    })
    $(cls).parent("li").removeClass('active');
    console.log(e);
    $(e.target).parent("li").addClass("active");
    $("#category_"+index).addClass("active");

  }
  return (
      <div className="d-flex">
        { showSidebar &&
        <div>
          <nav>
              <SidebarWrapper>
                                <SidebarHeading style={{fontFamily:`${Lora}`}}>
                                  Category
                                </SidebarHeading>
                                <ListGroup>
                                  <UnorderedList>
                                    <ActiveClass className="active">
                                      <Links to={`/category/All`} onClick={(e)=>{handleactiveparent(e); }}>All Categories</Links>
                                    </ActiveClass>
                                    {loading ? <div style={{paddingTop:'8px',display: "flex",justifyContent: "center",alignItems: "center"}}><PuffLoader color={"purple"} size={30} /></div> : 
                                    <>
                                    {caturls.length > 0 &&
                                  caturls.map((url,index) => (
                                    <ActiveClass id={"category_"+index} key={url.name}>
                                      <Links
                                        to={`/category/${url.slug}`}
                                        onClick={(e)=>{handleactiveparent(e); }}
                                      >
                                        {url.name} 
                                         <AiOutlinePlus key={url.name}  onClick={
                                          () => 
                                          {
                                            let temp = showGadgets
                                            temp[index] = !temp[index]
                                            setShowGadgets({...temp})}
                                          }
                                           style={{float:'right'}}/></Links>
                                         {/* {console.log("print",showGadgets[index])} */}
                                             {showGadgets[index] ? (subcaturls.filter(e=>e.category === url.name).map((sub) => (
                                              <ul>
                                                <ActiveClass key={sub.name}>
                                                  <Links 
                                                  to={`/category/${url.slug}/${sub.slug}`}
                                                  onClick={(e)=>{handleactivechildren(e,index);}}>{sub.name}
                                                  </Links>
                                                </ActiveClass>
                                              </ul> 
                                          ))): (<></>)}
                                      
                                    </ActiveClass>
                                      ))}</>}
                                  </UnorderedList>
                                </ListGroup>
                              </SidebarWrapper>
                            </nav>
                            <nav>
              <SidebarWrapper>
                                <SidebarHeading style={{fontFamily:`${Lora}`}} >
                                  <TogglePrice href="#"
                                        onClick={() => setShowPrice(!showPrice)}><AiFillCaretDown/></TogglePrice>&nbsp;Shop By Price
                                </SidebarHeading>   
                                {showPrice && 
                                <RadioGroup>
                                    <input type="radio" className="active" checked={radioPrice === "₹100 - ₹200"} value="₹100 - ₹200" id="₹100 - ₹200" onChange={(e)=>{SetRadioPrice(e.target.value)}}/>
                                    <PriceLink htmlFor="₹100 - ₹200">₹100 - ₹200</PriceLink><br/>
                                    <input type="radio" checked={radioPrice === "₹200 - ₹300"} value="₹200 - ₹300" id="₹200 - ₹300" onChange={(e)=>{SetRadioPrice(e.target.value)}}/>
                                    <PriceLink htmlFor="₹200 - ₹300">₹200 - ₹300</PriceLink><br/>
                                    <input type="radio" checked={radioPrice === "₹300 - ₹400"} value="₹300 - ₹400" id="₹300 - ₹400" onChange={(e)=>{SetRadioPrice(e.target.value)}}/>
                                    <PriceLink htmlFor="₹300 - ₹400">₹300 - ₹400</PriceLink><br/>
                                    <input type="radio" checked={radioPrice === "₹400 - ₹500"} value="₹400 - ₹500" id="₹400 - ₹500" onChange={(e)=>{SetRadioPrice(e.target.value)}}/>
                                    <PriceLink htmlFor="₹400 - ₹500">₹400 - ₹500</PriceLink>
                                  </RadioGroup>}
                              </SidebarWrapper>
                            </nav>
                            <nav>
              <SidebarWrapper>
                                <SidebarHeading style={{fontFamily:`${Lora}`}}>
                                  <TogglePrice  href="#"
                                        onClick={() => setShowSize(!showSize)}><AiFillCaretDown/></TogglePrice>&nbsp;Shop By Size
                                </SidebarHeading>   
                                {showSize && 
                                  <RadioGroup>
                                  <input type="radio" checked={radioSize === "XXL"} value="XXL" id="XXL" onChange={(e)=>{SetRadioSize(e.target.value)}}/>
                                  <SizeLink htmlFor="XXL">XXL</SizeLink><br/>
                                  <input type="radio" checked={radioSize === "XL"} value="XL" id="XL" onChange={(e)=>{SetRadioSize(e.target.value)}}/>
                                  <SizeLink htmlFor="XL">XL</SizeLink><br/>
                                  <input type="radio" checked={radioSize === "L"} value="L" id="L" onChange={(e)=>{SetRadioSize(e.target.value)}}/>
                                  <SizeLink htmlFor="L">L</SizeLink><br/>
                                  <input type="radio" className="active" checked={radioSize === "S"} value="S" id="S" onChange={(e)=>{SetRadioSize(e.target.value)}}/>
                                  <SizeLink htmlFor="S">S</SizeLink>
                                </RadioGroup>
                                }
                              </SidebarWrapper>
                            </nav>
                              </div>}
          <PageContentWrapper>
              <Toggle
                      onClick={() => setShowSidebar(!showSidebar)}>
                         < GoGrabber/>
              </Toggle>
            {/* card */}
          </PageContentWrapper>
        </div>
  );
}

export default SidebarNav;