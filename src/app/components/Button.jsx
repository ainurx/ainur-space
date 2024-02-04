import React from 'react'

import { Button } from '@chakra-ui/react'

function MyButton({text, isActive, onClick}){

    return(
        <Button 
            bg={isActive ? '#864AF9' : 'transparent'} 
            colorScheme={'Purple.400'}
            rounded={0} 
            top={0} 
            color={isActive ? 'white' : '#864AF9'}
            onClick={onClick}
            variant={isActive ? 'solid' : 'ghost'}
            style={{
                boxShadow: `${ isActive ? '8px 8px #000' : ''}`
            }}
        >
            {text}
        </Button>
    )
}

export default MyButton