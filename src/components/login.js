import React from 'react';


class Login extends React.Component{
    render(){
      return(
        <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 jumbotron ">
                                <div className="id-header">
                                    <h3 className="id-label">Identification-Space</h3>
                                </div>
                                
                                <div className="col-md-10">
                                    <form>
                                        <div className="form-group row">
                                            <span id="user-icon"> </span>
                                            <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputPassword3" placeholder="Your User Name"/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                             
                                            <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword3" placeholder="Your User Password"/>
                                            </div>
                                        </div>

                                        <div >
                                            <button to="/Home-page"className="btn-lg btn btn-outline-info">  Connexion </button>
                                        </div>

                                        <div className="passForget">
                                            <a href="#">Forgeting password</a>
                                        </div>

                                    </form>
                                </div> 
                            </div>
                        </div>
                    </div>
            </section>
      )
    }
  }
  
  export default Login;

