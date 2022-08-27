import React from "react";


const Navigation = ({onRouteChange,isSignedIn}) => {
        if(isSignedIn){
            return(
                // flexbox enabled , content to end of flex box
                <nav style={{display:"flex",justifyContent:"flex-end"}}>
                    {/* font size - 3 , make it link , color black , underline , padding 3 , act as a pointer upon hover */}
                    <p 
                        onClick={() => onRouteChange('signIn')}
                        className="f3 link dim black underline pa3 pointer">
                        Sign Out
                    </p>  
                </nav>
            );
        } else{
            return(
                <div>
                    <nav style={{display:"flex",justifyContent:"flex-end"}}>
                        {/* font size - 3 , make it link , color black , underline , padding 3 , act as a pointer upon hover */}
                        <p 
                            onClick={() => onRouteChange('home')}
                            className="f3 link dim black underline pa3 pointer">
                            Sign In
                        </p> 
                        {/* font size - 3 , make it link , color black , underline , padding 3 , act as a pointer upon hover */}
                        <p 
                            onClick={() => onRouteChange('Register')}
                            className="f3 link dim black underline pa3 pointer">
                            Register
                        </p>   
                    </nav>
                </div>
            );
        }
}

export default Navigation;