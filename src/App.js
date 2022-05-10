import Todos from "./Components/Todos";


function App() {
  return (
    <div>
      <h1>To Dos</h1>
      <Todos text="Title1" />
      <Todos text="Title2" />
      <Todos text="Title3" />
    </div>
  );
}

export default App;
