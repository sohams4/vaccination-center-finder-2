import react from 'react' ;
const findByDistrict = ({handleSubmit}) =>
{
    const findByDistrict = (event) =>
    {
        handleSubmit(event,"district")
    }
return(
 <div>
    <form onSubmit={findByDistrict} >
        <label htmlFor="district">
            Select Your District:
            <input id="district" type="Text" />
        </label>    
    </form>
 </div>   
)}

export default FindByDistrict;