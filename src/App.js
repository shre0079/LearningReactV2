import './App.css';
import Header from "./Header";

//Rule1: use parent element
//Rule2: js expressions must be wrapped in {}
//Rule3: can't use if-else but ternary is okay
//Rule4: attribute class = classname

function App() {
    var x=10;
    function updateState() {
        x=15;
    }

    return (
      <>
          <Header name="Shreyash"/>
          <Header name="ohyeah0079"/>
          <Header name="Mr. Shreyash"/>
      </>
  );
}

export default App;
