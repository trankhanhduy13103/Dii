import Header from "./layouts/side/Header";
import "./assets/sass/app.scss";
import Footer from "./layouts/side/Footer";
import Main from "./layouts/side/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
