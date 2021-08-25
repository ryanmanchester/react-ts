import ReactDOM from 'react-dom';
import Parent from '../src/props/Parent';

const App = () => {
  return <Parent />
}

ReactDOM.render(<App />, document.querySelector('#root'));
