import React, { useState,useEffect} from "react";
import $ from 'jquery';
import { GoGrabber } from "react-icons/go";
import {AiFillCaretDown,AiOutlinePlus} from 'react-icons/ai';
import {Links,ListGroup, PageContentWrapper, PriceLink, RadioGroup, SidebarHeading, SidebarWrapper, SizeLink, Toggle, TogglePrice, UnorderedList } from "../../../../styles/pages/category-styles";
import { Lora } from "../../../../styles/themes/font-styles";

const SidebarNav = () => {
  const [showGifts, setShowGifts] = useState(false);
  const [showGadgets, setShowGadgets] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const[radioPrice,SetRadioPrice] = useState('₹100 - ₹200');
  const[radioSize,SetRadioSize] = useState('S');
  useEffect(() => {
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(this).siblings().find('li').removeClass('active');
    });
    $('div input').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
  })
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
                                    <li className="active">
                                      <Links href="#">All Categories</Links>
                                    </li>
                                    <li>
                                      <Links
                                        href="#"
                                        onClick={() => setShowGadgets(!showGadgets)}
                                      >
                                        Gadgets
                                        <AiOutlinePlus style={{float:'right'}}/>
                                      </Links>
                                      {showGadgets && (
                                        <ul>
                                          <li>
                                            <Links href="#">Phone Cases
                                            </Links>
                                          </li>
                                          <li>
                                            <Links href="#">Headsets
                                            </Links>
                                          </li>
                                        </ul>
                                      )}
                                    </li>
                                    <li>
                                      <Links
                                        href="#"
                                        onClick={() => setShowGifts(!showGifts)}
                                      >
                                        Gifts
                                        <AiOutlinePlus style={{float:'right'}}/>
                                      </Links>
                                      {showGifts && (
                                        <ul>
                                          <li>
                                            <Links href="#">Pillow
                                            </Links>
                                          </li>
                                          <li>
                                            <Links href="#">Lamp
                                            </Links>
                                          </li>
                                        </ul>
                                      )}
                                    </li>
                                    <li>
                                      <Links href="#">Groceries</Links>
                                    </li>
                                    <li>
                                      <Links href="#">Cosmetics</Links>
                                    </li>
                                  </UnorderedList>
                                </ListGroup>
                              </SidebarWrapper>
                            </nav><nav>
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