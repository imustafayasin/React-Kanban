import {
    Box,
    Button,
    Container, FormLabel,
    Heading, FormControl,
    Center, Input
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import { login } from '../api/index'

export default function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    async function formSubmit(e) {
        e.preventDefault();
        let loginResult = await login(user);
        console.log(loginResult);
    }
    return (
        <>
            <Container h="100vh">
                <Center h="100vh">
                    <form onSubmit={formSubmit}>
                        <Box width="100%">
                            <Heading color="#101828" textAlign="center" mb="10">Log in to your account</Heading>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input required onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} type='email' placeholder="Enter an email" />
                            </FormControl>
                            <FormControl mt="3">
                                <FormLabel>Password</FormLabel>
                                <Input minLength={3} required onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} type='password' placeholder="Enter your password" />
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
