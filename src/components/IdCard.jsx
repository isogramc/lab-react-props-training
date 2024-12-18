function IdCard(props){
    const {index, picture, firstName, lastName, gender, height, birth} = props;
    const date = new Date(birth);
    const dateString = date.toDateString();

    return(
        <div index={index} className="student-card">
            <img src={picture} alt="image of student"/>
            <div className="student-details">
                <div><strong>First name:</strong> {firstName}</div>
                <div><strong>Last name:</strong> {lastName}</div>
                <div><strong>Gender:</strong> {gender}</div>
                <div><strong>Height:</strong> {height}</div>
                <div><strong>Birthdate:</strong> { birth ? dateString : "" }</div>
            </div>
        </div>
    );  
}
export default IdCard