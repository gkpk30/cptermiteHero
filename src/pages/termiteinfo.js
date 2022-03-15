import React from 'react'
import {graphql} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function termiteinfo({data}) {
console.log('termite data from graphql', data);


    return (
        <Container maxWidth="md" >
            <Box  mt={{xs:4, sm: 6, md:10}}>
            <Typography variant='caption text' component='h2' mb={6} color="text.lightBlue" fontWeight='500'  > Termites </Typography>
                <Typography mb={2} variant="h4" component="h1"> DRYWOOD TERMITES</Typography>
                       
                <Typography variant="h5" component="h2">
                     What They Look Like 
                </Typography>
                <Typography variant="text"> 
                    If you have Drywood Termites, the first thing you will notice is sawdust/sand fecal pellets. You'll also start noticing damage. Sometimes you might actually see the termites as they swarm out at the end of the summer season. Although you will notice these termites predominately in the summer window the termites are eating your home all year long, 24 hours a day. Just because you don't see them does not mean they are not there. This is why an experienced and trusting termite inspector should be called. We will take a look at your home free of charge. Captain Termite Control provides traditional fumigation methods as well as alternative spot treatments.
                </Typography>
                <Typography mt={2} variant="h5" component="h2">
                    HOW DID DRYWOOD TERMITES ENTER MY HOME?
                </Typography>
                <Typography variant="text">
                    Drywood Termites are airborne. They will fly in, swarming in from a neighbor's house, from vegetation around the exterior of your home or property line fences.
                </Typography> 
                <Typography mt={2} variant="h5" component="h2">
                    WILL THE TERMITES COME BACK AFTER TREATMENT?
                </Typography>  
                <Typography variant="text">
                    Yes, they likely will come back. Make it our responsibility to make sure you will never have to worry about termites again. Ask your inspector about a full structure minimal warranty.
                </Typography>
            

                <Grid my={3} container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            <StaticImage height={271} width={406} layout='constrained'   src="../images/winged-termite-on-Log.jpg" alt='termite swarm' />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <StaticImage height={271} width={406} layout='constrained'    src="../images/termite-pellets-close-1.jpg" alt='fecal pellets'/>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <StaticImage height={271} width={406} layout='constrained'  src="../images/TERMITE-CASTE-SYSTEM.png" alt="termite caste stystem"/>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <StaticImage height={271} width={406} layout='constrained'   src="../images/thumbs/termite-damage-rotten-wood-eat-nest-destroy-concept.jpg" alt="termite-damage-rotten-wood-eat-next-destroy"/>
                        </Item>
                    </Grid>
                </Grid>
          
           
            
            <Divider sx={{my:2}}/>

            <Typography mt={3} variant="h4" component="h1"> 
                SUBTERRANEAN TERMITES
            </Typography>
            <Typography mt={2} variant="h5" component="h2">
                 What They Look Like
            </Typography>
            <Typography variant="text">
                Winged termites are swarming wood eaters usually seen during the spring months. They get their name by living in the soil in colonies. They travel from their colonies in the soil to their food source (homes, scrap wood, cardboard, etc). Whether your home is raised or on a slab foundation they will find a way in.
            </Typography>  
            <Typography  mt={2} variant="h5" component="h2">
                HOW DID SUBTERRANEAN TERMITES ENTER MY HOME?
            </Typography>
            <Typography variant="text">
                If your structure is raised these termites will enter the home easily through mud shelter tubes traveling as far and as long as necessary to get to their food source. Therefore, we suggest that you have your sub area inspected periodically.
            </Typography>
            <Typography variant="text">
                If you are on a slab foundation these termites find their way up from the soil through cracks in the foundation, around plumbing, cement expansion joints, and other areas that give them access to your structure. They are attracted to moisture and wood/cellulose debris. Subterranean colonies can be eradicated by a soil treatment.
            </Typography>

            <Grid my={3} container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            <StaticImage height={271} width={406} layout='constrained'   src="../images/The-wood-home-with-termites-damage.jpg" alt='termite damage on wood hoe' />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <StaticImage height={271} width={406} layout='constrained' src="../images/Termites-attack-home-from-underground.jpg" alt='subtermite from underground attack'/>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <StaticImage height={271} width={406} layout='constrained'  src="../images/Traces-of-termites-on-old-wood-background.jpg" alt="termites on cellulose"/>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <StaticImage height={271} width={406} layout='constrained'   src="../images/thumbs/subtermite_480x480.jpg" alt="subtermite"/>
                        </Item>
                    </Grid>
                </Grid>
            
           

            
            </Box>
        </Container>
    )
}

export const query = graphql`
  {
    file(relativePath: {eq: "house.png"}) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`