import { Container } from '@material-ui/core'
import React from 'react'
import ProductList from '../components/ProductList'

function Home() {
  return (
    <Container maxWidth="md">
      <ProductList/>
    </Container>
  );
}

export default Home