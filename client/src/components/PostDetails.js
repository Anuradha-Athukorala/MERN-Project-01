import axios from 'axios';
import React,{Component} from 'react';
export default class EditPost extends Component{
              
    constructor(props){
        super(props);
    
        this.state={
            post:{}
        };
    }
    componentDidMount(){
        const id = this.props.match.params.id; //to take unique id
         //get details of specific post
        axios.get(`http://localhost:8000/post/${id}`).then((res) =>{
          if(res.data.success){
             this.setState({
                  post:res.data.post
              });

              console.log(this.state.post);
        }
     
        }); 
   } 
    render(){
        const {StaffMemberName,memberID,Age,Address, PhoneNumber, Gender,DateOfBirth} = this.state.post;

        return(
                <div style={{ marginTop: '20px' }}>
                <dt className="col-sm-3">Member ID</dt>
                <h4>{memberID}</h4>
                <hr />
                <table className="table caption-top">

                <thead>
                <tr>
                <th scope="col">#</th> 
                <th scope="col">StaffMemberName</th>
                <th scope="col">Age</th>
                <th scope="col">Address</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col">Gender</th>
                <th scope="col">DateOfBirth</th>
                </tr>
               </thead>                         
               <tbody>
            <tr>
               <th scope="row">1</th>
               <td>{StaffMemberName}</td>
               <td>{Age}</td>
               <td>{Address}</td>
               <td>{PhoneNumber}</td>
               <td>{Gender}</td>
               <td>{DateOfBirth}</td>
            </tr>
           </tbody>
           </table>
           </div>        
           
           )
        
    }
}