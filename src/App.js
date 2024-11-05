import './App.css';
import EmployeeApp from './components/EmployeeApp';

function App() {
  let title='Employee CRUD'
  return (
    <div className="App">
      <EmployeeApp title={title}></EmployeeApp>
    </div>
  );
}

export default App;