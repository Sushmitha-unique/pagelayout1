import React from "react";
import Pagelayout from "./Component/Pagelayout";
import Relativelist from "./Component/Relativelist";

const names =["sushmitha","rahul","ravi","bindhu"]

const App = () => {
    return(
        <div>
<Pagelayout
header = "Welcome to my website "
child  = " This is the content of my website"
footer = "&copy; 2023 My Website.All rights reserved"
/>
<ol>
{
names.map((Rname,index) =>(
    <Relativelist
     name={Rname}
     index={index}
    />
))
}
</ol>
</div>);
} 


export default App;