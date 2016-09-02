import React from "react";
import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {name: "Will"};
  // }

  // render(){
  //   setTimeout(()=>{
  //     this.setState({name: "Bob"});
  //   }, 1000)
  //   return(
  //     <div>
  //       {this.state.name}
  //       <Header/>
  //       <Footer/>
  //     </div>
  //   );
  // }

      constructor(){
        super();
          this.state = {
            title: "Welcome Aboard!",
          }
      }

      changeTitle(title){
        this.setState({title});
      }

     render(){
        // setTimeout(() =>{
        //   this.setState({title:"Welcome Will!"})
        // }, 2000);
        // const title = "Welcome Will!";
      return(
        <div>
          <Header changeTitle={this.changeTitle.bind(this)} title = {this.state.title}/>
          <Footer/>
        </div>
      );
    }
  }