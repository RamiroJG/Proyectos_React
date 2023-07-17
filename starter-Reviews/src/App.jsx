import { FaBeer } from 'react-icons/fa';
import Review from './components/Review';
const App = () => {
  return(
    <div>
      <h2>Reviews Starter</h2>;
      <FaBeer className='beer' />
      <Review />
    </div>
  )
  
};
export default App;
