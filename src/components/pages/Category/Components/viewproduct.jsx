import React, {useState,useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import Card2 from "./productCard"
// import SidebarNav from "./sidebarnav"
import {TopButton} from "../../../../styles/pages/category-styles"
import { useParams } from "react-router-dom";
import { fetchResult } from '../../../../services/api/loaded-services';
const Products = () => {
    const [visible, setVisible] = useState(false)
    const [data, setData]= useState({})
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
  const params = useParams();
  useEffect(() => {
    console.log("proparams",params.id);
    async function fetchdata() {
     let res = await fetchResult("singleproduct",params.id)
     setData(res);
     console.log("res",res)
    }
    fetchdata();
  }, [])
    window.addEventListener('scroll', toggleVisible);
    return ( <div class="d-flex" style={{clear:'both',display:'flex',justifyContent:'center'}}> 
        {/* <SidebarNav/> */}
        <Card2 item={data}/>  
        <TopButton>
            <FaArrowCircleUp onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
        </TopButton>    
        </div> );
}
 
export default Products;