import { useContext } from "react";
import { ProfileContext } from "./profileContext";

export default function ProfileAddress() {
    const profile = useContext(ProfileContext);
    return(
        <>
            <h2>Profile Address</h2>
            <span>Alamat {profile}</span>
        </>
    )
}