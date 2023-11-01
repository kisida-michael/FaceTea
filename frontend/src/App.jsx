import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocationDependentContent from './utils/LocationDependentComponent';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:location" element={<LocationDependentContent />} />
      </Routes>
    </Router>
  );
};

export default App;