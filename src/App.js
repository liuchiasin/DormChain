import logo from './logo.svg';
import './App.css';

function App  () {
return (
  <div className="container">
    {/* Navbar */}
    <nav className="navbar">
      <h1 className="logo">DormChain</h1>
      <div className="nav-buttons">
        <button className="nav-btn">About us</button>
        <button className="nav-btn">Sign Up!</button>
      </div>
    </nav>

    {/* Main Content */}
    <div className="content">
      {/* Left Content */}
      <div className="text-section">
        <h1 className="title">
          STUDENT DORMITORY <br /> BLOCKCHAIN
        </h1>
        <div className="search-box">
          <input type="text" placeholder="search something here" className="search-input" />
          <button className="search-btn">Search</button>
        </div>
      </div>
      {/* Right Image */}
      <div className="image-section">
        <img src="/封面照.png" alt="Dormitory Illustration" className="dorm-image" />
      </div>
    </div>
  </div>
);
}

export default App;





