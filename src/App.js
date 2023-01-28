import HeaderWrap from './components/Header/HeaderWrap';
import './App.css';
import SiteNavWrap from './components/SiteNav/SiteNavWrap';

function App() {
  return <div className="app_wrapper">
    <HeaderWrap />
    <div className="app_row">
      <SiteNavWrap />
      <div className="app_content">

      </div>
    </div>
  </div>
}

export default App;