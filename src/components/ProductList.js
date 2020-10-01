import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import ProductCard from './ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../redux/actions'


export default function ProductList() {
  const { data, loading, error } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (loading) {
    return <h1>Fetch Data...</h1>
  }
  if (error) {
    return <h1>Error...{error.message}</h1>
  }

  return (
    <Grid container justify="space-around">
      {data.map((item) =>
        <Grid key={"product-card -" + item.id} item xs={12} sm={6} md={4} >
          <ProductCard data={item} />
        </Grid>
      )}
    </Grid>
  )
}