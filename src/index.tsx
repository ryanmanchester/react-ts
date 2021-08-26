import ReactDOM from 'react-dom';
import UserSearch from '../src/state/UserSearch';

const App = () => {
  return (
    <div>
    <UserSearch />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
