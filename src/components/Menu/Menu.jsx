import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import ModalLogin from '../ModalLogin/ModalLogin';
import ModalCadastro from '../ModalLogin/ModalCadastro';
import localStorage from '../../services/localStorage'

import Style from './style.module.scss'
import { useProduction } from '../../contexts/ProductContext';

function Menu() {

    const {setInvalidSenha,setUserNot, setShow, handleClose, handleCloseCadastro, setShowCadastro, showCadastro, usersEmail, usersSenha, login, nameLogin, setnameLogin} = useProduction()

    const usuarios = localStorage.readAll()
    const clickLogin = () =>{
      setShow(true);
    }

    const clickCadastro = () =>{
      setShowCadastro(true);
    }

    const ToggleModal = (modal) =>{
      if(modal === "modalLogin")
        handleClose(true);
      handleCloseCadastro()
    }

    const usersLogin = (e) =>{
      e.preventDefault();
      const email = usersEmail.current.value
      const senha = usersSenha.current.value
      usersEmail.current.value = ''
      usersSenha.current.value = ''
      let validate = true
      usuarios.forEach((user) =>{
        if (email === user.email && senha === user.name){
          validate = false
          setnameLogin(user.username)
          setUserNot('')
          ToggleModal("modalLogin")
        }
      })

      if(validate=== true){
        setUserNot('Usuario não cadastrado verifique o seu E-mail ou senha...')
      }
    }
    useEffect(()=>{
      if(nameLogin.length === 0){
        setnameLogin('Login')
      }
    },[setnameLogin, nameLogin.length])

    const usersCadastro = (e) =>{
      e.preventDefault();
      const password = e.target.password.value
      if(password === e.target.confSenha.value){
        const email = e.target.email.value
        const username = e.target.username.value
        const dataNascimento = e.target.dataNascimento.value
        const phone = e.target.phone.value
        const data= {
          email: email,
          username: username,
          dataNascimento: dataNascimento,
          phone: phone,
          password: password
        }
        localStorage.create(data)
        setnameLogin(data.username)
        clean(e)
        setInvalidSenha('')
        ToggleModal("modalCadastro")
      }else{
        setInvalidSenha('Erro!! confirmação de senha incorreta!!')
      }
    }

    function clean(e){
      e.target.password.value = ''
      e.target.confSenha.value = ''
      e.target.email.value =''
      e.target.username.value = ''
      e.target.dataNascimento.value = ''
      e.target.phone.value = ''
    }
    return(
      <>
      <div className={Style.MenuContainer}>
        <header>
          <nav className={Style.Menu}>
            <Link to="/">
              <ul id={Style.home} >
                  <li>
                      <span><i className="fas fa-home"></i>Home</span>
                  </li>
              </ul>

              <span><img id="logo" src="../img/Logo.png" alt='Logo' /></span>
            </Link>
            <ul className= {Style.navegation}>
                <Link to="/Computadores">
                  <li>
                    <span id="computer"><i className="fas fa-desktop"></i>Computador</span>
                  </li>
                </Link>
                <Link to="/Notebooks">
                  <li>
                    <span id="not"><i  className="fas fa-laptop"></i>Notebook</span>
                  </li>
                </Link>
                <Link to="/Celulares">
                  <li>
                    <span id="mobile"><i className="fas fa-mobile-alt"></i>Celular</span>
                  </li>
                </Link>
                <li id="login" className={Style.logar} >
                    <i className="fas fa-user-circle"></i>
                    <p className="cadastro" onClick={clickLogin} ref={login}>{nameLogin}/</p>
                    <p className="cadastro" onClick={clickCadastro}>Cadastre-se</p>
                </li>
            </ul>
          </nav>
        </header>
      </div>

      <ModalLogin
        usersLogin={usersLogin}
      />
      <ModalCadastro
        showCadastro={showCadastro}
        handleCloseCadastro ={handleCloseCadastro}
        usersCadastro={usersCadastro}
      />

      </>
    )
}

export default Menu;
