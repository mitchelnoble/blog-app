import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
