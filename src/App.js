import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Link, Route, Routes, useLocation, useParams} from 'react-router-dom';

const HatsPage = ()=>{
  return(
<div>
<h1>HATS PAGE</h1>
</div>
);
}

function App() {
  return (
    <div>
      {/** Earlier switch was used in place of Routes. 
      In v5 Route element could be used in isolation, 
      but from v6 we nee to wrap it inside Routes */}
      <Routes>
        {/**exact prop is not required anymore, it will be exact by default. 
    component is replaced in favor of element and we have to pass the element tag as the value */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/hats/" element={<HatsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

/* for styling we are using scss which is the updated version of the css */
