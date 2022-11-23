import React from 'react'
import './footer.css'
import { Container, Row, Col,ListGroupItem,ListGroup} from 'reactstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
  const year= new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo footer-logo'>
            
              <div className='d-flex'>
              {/* <img src={logo} alt="logo" /> */}
                <h1 className='text-white'>Multimart</h1>
              </div>
             
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Necessitatibus, quas aut cupiditate inventore ex sequi ipsam culpa modi quaerat voluptas voluptatem deserunt molestias,
                 voluptatibus accusantium nesciunt, consequuntur architecto ea impedit!
              </p>
            </div> </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 list__group'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 list__group'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 list__group'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 list__group'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
              </div> 
              </Col>
          <Col lg='2' md='3' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 list__group'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 list__group'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 list__group'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 list__group'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
              </div>  </Col>
          <Col lg='3' md='4' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 d-flex '>
                 <span><i class="ri-map-pin-line"></i></span>
                <p className='ps-2'>123 Yusif Seferov,Genclik,Baku</p>

                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex'>
                <span><i class="ri-phone-line"></i></span>
                <p className='ps-2'>+994506783445</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex'>
                <span><i class="ri-mail-line"></i></span>
                <p className='ps-2'>importgov@gmail.com</p>
                </ListGroupItem>
                
              </ListGroup>
              </div> 
               </Col>
               <Col lg='12'>
                <p className="footer__copyright text-center"> Copyright {year} developed by Aisel Mamedova.All rights reserved.</p>
               </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer