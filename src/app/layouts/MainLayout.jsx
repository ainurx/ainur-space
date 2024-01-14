import React from "react";
import { Container, Grid, GridItem, Text } from '@chakra-ui/react'

import Navbar from "../components/Navbar";

function MainLayout({ sidebar, content }){
    return(
        <>
            <Navbar/>
            <Container maxW={'1200px'} >
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    <GridItem colSpan={1} h='800'>{sidebar()}</GridItem>
                    <GridItem colSpan={2} h='800'>{content}</GridItem>
                </Grid>
            </Container>
            <footer>
                <Text textAlign={'center'} my={4}>&copy;2024. Ainur Rahmat.</Text>
            </footer>
        </>
    )
}

export default MainLayout