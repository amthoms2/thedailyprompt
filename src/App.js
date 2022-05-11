import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Test from './components/test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
