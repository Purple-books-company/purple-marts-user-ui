import React, {useState,useRef} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import Card1 from "./Components/procard"
import SidebarNav from "./Components/sidebarnav"
import {TopButton} from "../../../styles/pages/category-styles" 

const Category = () => {
  const childRef = useRef();
  const [visible, setVisible] = useState(false)
  const [cat,setCat] = useState("Electronics")
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
    const sendCategory = (index) => { 
      childRef.current.fetchCategory(index)
      console.log("set",index)
    };
    
    return ( <div style={{width:'100%'}} className="d-flex container-fluid">
        <SidebarNav sendCategory={sendCategory}/>
        <Card1 ref={childRef}/> 
        <TopButton>
            <FaArrowCircleUp onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
        </TopButton>   
        </div> );
}
 
export default Category;