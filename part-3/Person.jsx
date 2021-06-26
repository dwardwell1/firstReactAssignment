const Person = ({name, age, hobbies}) => {
    return (<div> <p>Learn some information aboput this person: Name is {name}, age is {age}</p>
        <h4>{age > 17 ? "please go vote" : "you must be 18"}</h4>
        <h2>My Hobbies:</h2>
        <ul>{hobbies.map(t => 
            (
            <li>

                 <b>{t}</b>
                
                </li>
            )
            )}
            </ul>
        </div>
        )
}