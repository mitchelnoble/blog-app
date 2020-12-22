import "./App.css";
import { Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import AddCard from "./screens/AddScreen/AddCard";
import Layout from "./components/shared/Layout/Layout";
import ExpandedPost from "./screens/ExpandedPost/ExpandedPost";
// import PostDetail from "./screens/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/add-cards" component={AddCard} />
        <Route path="/post-detail/:id" component={ExpandedPost} />
      </Layout>
    </div>
  );
}

export default App;
