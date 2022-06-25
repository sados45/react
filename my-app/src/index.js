import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

export default class App extends Component{//eger ben export default demezsem bunu disari cikaramam. cikarmam icin export yada export default u kullanmaliyim. 

  render(){
    return(
      <div>
     
     <Example1 />
     <Example2 />
     <Example3 />
  
      </div> /*eger reactte jsx  yaziyorsak kapsayici birsey icersine yazmaliyiz. 
      button yada p tagini normal acmamiz dogru degil. div icerisine koymaliyiz mesela.bos dahi olabilir div yerine.*/ 
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
