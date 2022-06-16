import React from 'react'
import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import{DeleteIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart, removeProductFromCart} from '../redux/products/action'
import Subtotal from '../components/SubTotal'
import { Checkout } from '../components/Checkout'
import Marquee from "react-fast-marquee";


const Cart = () => {
  const cart = useSelector(store => store.ecommerceData.cart)
  const dispatch = useDispatch()
  // console.log(cart, 'cart');

  const removeProduct = (id) => { 
    console.log("Going to remove product from Cart",id);
    dispatch(removeProductFromCart(id))
    
  }
  const handleCheckout = () => {

  
  }
  return (
    <Box>
      <Heading as={'h2'} size='xl' textAlign={'center'}>
        Cart
      </Heading>

      {!cart.length &&
        <Marquee speed={'80'} >
        
        <Text fontSize={'3xl'} color='red' fontStyle={'italic'} fontWeight='bold' > No items in cart !!!, Continue Shopping... </Text>
        </Marquee>
      }
      
      <Box minHeight={'75vh'}>
        {
          cart.map(item => {
            
            return <CartItem
            id = {item.id}
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            removeProduct = {removeProduct}
            />
            
          })
        }
        </Box> 
      {cart?.length >= 1 && <Subtotal />}
      
      {cart?.length >= 1 && <Checkout cart={cart } handleCheckout = {handleCheckout} />} 
      

    </Box >
    
  )
}

//  const image =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function CartItem({title,image,description,price,removeProduct,id}) { 



  return (
    // <Box border={'1px solid red'} rounded = 'lg' width={'fit-content'} margin= 'auto' marginBottom={"2rem"}>
    <Box  rounded = 'lg' width={'fit-content'} margin= 'auto' marginBottom={"2rem"}>
      <Stack direction={{base:"column",md:"row"}} justifyContent = 'center' alignItems={'center'}>

        {/* <Box height={"300px"} width={'300px'} border={'1px solid blue'} position = 'relative' _after={{ */}
        <Box height={"300px"} width={'300px'}  position = 'relative' _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '90%',
            h: '90%',
            pos: 'absolute',
            top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
         
          >
           <Image
            rounded={'lg'}
            height={280}
            width={300}
            objectFit={'contain'}
            src={image}
            borderRadius={'10%'}
          />
      </Box>
        {/* <Box height={"300px"} width={'300px'} border={'1px solid green'}> */}
        <Box height={"300px"} width={'300px'} >
          <Stack p={4}>
            <Heading as={'h6'} size='md'>{title}</Heading>
            <Box overflow={"hidden"} whiteSpace = 'nowrap' textOverflow={'ellipsis'} >

            <Text  >{ description}</Text>
            </Box>
             <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {/* ₹ {currentProduct.price} */}
              ₹ {price}
            </Text>

            <Button  variant={'outline'} leftIcon = {<DeleteIcon/>} onClick={()=>removeProduct(id)}>Remove </Button>
          </Stack>
            
          

      </Box>
      </Stack>
      
    </Box>
  )

}

export default Cart