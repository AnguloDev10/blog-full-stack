
import './App.css';

const Mensaje = (props) => {
  console.log(props)
 
  return<h1 style= {{color: props.color}}>
    { props.message}
    </h1>
}
const Descripcion = () => {
  return<h2>Esta es la app de la bootcamp</h2>
}
const App =() =>{
  return (
    <div className="App">
      <Mensaje color='green'message='Estamos trabajando en los cambios'></Mensaje>
      <Mensaje color='red' message='En un curso'></Mensaje>
      <Mensaje color='yellow'message='De react'></Mensaje>
      <Descripcion></Descripcion>
  
    </div>
  );
}

export default App;
