import axios from 'axios';
import React,{Component} from 'react';
export default class EditPost extends Component{
        constructor(props){
        super(props);
        this.state={
          StaffMemberName:"",
          memberID:"",
          Age:"",
          Address:"",
          PhoneNumber:"",
          Gender:"",
          DateOfBirth:""
        
        }
    }
    handleInputChange = (e) =>{
      const {name,value} = e.target;
      this.setState({
        ...this.state,
        [name]:value
      })
    }  
    onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id; //to take unique id
        const{ StaffMemberName,memberID,Age,Address,PhoneNumber,Gender,DateOfBirth} = this.state;
        const data = {
          StaffMemberName:StaffMemberName,
          memberID: memberID,
          Age:Age,
          Address:Address,
          PhoneNumber:PhoneNumber,
          Gender:Gender,
          DateOfBirth:DateOfBirth
         }
      console.log(data) 

    axios.put (`http://localhost:8000/post/update/${id}`, data).then((_res => {
        if(_res.data.success){
           this.setState(
          {   
          StaffMemberName:"",
          memberID:"",
          Age:"",
          Address:"",
          PhoneNumber:"",
          Gender:"",
          DateOfBirth:""
        }
    )
}
}
)
    );
    //componentDidMount() {
        //const id = this.props.match.params.id; //to take unique id
        axios.get(`http://localhost:8000/post/${id}`).then((res) =>{
          if(res.data.success){
            alert("Member Details are Updated")
             this.setState(
               {
                  post:res.data.post
               });

              console.log(this.state.post);
        }
     
        });
   }
    render() {
        return(
            <><center><h1>UPDATE STAFF MEMBER </h1></center><div class="card-body">
                <div className="container">
                    <div class="form-group">
                        <div className="form-group" style={{marginBottom:'15px'}}>
     <label style={{marginBottom:'5px'}}> Staff Member Name</label>
     <input type="text"
     className="form-control"
     name="StaffMemberName"
     placeholder="name"
     value={this.state.StaffMemberName}
     onChange={this.handleInputChange}/>
</div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}> Staff Member ID</label>
                    <input type="text"
                     className="form-control"
                     name="memberID"
                     placeholder="id"
                     value={this.state.memberID}
                     onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
     <label style={{marginBottom:'5px'}}>Staff Member Age</label>
     <input type="text"
     className="form-control"
     name="Age"
     placeholder="age"
     value={this.state.Age}
     onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
     <label style={{marginBottom:'5px'}}> Staff Member Address</label>
     <input type="text"
     className="form-control"
     name="Address"
     placeholder="address"
     value={this.state.Address}
     onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
     <label style={{marginBottom:'5px'}}> Contact Number</label>
     <input type="text"
     className="form-control"
     name="PhoneNumber"
     placeholder="contactnumber"
     value={this.state.PhoneNumber}
     onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
     <label style={{marginBottom:'5px'}}> Gender</label>
     <input type="text"
     className="form-control"
     name="Gender"
     placeholder="gender"
     value={this.state.Gender}
     onChange={this.handleInputChange}/>
</div>
<div className="form-group" style={{marginBottom:'15px'}}>
     <label style={{marginBottom:'5px'}}>Date Of Birth</label>
     <input type="date"
     className="form-control"
     name="DateOfBirth"
     placeholder="DOB"
     value={this.state.DateOfBirth}
     onChange={this.handleInputChange}/>
</div>

<button className="btn btn-success" style={{mardinTop:'15px'}} onClick={this.onSubmit}>
&nbsp;ENTER
</button>
</div>
</div>
</div>
</>
        )
}
    }
