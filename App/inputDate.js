import React from 'react';
import styles from './App.css';

export default class importDate extends React.Component{

     constructor(props){
       super(props);
     }

     render(){
       return(
         <p>
          <label>{this.props.name}</label>
          <input type="date" id={this.props.val} className={styles.input} />
        </p>
       );
     }

};
