import React from 'react';
import './App.css';

import Finder from './components/finder/finder';

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Finder />
      </div>
    );
  }
}
