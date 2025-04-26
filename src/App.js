import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import PostDetail from './pages/PostDetail';
import Dashboard from './admin/Dashboard';
import ManagePosts from './admin/ManagePosts';
import ManageComments from './admin/ManageComments';
import ManageUsers from './admin/ManageUsers';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/posts" element={<ManagePosts />} />
        <Route path="/admin/comments" element={<ManageComments />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
