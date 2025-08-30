import { useContext } from "react";
import { ProfileContext } from "./profileContext";

export default function Profile(){
    const profile = useContext(ProfileContext);
    return(
        <>
            <h4>Profile</h4>
            <span>Hello {profile}</span>
        </>
    )
}