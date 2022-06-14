import React, { useEffect, useState } from 'react'
import {Box,Text,Checkbox,CheckboxGroup,VStack, Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup, MenuDivider, Button, HStack, Stack,} from '@chakra-ui/react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchdata} from '../redux/products/action'
const FilterComponents = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [categoryValues, setcategoryValues] = useState(searchParams.getAll('category') || []);

    const dispatch = useDispatch()

    // console.log(searchParams,'searchParam');
    const categoryHandler = (val) => {

        // console.log(val,'value');
        setcategoryValues(val)
    }

    useEffect(() => {
        if (categoryValues) {
            setSearchParams({ category: categoryValues }, { replace: true });

            let params = {
                category: searchParams.getAll('category'), 

                
            }
            dispatch(fetchdata(params))
            
        }
    }, [categoryValues, setSearchParams,searchParams,dispatch]);


  return (
      <div>
          <Box>
              <Box display={{base:"none",md:"block"}} p ="1rem 2rem">
                  <Text fontSize="2xl">Filters</Text>
                  <Text>Category</Text>

                  <CheckboxGroup colorScheme="green" defaultValue={[]} onChange= {categoryHandler}>
                      <VStack alignItems={"baseline"}>
                          <Checkbox value="men's clothing">Men's Clothings</Checkbox>
                          <Checkbox value="women's clothing">Women's Clothing</Checkbox>
                          <Checkbox value="jewelery">Jewelery</Checkbox>
                          <Checkbox value="electronics">Electronics</Checkbox>
                          <Checkbox value="bags">Bag's</Checkbox>

                      </VStack>

                  </CheckboxGroup>
              </Box>
              <Box display={{ base: 'block', md: "none" }} p="0rem 2rem"  left={'0'}>
                    <Menu closeOnSelect={false}>
                        <MenuButton as={Button} colorScheme='green'>
                            Filters
                      </MenuButton>
                      
                          
                      <Box overflow={'hidden'} marginLeft='-100px' _after={{
                          
                          marginBottom: '200px'
                      }
                      }
                      >
                          <MenuList minWidth='inherit' zIndex={"1000000"}>
                        
                              <CheckboxGroup colorScheme="green" defaultValue={[]} onChange={categoryHandler} maxWidth='200px'>
                                  <Stack >
                                      
                                      
                                  <Checkbox value="men's clothing">Men's Clothings</Checkbox>
                                  <Checkbox value="women's clothing">Women's Clothing</Checkbox>
                                  <Checkbox value="jewelery">Jewelery</Checkbox>
                                  <Checkbox value="electronics">Electronics</Checkbox>
                                  <Checkbox value="bags">Bag's</Checkbox> 
                                  </Stack>
                                  
                                  
                              </CheckboxGroup>
                        <MenuDivider />
                        
                          </MenuList>
                        </Box>
                    </Menu>
              </Box>
          </Box>
    </div>
  )
}

export default FilterComponents