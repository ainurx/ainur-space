import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

import PotraitCard from './cards/PotraitCard'

function Portfolio(){
    return(
        <Box>
            <Grid templateColumns={'repeat(4, 1fr)'} gap={6}>
                <GridItem>
                    <PotraitCard />
                </GridItem>
                {/* <GridItem>
                    <PotraitCard />
                </GridItem>
                <GridItem>
                    <PotraitCard />
                </GridItem>
                <GridItem>
                    <PotraitCard />
                </GridItem> */}
            </Grid>
        </Box>
    )
}

export default Portfolio