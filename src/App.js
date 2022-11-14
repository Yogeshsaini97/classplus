import React, { Component } from "react";
import Header from "./Header"
import "./app.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";




class App extends Component{
//added some exaple file

  
  constructor(){
    super();
    this.state={
      pictures:[],
    };
  }

 componentDidMount(){
    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=f21aa446e24d5d90f53535fc828e29ce&format=rest&per_page=10&page=1&format=json&nojsoncallback=1").then(function(response){
      return response.json();
    })
    .then(function(j){
          const picArray = j.photos.photo.map((pic)=>{
           
            const srcPath='https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            return(
              <img alt="dogs" src={srcPath}></img>
            )

            
          })
          this.setState({pictures: picArray});
    }.bind(this))

   
  
  
  }


  




render(){


  return (
      <>
  
     
     
     
      <Header/>

      <p>
      {this.state.pictures}
      </p>
      
     
   </>



  );
}
}

export default App;
