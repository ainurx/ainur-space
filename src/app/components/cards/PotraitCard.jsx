import React from "react";

import { Card, CardBody, Flex, Image, Spacer, Stack, Text } from '@chakra-ui/react'

function PotraitCard(){
    return (
        <Card w='sm' border={'4px'} borderColor={'black'} backgroundColor={'#864AF9'}>
            <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
            />
            <CardBody>
                <Stack spacing='2'>
                <Flex>
                    <Text fontSize='2xl' color={'white'} as='b'>Living room Sofa</Text>
                    <Spacer/>
                    <Text fontSize='lg' color={'white'}>Front end</Text>
                </Flex>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default PotraitCard