import React from "react";
export default class Fetch  extends React.Component{
  state={
      loading:true,
      results:null
  }
   async componentDidMount(){
     const url="https://rickandmortyapi.com/api/character/?page=19"
     const responce=await fetch(url);
     const data=await responce.json();
     this.setState({results:data.results[0], loading:false});
    }
  render(){
    return (<div>
    {this.state.loading || !this.state.results ?(
      <div>loading...</div>
      ):(
        <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
              <img src={this.state.results.image}/>
              </div>
              <div className="card-body">
              <div>Name:{this.state.results.name}</div>
              <div>Status:{this.state.results.status}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
    );
  }
}