import React from 'react'
import './Home.css';
import Product from './Product';
import Header from './Header';
const Home = () => {
  return (
    <div>
        <Header />
        <div className="home">
            <div className="home__container">
                <img src="https://www.shutterstock.com/image-illustration/online-shop-on-mobile-shopping-260nw-1735253951.jpg" alt="banner" className="home__image" />

                <div className="home__row">
                    <Product
                        id='1524'
                        title="title of Images "
                        price={11.96}
                        rating={5}
                        image="https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_1280.jpg"

                    />
                    <Product 
                        id='1522'
                         title="title of Images 2 "
                         price={11.96}
                         rating={5}
                         image="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
                    />
                </div>
                <div className="home__row">
                <Product 
                    id='1526'
                     title="title of Images 3 "
                     price={11.96}
                     rating={5}
                     image="https://media.istockphoto.com/id/1271796113/photo/women-is-holding-handbag-near-luxury-car.jpg?s=612x612&w=0&k=20&c=-jtXLmexNgRa-eKqA1X8UJ8QYWhW7XgDiWNmzuuCHmM="
                />
                <Product
                    id='12659'
                     title="title of Images 4"
                     price={11.96}
                     rating={3}
                     image="https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_1280.jpg"
                />
                <Product 
                     id='1336'
                     title="title of Images 5"
                     price={11.96}
                     rating={2}
                     image="https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_1280.jpg"
                />
                </div>
                <div className="home__row">
                <Product 
                     id='1666'   
                     title="title of Images 6"
                     price={11.96}
                     rating={4}
                     image="https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_1280.jpg"
                />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home