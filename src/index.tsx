import ReactDOM from 'react-dom';
import GuestList from '../src/state/GuestList';
import UserSearch from '../src/state/UserSearch';

const App = () => {
  return (
    <div>
    <GuestList />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
