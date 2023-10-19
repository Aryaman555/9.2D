import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';  // Import LoginPage
import SignupPage from './routes/Signup';
import Homepage from './routes/HomePage';
import Logoutpage from './routes/LogoutPage';
import PostPage from './routes/PostPage';
import Pricing from './Pricing';
import "../src/CSS/App.css"
function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/' element={<Homepage />} />
                    <Route path='/logout' element={<Logoutpage />} />
                    <Route path='/post' element={<PostPage />} />
                    <Route path='/plan' element={<Pricing />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
