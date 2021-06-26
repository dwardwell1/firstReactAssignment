const App = () => (
   
    <div>
        <Person name="danny" age="18" hobbies={["fishing", "dishing"]} />
        <Person name="paul" age="12" hobbies={["games", "cigarettes"]} />
        <Person name="nana" age="101" hobbies={["crime", "petty crimes"]} />
        <Person name="Huee" age="21" hobbies={["Dinosaurs", "Animals", "zoos", "squirrels"]} />
        
        
    </div>

)


ReactDOM.render(<App/>, document.getElementById("root"))