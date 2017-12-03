import React from 'react';
import styles from './App.css';

export default class Combobox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <select className={styles.combobox}>
        <option disabled>Выберите героя</option>
        <option value="Чебурашка">Чебурашка</option>
        <option selected value="Крокодил Гена">Крокодил Гена</option>
        <option value="Шапокляк">Шапокляк</option>
        <option value="Крыса Лариса">Крыса Лариса</option>
      </select>
    );
  }

};
