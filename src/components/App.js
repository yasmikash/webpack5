import "../styles/sass/main.scss";
import image from "../resources/yasmikash.jpg";

const App = () => {
  return (
    <div className="header">
      <div>
        <img src={image} />
      </div>
      <h1 className="header_text">Nodemass Store</h1>
    </div>
  );
};

export default App;
