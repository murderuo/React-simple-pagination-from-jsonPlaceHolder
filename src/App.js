import "./App.css";
import PostLister from "./components/PostLister";

function App() {
  return (
    <>
      <div className="App">
        <h1>Json Placeholder Posts</h1>
        <hr />
      </div>
      <div className="main">
        <PostLister />
       
      </div>
    </>
  );
}

export default App;
