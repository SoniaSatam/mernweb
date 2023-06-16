import {Routes,Route} from 'react-router';
import { Navigate, useNavigate } from 'react-router-dom';



const Protectedroute = ({auth, component:Component, ...rest}) => {

    const navigate = useNavigate();
    return (
        <div>
            
            <Route {...rest} render={(props)=>{
                if(auth) return <Component {...props} />
                if(!auth) return <Navigate to={{path : '/', state : {from : props.location}}} />
            }} />
        </div>
    );
}

export default Protectedroute;