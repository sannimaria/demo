
import './App.css';
import {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';


function App() {

  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About} exact/>
    </Switch>
  );


















  // const [names, setNames] = useState([]);

  // useEffect(() => {
  //   setNames(['Jouni', 'Pekka', 'Ilkka']);
  // }, [])

  // return (





  //   // <div style={{padding: 50}}>
  //   //   <h3>Names</h3>
  //   //   <ol> 
  //   //     {names.map(name => (
  //   //       <li>{name}</li>
  //   //     ))

  //   //     }
  //   //   </ol>
  //   // </div>
  // );


















  // const [weight, setWeight] = useState(90);
  // const [intensity, setIntensity] = useState(1.3);
  // const [gender, setGender] = useState('male');
  // const [calories, setCalories] = useState(0);

  // function handleSubmit(e) {
  //   let result = 0;
  //   e.preventDefault();
  //   if (gender === 'male') {
  //     result = (879 + 10.2 * weight) * intensity;
  //   } else {
  //     result = (795 + 7.18 * weight) * intensity;
  //   }
  // }


  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //           <div>
  //                 <label>Weight</label>
  //                 <input type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
  //           </div>
  //           <div>
  //                 <label>Intensity</label>
  //                 <select value={intensity} onChange={e => setIntensity(e.target.value)}>
  //                   <option value="1.3">Light</option>
  //                   <option value="1.5">Usual</option>
  //                   <option value="1.7">Moderate</option>
  //                   <option value="2">Hard</option>
  //                   <option value="2.2">Very hard</option>
  //                 </select>
  //           </div>
  //           <div>
  //                 <label>Gender</label>
  //                 <label><input type="radio" name="gender" value="male" defaultChecked  onChange={e => setGender(e.target.value)}></input>Male</label>
  //                 <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>Female</label>
  //           </div>
  //           <div>
  //                   <label>Calorie comsumption: </label>
  //                   <output>{calories.toFixed(0)}</output>
  //           </div>
  //             <button>Calculate</button>
  //       </form>
  //   </div>
  // );



}

export default App;
