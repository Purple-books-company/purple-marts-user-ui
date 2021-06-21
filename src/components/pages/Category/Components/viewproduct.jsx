import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import Card2 from "./productCard"
import SidebarNav from "./sidebarnav"
import {TopButton} from "../../../../styles/pages/category-styles"

const Products = () => {
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
    return ( <div class="d-flex" style={{clear:'both'}}> 
        <SidebarNav/>
        <Card2/>  
        <TopButton>
            <FaArrowCircleUp onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
        </TopButton>    
        </div> );
}
 
export default Products;