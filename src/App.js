import './App.css';

const numberOne = [1, 2, 3];
const numberTwo = [4, 5, 6];
const numberCombined = [...numberOne, ...numberTwo];

const num1 = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = num1;

// const myVehicle = {
//   brand: "ford",
//   model: "Mustang",
//   color: "red"
// }

// const updateMyVehicle = {
//   type: "car",
//   color: "blue",
//   year: 2024
// }

// const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

// function renderApp() {
//   document.getElementById("demo").innerHTML = "welcome";
// }
// function renderLogin() {
//   document.getElementById("demo").innerHTML = "please login"
// }
// let authenticated = true;
// authenticated ? renderApp() : renderLogin();
function App() {
  return (
    <div className="App">
      <p>{numberCombined}</p>
      <p>{one}</p>
      <p>{two}</p>
      <p>{rest}</p>
      <h1 id='demo'>hello</h1>
    </div>
  );
}

export default App;
