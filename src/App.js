import logo from './logo.svg';
import './App.css';
import Button from './MyButton';
import { useState } from 'react';
import Square from './Square';

const user = {
  name: "Hedy Lamarr",
  image: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize:90,
}


function MyApp() {
   const [count, setCount] = useState(0);
   function handleClick() {
     setCount(count + 1);
   }
  
  
  const products = [
    { title: "cabbage", isFruit: false , id: 1 },
    { title: "Garlic",isFruit: false , id: 2 },
    { title: "Apple",isFruit: true , id: 3 }
  ]

  const listItems = products.map(item => 
    <li key={item.id}
    style={{color : item.isFruit ? 'magenta': 'darkblue'}}
    >{item.title}</li>
  )

 
  return (
    <>
      <h1>{user.name}</h1>
      <img src={user.image} alt={'photo of' + user.name}
        className="avatar"
        style={{ height: user.imageSize, width: user.imageSize }}></img>
      <div>
        <ol>
        
          {listItems}
          
        </ol>
        <Button count={count} onClick={handleClick} />
        <Button count={count} onClick={handleClick} />
        <br />
        <br />
        <Square />
      </div>
    </>
  );
}

export default MyApp;
