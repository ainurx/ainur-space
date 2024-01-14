import { Badge, Box, Divider, Flex, Image, Text } from '@chakra-ui/react'

function Sidebar(){
    return(
      <>
        <Box w='200' mt={'24px'}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 8, left: 8, backgroundColor: 'black', width: '92%', height: '285px' }}></div>
            <Box p={'8px'} style={{ position: 'absolute', top: 0, backgroundColor: '#864AF9', width: '92%' }}>
              <center>
                {/* <Center> */}
                  <Image 
                    borderRadius='full'
                    boxSize='150px'
                    src={'/ainur.jpg'} 
                    alt='Ainur Rahmat'  
                    objectFit='cover'
                  />
                  <Text fontSize={'3xl'} color={'white'}>Ainur Rahmat</Text>
                  <Flex>
                    <Image src={'/linkedin.png'} boxSize={'38px'}/>
                    <a 
                      href='https://github.com/ainurx'
                      style={{ color: 'white', fontSize: '14px' }}
                    >https://github.com/ainurx</a>
                  </Flex>
                  <Flex>
                    <Image src={'/github.png'} boxSize={'38px'}/>
                    <a 
                      href='https://www.linkedin.com/in/ainur-rahmat-9517a816a/'
                      style={{ color: 'white', fontSize: '14px' }}
                    >https://www.linkedin.com/in/ainur-rahmat-9517a816a/</a>
                  </Flex>
                {/* </Center> */}
              </center>
            </Box>
          </div>
        </Box>
        <Box mt={'348px'}>
          <div style={{ position: 'relative'}}>
            <div style={{ position: 'absolute', top: 8, left: 8, backgroundColor: 'black', width: '92%', height: '225px' }}></div>
            <Box p={'8px'} style={{ position: 'absolute', top: 0, backgroundColor: '#864AF9', width: '92%', height: 'max-content' }}>
            {/* <Box style={{ position: 'absolute', top: 0, backgroundColor: '#864AF9', width: '92%', height: '286px' }}> */}
              <Text fontSize={'3xl'} as={'b'} color={'white'}>Skill</Text>
              <div>
                <Badge mr={2} backgroundColor={'#FFD600'} color={'white'}>Fron end development</Badge>
                <Badge mr={2} backgroundColor={'#00D2DF'} color={'white'}>Back end development</Badge>
                <Badge mr={2} backgroundColor={'#4EAAFF'} color={'white'}>Mobile Development</Badge>
                <Badge mr={2} backgroundColor={'#000000'} color={'white'}>Unit test</Badge>
                <Badge mr={2} backgroundColor={'#2F63A0'} color={'white'}>Code review</Badge>
                <Badge mr={2} backgroundColor={'#8CEC6A'} color={'white'}>Web scraping</Badge>
              </div>
              <Divider mt={'4'}/>
              <Text fontSize={'3xl'} as={'b'} color={'white'}>Tech stack</Text>
              <div>
                <Badge mr={2} backgroundColor={'#FFD600'} color={'white'}>Javascript</Badge>
                <Badge mr={2} backgroundColor={'#00D2DF'} color={'white'}>Go</Badge>
                <Badge mr={2} backgroundColor={'#2F63A0'} color={'white'}>Python</Badge>
                <Badge mr={2} backgroundColor={'#000000'} color={'white'}>Next JS</Badge>
                <Badge mr={2} backgroundColor={'#8CEC6A'} color={'white'}>Express JS</Badge>
                <Badge mr={2} backgroundColor={'#4EAAFF'} color={'white'}>React JS</Badge>
              </div>
            </Box>
          </div>
        </Box>
      </>
    )
}

export default Sidebar