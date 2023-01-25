import React from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import mountFuji from './images/mount-fuji.jpg'
import sydneyOperaHouse from './images/sydney-opera-house.jpg'
import geirangerfjord from './images/geirangerfjord.jpg'

function App() {
  return (
    <div>
      <Header />      
      <Entry 
        image={mountFuji}
        country="JAPAN"
        gmapUrl="https://www.google.com/maps/place/Mount+Fuji/@35.3606587,138.7098108,14z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634"
        location="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Entry 
        image={sydneyOperaHouse}
        country="AUSTRALIA"
        gmapUrl="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567799,151.2131026,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967"
        location="Sydney Opera House"
        date="27 May, 2021 - 8 Jun, 2021"
        info="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />
      <Entry 
        image={geirangerfjord}
        country="NORWAY"
        gmapUrl="https://www.google.com/maps/place/Geirangerfjord/@62.1049112,7.0050016,12z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940816"
        location="Geirangerfjord"
        date="01 Oct, 2021 - 18 Nov, 2021"
        info="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.."
      />
    </div>
  );
}

export default App;
