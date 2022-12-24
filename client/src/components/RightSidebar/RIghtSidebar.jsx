import React  from "react";
import './Rightsidebar.css'
import Widget from './WIdget'
import WidgetTags from './WIdgetTags'



const RightSidebar =()=>{
    return(
        <aside className="right-sidebar">
            <Widget/>
            <WidgetTags/>
        </aside>
        

    )
}

export default RightSidebar