import React from 'react'

import { Button } from '@chakra-ui/react'

function MyButton({text, isActive, onClick}){

    return(
        <Button 
            bg={isActive ? '#864AF9' : 'transparent'} 
            colorScheme={'Purple.400'}
            rounded={0} 
            top={0} 
            color={'white'}
            onClick={onClick}
            variant={isActive ? 'solid' : 'ghost'}
            className='primary-font'
            style={{
                boxShadow: `${ isActive ? '8px 8px #000' : ''}`,
                fontSize: '28px'
            }}
        >
            {text}
        </Button>
    )
}

export default MyButton