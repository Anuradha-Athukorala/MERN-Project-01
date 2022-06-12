import React,{ Component } from 'react';
import axios from 'axios';
export default class Home extends Component{
constructor(props){
    super(props);
    this.state={
        posts:[]
    };
}
componentDidMount(){
       this.retrievePosts();
   }
retrievePosts(){
    axios.get("http://localhost:8000/posts").then(_res =>{
        if(_res.data.success){
            this.setState({
                posts:_res.data.existingPosts
            });
            console.log(this.state.posts)
        }
    });
}

onDelete =(id) =>{
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((_res) =>{
        alert("Member Details are Deleted");
        this.retrievePosts();
})
}


render(){
        return(
           <div>
             <center><h1>STAFF MEMBER DETAILS</h1></center>
             <table className="table caption-top">
                   <thead>
                   <tr>
                      <th scope="col">#</th>
                      <th scope="col">#</th>
                      <th scope="col">StaffMemberName</th>
                      <th scope="col">MemberID</th>
                      <th scope="col">Age</th>
                      <th scope="col">Address</th>
                      <th scope="col">PhoneNumber</th>
                      <th scope="col">Gender</th>
                      <th scope="col">DateOfBirth</th>
                      <th scope="col">Action</th>
                      </tr>
                   </thead>
                   <tbody>
                     {this.state.posts.map((posts,index)=>(
                         <tr key={index}>   
                           <th scope="row"> {index+1}</th>
                           <td>
                           <a href={`/post/${posts._id}`}style={{textDecoration:'none'}}>              
                           {posts.memberID}
                            </a>
                            </td>
                           <td>{posts.StaffMemberName}</td>   
                           <td>{posts.memberID}</td>
                           <td>{posts.Age}</td>
                           <td>{posts.Address}</td>
                           <td>{posts.PhoneNumber}</td>
                           <td>{posts.Gender}</td>
                           <td>{posts.DateOfBirth}</td>
                           <td>
                             <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                                 <i className="fas fa-edit"></i>&nbsp;EDIT
                             </a>
                             &nbsp;
                             <a className="btn btn-danger" href="#"onClick={() =>this.onDelete(posts._id)}>
                             <i className="fas fa-trash-alt"></i>&nbsp;DELETE
                             </a>
                          </td>
                           </tr>
                           ))}
                     </tbody>
                     </table>   
 <button className="btn btn-success"><a href="/add" style = {{textDecoration:'none',color:'white'}}>Create New Member</a></button>                         
                     </div>
                    )
                     }
        
}
