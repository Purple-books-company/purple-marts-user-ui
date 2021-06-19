import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import Card1 from "./Components/procard"
import SidebarNav from "./Components/sidebarnav"
import {TopButton} from "../../../styles/pages/category-styles" 

const Category = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
};
    window.addEventListener('scroll', toggleVisible);
    return ( <div style={{width:'100%'}} className="d-flex container-fluid">
        <SidebarNav/>
        <Card1/> 
        <TopButton>
            <FaArrowCircleUp onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
        </TopButton>   
        </div> );
}
 
export default Category;