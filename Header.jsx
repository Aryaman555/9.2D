import './CSS/Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="main">
      <div className="left">
      <Link to="/" className="Dev@Deakin">Dev@Deakin</Link>
      </div>
      <div className="center">
        <input placeholder="Search.." className="search" />
      </div>
      <div className="right">
        <Link to="/plan" className="plan">Plan</Link>
        <Link to="/post" className="post">Post</Link>
        <Link to="/login" className="login">Log in</Link>
      </div>
    </div>
  );
}

export default Header;
