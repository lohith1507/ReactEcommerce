import React, { useContext } from 'react'
import { globalContext } from '../../App'
import { Button } from 'react-bootstrap';
import IconTextCard from '../../components/core/IconTextCard';

export default function Index() {

  const {productsData} = useContext(globalContext);

  const actionButtons = () => [
    <>
      <Button style={{backgroundColor:"yellow"}} className='border rounded-pill text-dark'>Add to Cart</Button>
      <Button style={{backgroundColor:"orange"}} className='border rounded-pill text-dark'>Buy Now</Button>
    </>
  ]

  return (
    <div className='row'>
      {
        productsData && productsData.map((item,i) => (
          <div 
            className='col-12 col-md-6 col-lg-4 col-xl-3' 
            key={i}
          >
            <IconTextCard
              icon={item.image}
              title={item.title} price={item.price} 
              rate={item.rating.rate} count={item.rating.count}
              actions={actionButtons()}
            />
          </div>
        ))
      }      
    </div>
  )
}
