import React, { useState,useEffect} from "react";
import $ from 'jquery';
import { GoGrabber } from "react-icons/go";
import {AiFillCaretDown} from 'react-icons/ai';
import { Links,ListGroup, PageContentWrapper, SidebarHeading, SidebarWrapper, Toggle, UnorderedList } from "../../../../styles/pages/category-styles";
import { Lora } from "../../../../styles/themes/font-styles";

const SidebarNav = () => {
  const [showGifts, setShowGifts] = useState(false);
  const [showGadgets, setShowGadgets] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    console.log("rendered");
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(this).siblings().find('li').removeClass('active');
    });
  })
  return (
      <div className="d-flex MainDiv">
        { showSidebar &&
        <div>
          <nav>
              <SidebarWrapper className="sidebar_wrapper">
                                <SidebarHeading className="sidebar-heading">
                                  <Lora>Category
                                  </Lora>
                                </SidebarHeading>
                                <ListGroup className="list-group">
                                  <UnorderedList>
                                    <li className="active">
                                      <Links href="#">All Categories</Links>
                                    </li>
                                    <li>
                                      <Links
                                        href="#"
                                        className="category1"
                                        onClick={() => setShowGadgets(!showGadgets)}
                                      >
                                        Gadgets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span><AiFillCaretDown/></span>
                                      </Links>
                                      {showGadgets && (
                                        <ul className="category1-show">
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
                                        className="category2"
                                        onClick={() => setShowGifts(!showGifts)}
                                      >
                                        Gifts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span><AiFillCaretDown/></span>
                                      </Links>
                                      {showGifts && (
                                        <ul className="category2-show">
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
                            </nav><nav>Hello</nav>
                              </div>}
          <PageContentWrapper id="page-content-wrapper">
              <Toggle id="menu-toggle"
                      onClick={() => setShowSidebar(!showSidebar)}>
                         < GoGrabber/>
              </Toggle>
            {/* card */}
          </PageContentWrapper>
        </div>
  );
}

export default SidebarNav;
