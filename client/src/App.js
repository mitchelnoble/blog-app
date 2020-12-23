import "./App.css";
import { Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import AddCard from "./screens/AddScreen/AddCard";
import Layout from "./components/shared/Layout/Layout";
import ExpandedPost from "./screens/ExpandedPost/ExpandedPost";
import PostMan from "./screens/PostMan/PostMan";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/add-card" component={AddCard} />
        <Route path="/expanded-post/:id" component={ExpandedPost} />
        <Route path="/postman" component={PostMan} />
        <Route path="/edit/:id" component={AddCard} />
      </Layout>
    </div>
  );
}

export default App;
