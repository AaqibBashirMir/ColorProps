import logo from './logo.svg';
import './App.css';
import ColorCard from './Components/ColorCard';
import data from './Components/Color';



function App() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>ColorCards</h1>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "100px", justifyContent: "center" }}>


        {
          data.map((color) => <ColorCard name={color.name} colorCode={color.colorcode} />)
        }

      </div>
    </>

  );
}

export default App;
