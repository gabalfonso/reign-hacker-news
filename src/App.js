import "./App.css";
import React from "react";
import Comments from "./components/comments";

function App() {
    // const [fetchedData, setFetchedData] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await axios.get(
    //             "https://jsonplaceholder.typicode.com/todos/1"
    //         );
    //         setFetchedData(data);
    //     };
    //     getData();
    // }, []);

    // console.log("Hola data: ", fetchedData);

    return (
        <div className="App">
            <div className="Rectangle-Header">
                <span className="HACKER-NEWS">HACKER NEWS</span>
            </div>

            <main className="container">
                <h1>Hello World</h1>
                <Comments />
            </main>
        </div>
    );
}

export default App;
