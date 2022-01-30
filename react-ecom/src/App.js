// import logo from 'fb_logo.png';
import './App.css';
import Header from './components/layout/Header1';
import Footer from './components/layout/Footer';
import Slider from './components/layout/Slider';
import Main from './components/layout/Main';
import MainContent from './components/layout/Main2';
import {Route,Routes,BrowserRouter as Router} from "react-router-dom";
import About from './containers/About';
import WebDev from './containers/Web-dev';
import MobDev from './containers/Mobile-dev';
import Cloud from './containers/Cloud';
import Blog from './containers/Blog';
import Client from './containers/Client';


function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
        <Route path="/" element={   <MainContent/>}/>
        <Route path="/about" element={<About developer="sai99" />} />
        <Route path="/web-development" element={<WebDev/>} />
         <Route path="/mobile-development" element={<MobDev/>} />
          <Route path="/cloud" element={<Cloud/>} />
           <Route path="/blog" element={<Blog/>} />
            <Route path="/client" element={<Client/>} />

      </Routes>



    <Footer/>
    </Router>
    
         
       
    
    </>
  );
}

export default App;
