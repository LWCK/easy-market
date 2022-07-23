
import React from 'react'
import './App.css'
import ProductList from './components/ProductList/ProductList'

const App: React.FC<any> = () => {


  const [products, setProducts] = React.useState<any[]>([
    {
      id: 1,
      title: "Tablette de chocolat",
      price: 295,
      image: "https://www.leopold-macarons.com/382-large_default/tablette-chocolat-sans-sucres-lait.jpg"
    },
    {
      id: 2,
      title: "Pain au chocolat",
      price: 85,
      image: "https://www.bridor.com/medias/sys_master/images/images/hcb/h25/8898062188574/Pain-au-Chocolat-Savoureux-SourceHD-1200Wx1200H.png"
    },
    {
      id: 3,
      title: "Croissant au beurre",
      price: 90,
      image: "https://www.chefgourmet.ch/photo/pgiArticle/31000-1.jpg?ts=1609942112"
    },
    {
      id: 4,
      title: "Spaghetti carbonara",
      price: 850,
      image: "https://www.thespruceeats.com/thmb/sH36qo2xrBWTUwg7QpT1gd-HeD4=/910x910/smart/filters:no_upscale()/luscious-creamy-spaghetti-carbonara-recipe-995924-hero-5beaeb9cc9e77c0051329d5a.jpg"
    }
  ])



  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default App
