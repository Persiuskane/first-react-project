import reactLogo from "./assets/react.svg";
import reactLogoCrop from "./assets/react-cropped.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} alt="React Logo" className="logo" />
      <p className="logoText">React Facts</p>
    </header>
  );
}

function Content() {
  return (
    <main className="main">
      <div className="bgLogo">
        <img src={reactLogoCrop} alt="React Logo" className="bgLogoImg" />
      </div>
      <div className="content">
        <h1 className="heading">Fun facts about React</h1>
        <ul className="factList">
          <li className="fact">Was first released in 2013</li>
          <li className="fact">Was originally created by Jordan Walke</li>
          <li className="fact">Has well over 200k stars on GitHub</li>
          <li className="fact">Is maintained by Meta(Include Vomit emoji) </li>
          <li className="fact">
            Powers thousands of enterprise Apps, Including Mobile ones
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
