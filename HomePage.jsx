import React from 'react';
import Footer from '../Footer';
import Bottom from '../Bottom';
import CardList from '../CardList';
import Header from '../Header';

function Homepage() {
    return (
    <body>
      <div className="App">
      <Header/>
      <img src='https://storage-prtl-co.imgix.net/endor/organisations/11000/images/1533828576_3262_150116_BC_Building_Burwod_01.jpg' alt='Deakin' style={{width: '100%'}}/>
      <CardList/>
      <Footer/>
      <Bottom/>
    </div>
  </body>
    )
}
export default Homepage