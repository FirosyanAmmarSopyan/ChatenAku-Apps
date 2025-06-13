import React from 'react'
import { 
  Container, 
  Box, 
  Text,
  Tabs,
} from '@chakra-ui/react'
import { FormLogin } from '../components/ui/form-login'
import { FormRegister } from '../components/ui/form-register'

const HomeView = () => {

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          ChatenAku App
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" pt={10} pb={10}>
      <Tabs.Root variant={'enclosed'}  defaultValue="login">
      <Tabs.List justifyContent={'center'} w={'100%'}>
        <Tabs.Trigger w={'50%'} value="login">
          Login
        </Tabs.Trigger>
        <Tabs.Trigger w={'50%'} value="register">
          Register
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content
       _open={{
        animationName: "fade-in, scale-in",
        animationDuration: "300ms",
      }}
      _closed={{
        animationName: "fade-out, scale-out",
        animationDuration: "120ms",
      }}
       value="login">
        <FormLogin />
      </Tabs.Content>
      <Tabs.Content _open={{
        animationName: "fade-in, scale-in",
        animationDuration: "300ms",
      }}
      _closed={{
        animationName: "fade-out, scale-out",
        animationDuration: "120ms",
      }} value="register">
        <FormRegister />
      </Tabs.Content>
    </Tabs.Root>
      </Box>
    </Container>
  )
}

export default HomeView