import {
    Box,
    Button,
    Container, FormLabel,
    Heading, FormControl,
    Center, Input
} from "@chakra-ui/react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import { login } from '../api/index'

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    return (
        <>
            <Container h="100vh">
                <Center h="100vh">
                    <form onSubmit={(e) => { e.preventDefault(); login(user) }}>
                        <Box width="100%">
                            {JSON.stringify(user)}
                            <Heading color="#101828" textAlign="center" mb="10">Log in to your account</Heading>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} type='text' placeholder="Enter an email" />
                            </FormControl>
                            <FormControl mt="3">
                                <FormLabel>Password</FormLabel>
                                <Input onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} type='password' placeholder="Enter your password" />
                            </FormControl>
                            <Button type="submit" colorScheme='purple' width="100%" mt="5" size='lg'>
                                Sign in
                            </Button>
                            <Button colorScheme='gray' width="100%" mt="5" size='lg'>
                                Sign in with Google Account
                            </Button>
                            <NavLink as='button' to="/register" colorScheme='purple' width="100%" mt="5" size='lg'>
                                Sign up
                            </NavLink>
                        </Box>
                    </form>
                </Center >
            </Container>
        </>
    )
}
