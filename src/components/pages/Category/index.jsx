import Card1 from "./Components/procard"
import SidebarNav from "./Components/sidebarnav"

const Category = () => {
    return ( <div style={{width:'100%'}} className="d-flex container-fluid">
        <SidebarNav/>
        <Card1/>    
        </div> );
}
 
export default Category;