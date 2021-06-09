import Style from './style.module.scss'
function Card({produto}){
    return(
        <>
        <div className={Style.catalogo} id={produto.id}>
          <i className="fas fa-heart"></i>
          <img src={produto.imagem} alt={produto.nome}/>
          <div className={Style.valores}>
              <h6>{produto.nome}</h6>
              <span>por</span>
              <p>R$ {produto.preco}</p>
          </div>
          <button type="submit" name="addcart" id="addcart">AddCart</button>
        </div>
        </>
    )
}

export default Card;
