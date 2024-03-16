// import styles from './page.module.css'

import { Box, Center, Flex, Image, Spacer, Text } from '@chakra-ui/react'

import Works from './components/Works'
import Portfolio from './components/Portfolio'

export default function Home() {
  const desc = `an Software developer\nexperience in\nWeb development, Mobile development & Web scraping.`

  return (
    <main>
      <div style={{ position: 'relative', height: '100vh' }}>
        <div className='center-v'>
          <Center>
            <Image
              borderRadius='full'
              boxSize='150px'
              src={'/ainurhmt.jpg'} 
              alt='Ainur Rahmat'  
              objectFit='cover'
            />
          </Center>
          <Text className='primary-font' textAlign={'center'} fontSize={'5xl'}>AINUR RAHMAT</Text>
          <Text color={'#FFF'} textAlign={'center'} whiteSpace={'pre-line'}>{desc}</Text>
          <Center>
            <Flex mt={'18px'} width={'150px'}>
              <a href='https://www.linkedin.com/in/ainur-rahmat-9517a816a/' target='_blank'>
                <Image src={'/linkedin-1.png'} alt='Linked In' boxSize={'52px'}/>
              </a>
              <Spacer/>
              <a href='https://github.com/ainurx' target='_blank'>
                <Image src={'/github-1.png'} at='Github' boxSize={'52px'}/>
              </a>
            </Flex>
          </Center>
        </div>
      </div>

      {/* FOR FURTHER IMPROVEMENT */}
      {/* <Text className='primary-font' as={'b'} fontSize={'6xl'}>Full stack developer</Text>

      <Flex flexDirection={'column'} mt={18}>
        <Box pos={'relative'}>
          <Box 
            pos={'absolute'} 
            w={'100%'} 
            h={'max-content'} 
            backgroundColor={'white'} 
            border={'4px'} 
            borderColor={'black'} 
            p={4} 
            mt={6}
            style={{ boxShadow: '12px 12px #000'}}
            >
            <Works/>
          </Box>
          <Text pos={'absolute'} top={-4} left={8} className='primary-font primary-bg' py={1} px={3} fontSize={'3xl'} as={'b'}>Experience</Text>
        </Box>
        <Box mt={260}>
          <Text className='primary-font' fontSize={'4xl'} as={'b'}>Portfolio 👀</Text>
          <Portfolio/>
        </Box>
      </Flex> */}
    </main>
  )
}
