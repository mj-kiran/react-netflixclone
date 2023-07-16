import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import {action,comedy,documentaries,horror,orginals, romance} from './Urls'
import './App.css';
import Banner from './Components/Banner/Banner'
import RowPoster from './Components/Rowposter/Rowposter'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPoster url={orginals} title='Netflix Orginals'/>
      <RowPoster url={action} title='Action' isSmall/>
      <RowPoster url={comedy} title='Comedy' isSmall/>
      <RowPoster url={horror} title='Horror' isSmall/>
      <RowPoster url={romance} title='Romance' isSmall/>
      <RowPoster url={documentaries} title='Documentaries' isSmall/>

    </div>
  );
}

export default App;
