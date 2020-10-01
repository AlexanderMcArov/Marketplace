import React from 'react'
import {
  Button,
  CardHeader,
  Card,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,  
  Typography,
  CardActions,
  makeStyles
} from '@material-ui/core'
import { MoreVert as MoreVertIcon, ShoppingCart, Share } from '@material-ui/icons'

import emptyImage from '../assets/image/empty.webp'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: 'contain',
    position: 'relative',
  },
  mediaImage: {
    position: 'absolute',
    height: '100%',
    maxWidth: '100%',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
  },
  price: {
  },
  oldPrice: {
    textDecoration: 'line-through'    
  },
  saleIndicator:{
    position: 'absolute',
    top: '5px',
    right: '5px',
    padding: '10px'
  },
  cardActions:{
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default function ProductCard({data}) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar>{data.author[0] || "?"}</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
        subheader={data.author}
      />
      <CardMedia className={classes.media}>
        <img 
        className={classes.mediaImage}
        src = {data.image}
        onError={e=>{
          e.target.src = emptyImage
        }} >          
        </img> 
        {data.discountInPersent == null && (
          <Button className={classes.saleIndicator} variant="contained" color="secondary">
          -{ data.discuntInPercent}%
          </Button> 
        )}        
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <div >
          <IconButton aria-label="add to card">
            <ShoppingCart />
          </IconButton>
          <IconButton aria-label="add to card">
            <Share />
          </IconButton>
        </div>
        <div >
          {data.salePrice != null && (
            <Button className={classes.oldPrice} color="secondary" variant="outlined">{data.price}</Button>
          )}
          <Button className={classes.price} variant="outlined" color="primary">
            { data.salePrice ?? data.price }$
          </Button>
        </div>
      </CardActions>
    </Card>
  )
}
