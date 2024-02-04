import React from "react";

import { Box, Card, CardBody, Image, Spacer, Stack, Text } from '@chakra-ui/react'

function PotraitCard(){
    return (
        <Card 
            position={'relative'}
            w='sm' 
            p={4} 
            rounded={0} 
            border={'8px'}
            borderColor={'#864AF9'}
            backgroundColor={'white'}
            style={{
                boxShadow: '8px 8px #000'
            }}    
        >
            <Text 
                className="primary-font"
                color={'#000'}
                position={'absolute'} 
                bg={'white'}
                top={-6} 
                right={6} 
                border={'2px'} 
                borderColor={'#000'} 
                w={'fit-content'} 
                px={2}
                style={{ 
                    boxShadow: '6px 6px #000',
                    fontSize: '24px',
                    WebkitTextStrokeWidth: '0px'
                }}
            >
                Project name
            </Text>
            <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
            />
            <CardBody px={0}>
                <Stack spacing='2'>
                    <Spacer/>
                    <Box position={'relative'}>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora voluptas saepe officia a eos animi voluptatibus quae, laboriosam fuga commodi quidem voluptate iure nisi ipsum, ratione debitis nam architecto!</Text>
                    
                    <Box position={'absolute'} top={0} right={0} bg={'#864AF9'} w={'fit-content'} px={2} py={2}>
                        <Text fontSize='lg' color={'white'}>Front end</Text>
                    </Box>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default PotraitCard