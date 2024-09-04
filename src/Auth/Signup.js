import { useState } from "react"

function Signup(){
    var [Name ,setName] = useState("");
    var [Email,setEmail] = useState("");
    var [Password,setPassword] = useState("");
    
    function onhandName(e){
        setName(e.target.value)
    }

    function onhandEmail(e){
        setEmail(e.target.value)
    }

    function onhandPassword(e){
        setPassword(e.target.value)
    }

    function onhandLogin(e){
        console.log(Name,Email,Password)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Welcome to Signup</h1>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" onChange={e=>onhandName(e)} className="form-control" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" onChange={e=>onhandEmail(e)} className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-3">
                        <label>Mobile</label>
                        <input type="text" onChange={e=>onhandEmail(e)} className="form-control" placeholder="Mobile Number"/>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" onChange={e=>onhandPassword(e)} className="form-control" placeholder="Password"/>
                    </div>
                    <div>
                        <button className="btn btn-warning" onClick={e=>onhandLogin(e)}>CreateAccount</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup