import React from 'react';
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Footer from "./components/Footer"
import FooterLinks from "./components/FooterLinks"

function Website() {
  return (
    <div className="container-fluid">
      <header>
      <Navbar/>
</header>
<main>
  <Content/>

</main>
<footer>
  <Footer/>

</footer>
      </div>
    );
}

export default Website;
