import home from './components/home';
import Navigation from './components/NavBar';
import { Route, Routes} from 'react-router-dom';
import LoginForm from './pages/login';
function App() {
  return (
    <div className="App">
        <Navigation />
        
        <Routes>
   
          <Route exact path="/login" element={<LoginForm />} />


        </Routes>
      </div>
  );
}

export default App;
