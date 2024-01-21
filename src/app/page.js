// import styles from './page.module.css'

import { Box, Flex, Text } from '@chakra-ui/react'

import Works from './components/Works'
import Portfolio from './components/Portfolio'

export default function Home() {
  return (
    <main>
      <Text className='primary-font' as={'b'} fontSize={'6xl'}>Full stack developer</Text>

      <Flex flexDirection={'column'} mt={18}>
        <Box pos={'relative'}>
          <Box pos={'absolute'} top={8} left={4} w={'100%'} h={'214px'} backgroundColor={'black'}></Box>
          <Box pos={'absolute'} w={'100%'} h={'max-content'} backgroundColor={'white'} border={'4px'} borderColor={'black'} p={4} mt={6}>
            <Works/>
          </Box>
          <Text pos={'absolute'} top={-4} left={8} className='primary-font primary-bg' py={3} px={2} fontSize={'3xl'} as={'b'}>Work experience</Text>
        </Box>
        <Box mt={260}>
          <Text className='primary-font' fontSize={'4xl'} as={'b'}>Portfolio 👀</Text>
          <Portfolio/>
        </Box>
      </Flex>
    </main>
  )
}
