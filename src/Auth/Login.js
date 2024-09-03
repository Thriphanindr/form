import { useState } from "react"

function Login(){

    var [Email,setEmail] = useState("");
    var [Password,setPassword] = useState("");
    
    function onhandEmail(e){
        setEmail(e.target.value)
    }

    function onhandPassword(e){
        setPassword(e.target.value)
    }

    function onhandLogin(e){
        console.log(Email,Password)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Welcome to Login</h1>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" onChange={e=>onhandEmail(e)} className="form-control" placeholder="Username"/>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" onChange={e=>onhandPassword(e)} className="form-control" placeholder="Password"/>
                    </div>
                    <div>
                        <button className="btn btn-warning" onClick={e=>onhandLogin(e)}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login