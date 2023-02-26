import React from 'react';
import './App.css';
import Box from './component/js/box'
import Header from './component/js/header_text'

function App() {
  document.body.style.backgroundColor = "#696969";
  return (
    <div className='App'>
      <Header text="โหวตอาหาร" />
      <Box
        type="อาหารคาว"
        food="ข้าวผัด"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        link="https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg"
      />
      <Box
        type="อาหารหวาน"
        food="บัวลอย"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        link="https://img.kapook.com/u/2017/wanwanat/93_bualoy/loy4_1.jpg"
      />
    </div>
  );
}

export default App;
