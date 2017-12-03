import React from 'react';
import styles from './App.css';
import Btn from './Button.js';
import Inp from './inputDate.js'
import Combobox from './combobox.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        <Inp name="От:" val="fromDate"/>
        <Inp name="До:"/>
        <Combobox/>
        <Btn name="Получить"/>
      </div>
    );
  }
}
