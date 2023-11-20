// App.js
function Hello() {
  return <p>Hello, React!</p>;
}

// App.js
function Bye() {
  return <p>Goodbye, React!</p>;
}

// App.js
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <Bye />
      <Bye />
      <Bye />
    </div>
  );
}

export default App;