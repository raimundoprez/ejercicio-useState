import './App.css'
import { useState } from 'react'

function App() {
    const [name, setName] = useState("Sofía");
    const [newName, setNewName] = useState("");

    const changeName = e => {
        e.preventDefault();

        if (newName.length) {
            setName(newName);
            setNewName("");
        }
    };

    return (
        <div>
            <h2>Teacher Name: {name}</h2>

            <ul>
                <li onClick={() => setName("Data")}>Data</li>
                <li onClick={() => setName("Reyes")}>Reyes</li>
                <li onClick={() => setName("Yolanda")}>Yolanda</li>
            </ul>

            <form onSubmit={changeName}>
                <label htmlFor="change-name-input">Nuevo nombre:</label>
                <input id="change-name-input" type="text" value={newName} onChange={e => setNewName(e.target.value)} required/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

export default App
