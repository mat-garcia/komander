export default function SigninCard() {
    return (
        
    <div className="row box">
        <div className="col s12 center-align ">
          <div className="col l6 m6 s6">
            <h2>Bem-Vindo ao</h2>
            <h2><b>Komander.</b></h2>
            
          </div>
          <div className="col l6 m6 s6">
            <div className="input-field">
              <input id="user" type="text" className="validate" placeholder="Usuario" />
              {/* <label htmlFor="user">Usuário</label> */}
            </div>
            <div className="input-field">
              <input id="password" type="password" placeholder="senha" className="validate" />
             {/*  <label htmlFor="password">Senha</label> */}
              
            </div>
            <div className="input-field">
                <button className="btn entrar waves-effect waves-light" type="submit" name="action">Entrar
                    <i className="material-icons right">login</i>
                </button>
            </div>
          </div>
        </div>
      </div>
    )
}