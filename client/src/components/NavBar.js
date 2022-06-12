import axios from 'axios';
import React,{Component} from 'react';
export default class NavBar extends Component{

filterData(posts,searchKey){
  const result =posts.filter((post) =>
   post.memberID.includes(searchKey)
  )
  this.setState({posts:result})
}
handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get(`http://localhost:8000/posts`).then(_res =>{
    if(_res.data.success){
    this.filterData(_res.data.existingPosts,searchKey)
    }
  });
}
    render(){
        return(
            <div>
            <nav className="navbar navbar-dark bg-dark">

  <div className="container-fluid">
    <a className="nav-link" aria-current="page" href="/"> HOME PAGE </a>
    <form className="d-flex">
      <input className="form-control me-2" type="searchKey" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
 </div>
        )
    }
}    
