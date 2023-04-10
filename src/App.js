import logo from './logo.svg';
import './App.css';
import Button from './MyButton';
import { useState ,useEffect} from 'react';
import Square from './Square';
import ParentComponent from './ParentComponent';
import Container from './Container';
import Hello from './Hello';

//User Details
const user = {
  name: "Hedy Lamarr",
  image: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize:90,
}

//custom hook
const useCounter = (initialValue) => {
  const[newcount, setnewCount] = useState(initialValue);
  const increment = () => setnewCount(newcount + 1);
  const decrement = () => setnewCount(newcount - 1);
  const reset =()=> setnewCount(initialValue);
  return {newcount,increment,decrement,reset}
}

function MyApp() {
  const [count, setCount] = useState(0);
  const { newcount, increment, decrement, reset } = useCounter(0);

    const[id,setId] = useState(1)
  const [salary, setSalary] = useState(3000)
  const [age, setAge] = useState(30)

  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle)
  }

  const bgColor = toggle ? "bg-red" :"bg-blue"
  
  useEffect(() => {
    console.log("initial")
    setInterval(() => {
      setId(id +1)
    }, 3000);
   
  });
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

 const SampleComponent = Container(Hello)
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

       
        <Square />
        <br /><br />
       <h1> custom hooks</h1>
        <br />
         <h1>
          {newcount}
        </h1>
        <br />
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>res</button>

         <br /><br />
       <h1> pure component</h1>
        <br />
        <ParentComponent id={id} salary={salary} age={age} />
          <br /><br />
       <h1> HO component</h1>
        <br />
<SampleComponent />
      </div>

      <br />
      <br />
      <h1>Styling a react Application</h1>
      <br />
      pre defined style
      <button onClick={handleToggleClick} className={bgColor}>Click Me !</button>
    </>
  );
}

export default MyApp;
