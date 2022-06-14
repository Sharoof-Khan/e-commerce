import React, { useEffect } from 'react'
import { Box, Heading, Stack,Center,useColorModeValue,Text,
  Image,
  Flex, } from '@chakra-ui/react'
import FilterComponents from '../components/FilterComponents'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../redux/products/action'
import { Link, useSearchParams } from 'react-router-dom'




const Products = (id) => {

    const products = useSelector((store) => store.ecommerceData.products);
  const dispatch = useDispatch()
  
  const [searchParams] = useSearchParams();


    useEffect(() => {
      if (products?.length === 0) {
        let params = {
            category:searchParams.getAll("category")
          }
            dispatch(fetchdata(params))
            
        }
    }, [dispatch, products?.length, products,searchParams])
    
    // console.log(products,'prod');
  return (

    // <Link to={`/products/${id}`}>
      <Box>
          <Stack display={{md:"flex"}} flexDirection = {{md:"row"}}>

          <Box minWidth={"15rem"}>
              <FilterComponents/>
          </Box>
              <Box>{/*Products*/}
                  <Heading as={'h3'}>Products</Heading>
                  <Flex flexWrap="wrap" justifyContent='space-around'>
                      {products.map((product) => {
                        return (
                          <Link key={product.id} to={`/products/${product.id}`}>

                            < ProductSimple key={product.id} image={product.image} title={product.title} price={product.price} />
                            
                          </Link>
                        )
                      })}
                  </Flex>
                  {/* <ProductSimple/> */}
                  
              </Box>
          </Stack>
    </Box>
// </Link>
  )
}

 function ProductSimple({image,title,price}) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ₹ {Math.round(price*20)}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              ₹ {Math.round((price + 500)*15)}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
export default Products