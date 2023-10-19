import './CSS/Header.css';

function Header1(props)
{
    return( <div className="main">
    <div className="left">
      <h1>DEV@Deakin</h1>
    </div>
    <div className ="center">
      <input  placeholder="Search.." className="search" />
    </div>
    <div className="right">
    <span className="post">Post</span>
    <a href="/" class="login">Log out</a>
    </div>
  </div>
  )
}
export default Header1
