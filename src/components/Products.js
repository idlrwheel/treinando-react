import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./Card";
import Images from './Images';
import Container from './Container';
import Title from './Title';
import Description from './Description';


const Products = ({ products }) => {
    return (
      <Container>
        {products.map(product => (
          <Card key={product.id}>
            <Title>{product.title}</Title>
            <Images src={product.imageUrl} alt={product.title} />
            <Description>{product.description}</Description>
          </Card>
        ))}
      </Container>
    );
  };
        
       

    export default Products
    

