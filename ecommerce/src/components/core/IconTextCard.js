import React from 'react';
import { Card } from 'react-bootstrap';


export default function IconTextCard({icon, title, price, rate, count, className, actions}) {
  return (
    <Card 
        className={`text-start ${className}`}
        style={{
            border: '1px solid #ccc',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow
            marginBottom: '1rem',
            padding: '1rem',
            minHeight: '250px',
        }}
    >
        <Card.Header className='bg-body text-center'>
        <img src={icon} alt="img" width='100px' 
            style={{
                height: "auto",
                maxHeight: '150px',
                width: 'auto',
                maxWidth: '150px'
            }}
        />
        </Card.Header>
        <Card.Body>
            <Card.Text className='text-truncate'>{title}</Card.Text>
            <div className='fs-5'><span className='bi bi-currency-rupee'></span>{price}</div>
            <span className='badge bg-success'><span className='bi bi-star-fill'></span>{rate}</span>&nbsp;{count}
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between bg-body'>
            {actions}
        </Card.Footer>
    </Card> 
  )
}
