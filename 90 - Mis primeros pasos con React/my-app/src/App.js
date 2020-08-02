import React from 'react';
import logo from './logo.svg';
import './css/app.css';
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Title from './components/Title';
import Products from './components/Products';
import LastProduct from './components/LastProduct';



function App() {
  return (
    
    <div id="wrapper">
<head>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
</head>

      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">
          <TopBar />

          <div className="container-fluid">
            <Title />

            <Products />
            
            <LastProduct/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
