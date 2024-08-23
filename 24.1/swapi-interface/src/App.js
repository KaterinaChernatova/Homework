import React from 'react';
import PeopleList from './components/PeopleList';

function App() {
  return (
    <div className="container">
      <h1 className="mt-5">SWAPI</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="https://swapi.dev/api/" aria-label="SWAPI URL" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Get Info</button>
        </div>
      </div>
      <PeopleList />
    </div>
  );
}

export default App;
