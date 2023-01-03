import {
    Box,
    Button,
    Container, FormLabel,
    Heading, FormControl,
    Center, Input
} from "@chakra-ui/react"
import { useState } from "react"

import { register } from '../api/index'

export default function Register() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    return (
        <>
            <Container h="100vh">
                <Center h="100vh">
                    <form onSubmit={(e) => { e.preventDefault(); register(user) }}>
                        <Box width="100%">
                            <Heading color="#101828" textAlign="center" mb="10">Register</Heading>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} type='Enter your email address' />
                            </FormControl>
                            <FormControl mt="3">
                                <FormLabel>Password {user?.password}</FormLabel>
                                <Input onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} type='Enter your password' />
                            </FormControl>
                            <Button onClick={() => register(user)} colorScheme='purple' width="100%" mt="5" size='lg'>
                                Sign up
                            </Button>
                            <Button colorScheme='gray' width="100%" mt="5" size='lg'>
                                Sign up with Google Account
                            </Button>
                        </Box>
                    </form>
                </Center >
            </Container>
        </>
    )
}
