import Header from "./Header";
import Counter from "./Counter";
import family from "./people";

console.log(family);

function App() {
  return (
    <>
      <Header title="Our Counter" people={family} />
      <Counter />
    </> //Fragment
  );
}

export default App;
