import React from "react";
import { Avatar, CardContent, InputAdornment, OutlinedInput } from "@mui/material";
import { Link } from "react-router-dom";
import "./Comment.scss";


const Comment = (props) => {
    const {text, userId, userName} = props;

    return(
        <CardContent className = "comment">

            <OutlinedInput 
                disabled
                id="outlined-adornment-amount"
                multiline
                inputProps={{ maxLength : 25}}
                fullWidth
                value = {text}
                startAdornment = {
                    <InputAdornment position="start" >
                        <Link className="link" to={{pathname : '/users/' + userId}}>
                            <Avatar className="small" aria-label="recipe">
                                {userName.charAt(0).toUpperCase()}
                                
                            </Avatar>
                        </Link>
                    </InputAdornment>
                }
                style={{ color: "black", backgroundColor: "white" }}
            >

            </OutlinedInput>

        </CardContent>
    )
}

export default Comment;