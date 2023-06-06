import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';
import BookingForm from './screens/BookTicketForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<HomeScreen />} />
      <Route path="/show/:id" element={<ShowDetailsScreen />} />
      <Route path='/booking/form' element={<BookingForm/>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
