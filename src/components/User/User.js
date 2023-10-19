import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    let {userId} = useParams() ;

    return(
        <div>
            User!! {userId}
        </div>
    )
}

export default User;