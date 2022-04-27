import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './FunctionBased/components/TodoContainer';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<TodoContainer />} />
    </Routes>
  </Router>
);

export default App;
