import React from 'react';
import {Component} from 'react'
import Aux from '../Auxx/Auxx';
import NavBar from '../../components/NB/NavBar/NavBar';


class Layout extends Component {

    
    render () {

  
       return(

       <Aux>
       <NavBar/>
        
      <main>
      {this.props.children}
      </main>
      
      
      
       </Aux>

    );


    }
}



export default Layout;


