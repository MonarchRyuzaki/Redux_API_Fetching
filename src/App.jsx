import { useSelector, useDispatch} from 'react-redux'
import { todoSelector, fetchData } from './redux/slice/todoSlice'
import './App.css'

function App() {
  const todoData = useSelector(todoSelector);
  const dispatch = useDispatch();
  if (todoData.isLoading) return <div>Loading...</div>
  return (
    <div className="App">
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
      {todoData.data.map((item) => {
        return <div key={item.id}>{item.title}</div>
      })}
    </div>
  )
}

export default App
