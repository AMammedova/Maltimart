import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'
import { useState } from 'react'
const Shop = () => {
  const [productsData,setProductsData]=useState(products)
  const handleFilter=e=>{
    const filterValue=e.target.value
    if(filterValue==='sofa'){
      const filteredProduts=products.filter(item=>item.category==='sofa')
      setProductsData(filteredProduts)
    }

    if(filterValue==='mobile'){
      const filteredProduts=products.filter(item=>item.category==='mobile')
      setProductsData(filteredProduts)
    }
    if(filterValue==='wireless'){
      const filteredProduts=products.filter(item=>item.category==='wireless')
      setProductsData(filteredProduts)
    }
    if(filterValue==='chair'){
      const filteredProduts=products.filter(item=>item.category==='chair')
      setProductsData(filteredProduts)
    }
    if(filterValue==='watch'){
      const filteredProduts=products.filter(item=>item.category==='watch')
      setProductsData(filteredProduts)
    }


  }

  const handleSearch=e=>{
    const searchItem=e.target.value
    const searchedProducts=products.filter(item=>item.productName.toLowerCase().includes(searchItem.toLowerCase()))
    setProductsData(searchedProducts)
  }
  return (
    <Helmet title={"Shop"}>
      <CommonSection title='Products'></CommonSection>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6' sm='6' xs='6'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' sm='6' xs='6' className='text-end'>
            <div className="filter__widget">
                <select>
                  <option>Sort by</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                  
                </select>
              </div>
            </Col>
            <Col lg='6' md='12' sm='12' xs='12'>
              <div className="search__box">
                <input type="text" placeholder='Search......' onChange={handleSearch}/>
                <span><i class="ri-search-line"></i></span>

              </div>
            </Col>
        
          </Row>
        </Container>
     
      </section>

      <section>
          <Container>
            <Row>
              {
                productsData.length === 0? <h1 className='text-center fs-4'>No products are founded</h1> :  <ProductsList data={productsData}t/> 
              }
            </Row>
          </Container>
          </section>
    </Helmet>
  )
}

export default Shop