import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <Router>
      <DemoPageBanner />
      <Routes>
        <Route exact path="/">                                                                                                                                   
          <LandingPage  />
        </Route>
        <Route path="/demopage">
          <DemoPage />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
