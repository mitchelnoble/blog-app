import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}
