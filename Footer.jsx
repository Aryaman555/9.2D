import '../src/CSS/Footer.css'

function Footer()
{
    return(
        <form id="email-registration" action="/" method="post">
            <div className="Container">
                <h1>SIGN UP FOR OUR DAILY INSIDER </h1>
                <input type="email" name="email" placeholder="Enter your email"/>
                <button>Subscribe</button>
            </div>
        </form>
    )
}
export default Footer