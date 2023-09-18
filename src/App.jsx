
import './App.css'
import Navbar from './components/Navbar/Navbar'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/priceoptions/PriceOptions'

function App() {

  return (
    <>
    
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-2xl bg-red-400 text-center'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      
    </>
  )
}

export default App
