import React, { useEffect } from 'react'
import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import{DeleteIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrder, removeFromOrder} from '../redux/products/action'
// import Subtotal from '../components/SubTotal'
// import { Checkout } from '../components/Checkout'
import Marquee from "react-fast-marquee";
import { nanoid } from 'nanoid'



const Order = () => {
  const order = useSelector(store => store.ecommerceData.orders)
  const dispatch = useDispatch()
  console.log(order, 'order');

  
  useEffect(() => {

      dispatch(fetchOrder(order))
    
    
  }, [dispatch])

  const cancelOrder = (id) => { 
    console.log("Going to remove product from Cart",id);
    dispatch(removeFromOrder(id))
    
  }
  
  return (
    <Box>
      <Heading as={'h2'} size='xl' textAlign={'center'}>
       Your Order
      </Heading>

      {!order.length &&
        <Marquee speed={'80'} >
        
        <Text fontSize={'3xl'} color='red' fontStyle={'italic'} fontWeight='bold' > No Order !!!, Continue Shopping... </Text>
        </Marquee>
      }
      
      <Box minHeight={'75vh'}>
        {
          order.map(item => {
            
            return <CartItem
              key={nanoid(3)}
            // id = {nanoid(3)}
            id = {item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
              cancelOrder={cancelOrder}
            />
            
          })
        }
        </Box> 
      {/* {order?.length >= 1 && <Subtotal />} */}
      
              {/* handleCheckout = {handleCheckout} */}
      {/* {order?.length >= 1 && <Checkout order={order } handleCheckout = {'s'}  />}  */}
      

    </Box >
    
  )
}

//  const image =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function CartItem({title,image,description,price,cancelOrder,id}) { 



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

            <Button  variant={'outline'} leftIcon = {<DeleteIcon/>} onClick={()=>cancelOrder(id)}>Cancel Order </Button>
          </Stack>
            
          

      </Box>
      </Stack>
      
    </Box>
  )

}

export default Order