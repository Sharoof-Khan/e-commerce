import { Avatar, Button, Flex, Menu, MenuButton, MenuItem, MenuList,Box } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
    return (
      
        <Flex>
            <Menu>
  <MenuButton as={Button} rounded = 'full' variant = 'link' >
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          </MenuButton>
          <Box zIndex={'10000'}>

  <MenuList  overflow='hidden'>
    {/* <MenuItem>Cart</MenuItem> */}
    <MenuItem>Login</MenuItem>
    <MenuItem>Logout</MenuItem>
    
  </MenuList>
          </Box>
</Menu>

        </Flex>
  )
}

export default Profile