import React, { useEffect } from 'react'
import Footer from "../../components/Footer"
import Menu from "../../components/Menu/Menu"
import {Link} from 'react-router-dom'
import localStorage from '../../services/localStorage'

import {products} from "../../services/Util"
import Styles from './styles.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import { useProduction } from '../../contexts/ProductContext'

function Home(){
    const {Users, setUsers} = useProduction()
    useEffect(() => {
      const loadData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await res.json();
        setUsers(data);
      }
      loadData();
    }, [setUsers]);

    const usuariosStore = Users
    localStorage.load(usuariosStore)
    return (
        <>
            <Menu/>
            <Carousel>
              <Carousel.Item>
                <img
                  className={Styles.SlideImg}
                  src="./img/iMac-Flat-Mockup.jpeg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className={Styles.SlideImg}
                  src="./img/2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className={Styles.SlideImg}
                  src="./img/iPhone-XS-10.38.56.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

            <section className={Styles.servicesMain}>
                {products.map((products) => {
                return (

                    <section className={Styles.service} key={products.id} >
                      <Link to={products.link} >
                        <div id={products.id}>
                            <div className={Styles.serviceImg} >
                                <img id={products.id} src={products.image} alt={products.nome}/>
                            </div>
                        </div>
                        <h2>{products.title}</h2>
                        <p>{products.description}</p>
                      </Link>
                    </section>

                )
                })}
            </section>
            <Footer/>
        </>
    )
}

export default Home;
