import { useContext } from "react";
import { ProfileContext } from "./profileContext";

export default function ProfileAddress() {
    const profile = useContext(ProfileContext);
    return(
        <>
            <h4>Profile Address</h4>
            <span>Alamat {profile}</span>
        </>
    )
}