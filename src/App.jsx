import './assets/css/index.css';
import Home from './components/Home'
import ganeshImage from './assets/images/ganesh.png'
import happinessImage from './assets/images/happiness2.png'


function App() {

  return (
    <div className='relative'>
      <div className='absolute z-20 w-full'>
        <div className='flex items-center justify-between gapx-3 px-3 py-2'>
          <div>

          <img src={ganeshImage}  alt="ganesh" width="140px" height="auto"/>
          </div>
          <div>

          <img src={happinessImage}  alt="ganesh" width="100px" height="auto"/>
          </div>


        </div>
      </div>
      <Home />
    </div>
  )
}

export default App
