import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocationDependentContent from './utils/LocationDependentComponent';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:location" element={<LocationDependentContent />} />
        <Route path="/admin" element={<h1>Admin</h1>} />
      </Routes>
    </Router>
  );
};

export default App;