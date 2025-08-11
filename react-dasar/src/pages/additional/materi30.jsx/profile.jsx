import { useContext } from "react";
import { ProfileContext } from "./profileContext";

export default function Profile(){
    const profile = useContext(ProfileContext);
    return(
        <>
            <h2>Profile</h2>
            <span>Hello {profile}</span>
        </>
    )
}