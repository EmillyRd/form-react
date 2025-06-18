import './components/MyForm.css';
import MyForm from "./components/MyForm.jsx";

function App() {
  return (
    <>
     <div className="App">
       <MyForm user={{
         name: "josias",
         email: "josias@gmail.com",
         bio:"advogado",
         role:"admin"}}
       />
     </div>
    </>
  )
}

export default App
