import Style from './style.module.scss'

function Footer(){
  return(
    <footer className={Style.footerContainer}>
      <main className={Style.socialMain}>
          <div className={Style.social}>
              <h3>Direitos autorais</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className={Style.social} id="alunos">
              <h3>Programadores</h3>
              <p>Christopher Silva de Sousa.</p>
              <p>Luís Henrique Ferreira Freire.</p>
              <p>João Pedro de Sousa Rodrigues</p>
          </div>
          <div className={Style.social}>
              <h3>Objetivo</h3>
              <p>Produzir um site para auxiliar os usuarios a escolherem os melhores produtos para suas necessidades.</p>
          </div>
      </main>
      <div className={Style.copyrightContainer}>
          <i className="fas fa-heart"></i>
          <span className={Style.copyright}>Projeto de Linguagem de Script</span>
      </div>
    </footer>
  )
}

export default Footer;
