import { useState } from "react"
import M from "materialize-css"

export default function SigninCard() {
 
    const [user, setUser] = useState('');
    const [password,setPasword] = useState('');
    console.log('usuario ' + user)
    console.log('senha ' + password)
    function loginHandle(){
      if((user && password).length > 0){
        if( user == 'admin' && password == 'cph@2020'){
          
        }
      
      }else{
        var toastHTML = '<span>Preencha todos os campos!</span><button class="btn-flat toast-action">Atenção</button>';
        M.toast({html: toastHTML});
      }
    }
    return (
        
    <div className="row box">
        <div className="col s12 center-align ">
          <div className="col l6 m6 s6">
            <h2>Bem-Vindo ao</h2>
            <h2><b>Komander.</b></h2>
            
          </div>
          <div className="col l6 m6 s6">
            <div className="input-field">
              <input required id="user" type="text" className="validate" placeholder="Usuario" onChange={e => setUser(e.target.value)}  />
              {/* <label htmlFor="user">Usuário</label> */}
            </div>
            <div className="input-field">
              <input required id="password" type="password" placeholder="senha" className="validate" onChange={e => setPasword(e.target.value)}/>
             {/*  <label htmlFor="password">Senha</label> */}
              
            </div>
            <div className="input-field">
                <button className="btn entrar waves-effect waves-light" type="submit" onClick={loginHandle} name="action">Entrar
                    <i className="material-icons right">login</i>
                </button>
            </div>
          </div>
        </div>
      </div>
    )
}