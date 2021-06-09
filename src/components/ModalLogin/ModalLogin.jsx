
import {Form, Modal } from "react-bootstrap";
import { useProduction } from "../../contexts/ProductContext";
import Style from './style.module.scss'



function ModalLogin({ usersLogin}) {
  const {show,handleClose,usersEmail,usersSenha, UserNot} = useProduction()
  return (
    <>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <img src="../img/Logo.png" alt='Logo' className={Style.logoLogin} />
        </Modal.Header>
        <Form onSubmit={usersLogin} className={Style.form}>
          <Modal.Body>
            <Form.Group controlId="ModalEmail">
              <Form.Control type='text' name="email" placeholder="E-mail" required ref={usersEmail}/>
            </Form.Group>
            <Form.Group controlId="ModalSenha">
              <Form.Control type='password' name="senha" placeholder="Senha" required ref={usersSenha}/>
            </Form.Group>
            <p><a href="##" >Esqueceu a senha?</a></p>
            <p className={Style.alert}>{UserNot}</p>
          </Modal.Body>
          <Modal.Footer>
            <div className={Style.confirm}>
              <button
                className={Style.entrar}
                variant="primary"
                as="input"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalLogin;
