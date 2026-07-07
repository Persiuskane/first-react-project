import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="src/assets/react.svg" alt="rect" className="logo" />
      <nav className="nav">
        <ul className="navli">
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>React Facts</h1>
      <ol>
        <li>React is Great</li>
        <li>
          React is Great.React is Great.React is Great.React is Great.React is
          Great.
        </li>
        <li>
          I Love React beacuse React is Great.React is Great.React is
          Great.React is Great.React is Great.
        </li>
        <li>Dope</li>
      </ol>
    </main>
  );
}

export default App;
