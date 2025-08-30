export default function ProfileForm({name, setName}){

    function handleChange(e) {
        setName(e.target.value);
    }


    return(
        <div className="d-flex justify-content-center">
            <input type="text" className="form-control w-25 text-center" value={name} onChange={handleChange} />
        </div>
    )
}