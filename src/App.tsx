import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from './components/Carousel/ImageSlider';
import Sidebar from './components/Sidebar/Sidebar';
import './Global.css'
import { 
  Configurations, 
  History, 
  Order, 
  Overview, 
  Revenue, 
  Users 
} from './pages/Overview';


// import ImageSlider from './components/Carousel/ImageSlider';
// import { SliderData } from './components/Carousel/SliderData';

const App: FC = () => {
  return (
    <React.Fragment>

      <Router>
        <Sidebar />
        <Routes>
          <Route path='/overview' element={<Overview />} />
          <Route path='/overview/users' element={<Users />} />
          <Route path='/overview/revenue' element={<Revenue />} />
          <Route path='order' element={<Order />} />
          <Route path='history' element={<History />} />
          <Route path='configurations' element={<Configurations />} />
        </Routes>
      </Router>
    </React.Fragment>


  );
}

export default App;
