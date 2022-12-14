import React, { FC } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, } from 'react-router-dom';
import { 
  Configurations, 
  History, 
  Order, 
  Overview, 
  News, 
  Populars,    
  Genres
} from './pages/Overview';
import Sidebar from './components/Sidebar/Sidebar';
import './Global.css'


const App: FC = () => {
  return (
    <React.Fragment>
      <Router >
        <Sidebar />
        <Routes>
          <Route path='/overview' element={<Overview />} />
          <Route path='/overview/populars' element={<Populars />} />
          <Route path='/overview/news' element={<News />} />
          <Route path='/overview/genres' element={<Genres />} />
          <Route path='order' element={<Order />} />
          <Route path='history' element={<History />} />
          <Route path='configurations' element={<Configurations />} />
          <Route path='/' element={<Navigate to="/overview"/>} /> 
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
