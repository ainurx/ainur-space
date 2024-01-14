// import styles from './page.module.css'

import { Box, Flex, Text } from '@chakra-ui/react'

import Works from './components/Works'
import Portfolio from './components/Portfolio'

export default function Home() {
  return (
    <main>
      <Text as={'b'} fontSize={'5xl'} color={'black'}>Full stack developer</Text>

      <Flex flexDirection={'column'}>
        <Box pos={'relative'}>
          <Box pos={'absolute'} top={4} left={4} w={'100%'} h={'214px'} backgroundColor={'black'}></Box>
          <Box pos={'absolute'} w={'100%'} h={'max-content'} backgroundColor={'white'} border={'4px'} borderColor={'black'} p={4}>
            <Text fontSize={'3xl'} as={'b'}>Work experience</Text>
            <Works/>
          </Box>
        </Box>
        <Box mt={260}>
          <Text fontSize={'3xl'} as={'b'}>Portfolio 👀</Text>
          <Portfolio/>
        </Box>
      </Flex>
    </main>
  )
}
