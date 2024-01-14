import React from 'react'

import { Flex, List, ListItem, ListIcon, Text, Image } from '@chakra-ui/react'

function Works(){
    return(
        <List spacing={3}>
            <ListItem display={'flex'}>
                {/* <ListIcon color='green.500' /> */}
                <Image src='/default-image-1.png' borderRadius={'full'} boxSize={'24px'} mr={2} />
                <Flex>
                    <Text>Monstyr pte ltd | Software Developer</Text>
                    <Text>2022 - Present</Text>
                </Flex>
            </ListItem>
            <ListItem>
                <ListIcon color='green.500' />
                PT. Widya Intelektual Bangsa | Front end developer
            </ListItem>
            <ListItem>
                <ListIcon color='green.500' />
                Skypian | Software developer
            </ListItem>
            <ListItem>
                <ListIcon color='green.500' />
                Friendstech.id | Front end developer
            </ListItem>
        </List>
    )
}

export default Works