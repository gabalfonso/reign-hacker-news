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
                <div className="row justify-content-center pt-4">
                    <div className="col-10 text-start">
                        <span className="HACKER-NEWS">HACKER NEWS</span>
                    </div>
                </div>
            </div>
            <main className="main-area">
                <Comments />
            </main>
        </div>
    );
}

export default App;
