import React from 'react'
import { graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import CustomCard from '../../components/Card'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Index({data}) {
    console.log(data)
    const treatments = data.allMarkdownRemark.nodes 

    console.log('Treatments: ', treatments)
    // console.log('Excerpts: ', treatments.excerptAst.children[2].children[0].value)
    console.table(treatments)
    // console.log('excerpts:', treatments.excerptAst.children[2].children[0].value)
    // console.log('excerpts:', treatments.excerptAst)

    // const treatments = [
    //     {type: "Precision Injection", description: "Precision injection is a spot treatment where we inject PremiseII or Termidor directly into the wood that contains termite colonies. We basically fill the tunnels in the wood that the colony has created and fill them up. After spot treatments a coat of Bora-Care is sprayed over the wood. Because this a localized treatment type homeowners can be home while we work. It only takes a couple of hours for our experienced specialist to finish."},
    //     {type: "Borate Treatment", description: "Used in spot treatments, foam treatments and preventative treatments the environmentally–benign borate preservatives dehydrate the termites and effectively eliminates them. </br>We use Timbor and Bora-Care in it's liquid form which provides a better application as we broadcast the spray over the wood. This treatment method is a well–established technology with a proven track record – treated wood has been used safely and effectively around the world for over 60 years. It's an appropriate choice to protect indoor wood products from wood–destroying termites, carpenter ants, powderpost beetles, mold and fungi."},
    //     {type: "Foam Treament", description: "You can agree that the worst place to get termites is inside your walls where they can't be seen. Our termite specialist carefully drills a 1/16th hole in between the studs of your wall. Then pushes the soapy foam Borate treatment as it soaks into the sides of the studs. This treatment is effective at protecting the insides of the walls making a protective alternative to traditional tenting." },
    //     {type:"Preventative Treatment", description: "Preventative treatments is a plan that include any combination of Soil, Foam or Injection treatments that will create the protective barrier against subterranean or dry wood termites." },
    //     {type: "Pre-Construction Treatment", description: "A preventative treatment process that works against subterranean termites and their colonies. Applications of Termidor during the pre-construction phase of your home or business will safeguard you from termite infestation." },
    //     {type: "Soil Treatments", description: "You can't tent fumigate against subterranean termites and their branching colonies. Our specialists will crawl underneath your home or carefully drill through the slab to create a protective barrier around the perimeter and underneath your home. Think of it as a protective \"moat\" around the exterior of the house specifically targeting subterranean termites. The months of February and March marks the beginning of subterranean termite season"},
    //     {type: "Cellulose Removal", description: "Homeowners know that termites have a reputation of eating wood. Termites get their nutrition from eating cellulose debris such as paper, cardboard and lumber that has been forgotten underneath your house"},
    //     {type: "Traditional Tent Fumigation", description: "Traditional Tent fumigation is an all inclusive treatment type against dry wood termites. We essentially bag your entire home, building or business. Tent fumigation is so effective that it is extremely rare to have recurring termite problems because it will most likely eliminate 100% of dry wood termites. We use Vakane gas when other termite companies use cheaper, inferior and less effective gas products.</br>Nowadays tent fumigation is much less evasive or as inconvenient for the customer as it once was. Because we use Vakane gas you will not need to clean your floors, wash your dishes, or wash your clothes after the tent fumigation. Captain Termite Control can thoroughly explain the process to you and will offer you tips and pointers to prepare you for fumigation. We will also provide you with free bags for your food."}
    // ]

    return (
        
            <>
                <Box maxWidth="100%" height='auto'>
                    <StaticImage style={{width:'100%', height:'100%'}}  src="../images/house.png" alt="Free Estimate, Treatment Options, Warranty and Annual Inspection" objectFit="cover" />
                </Box>
                {/* <Box maxWidth="100%" height='auto'>
                    <StaticImage style={{width:'100%', height:'100%'}}  src="../../images/house.png" alt="Free Estimate, Treatment Options, Warranty and Annual Inspection" objectFit="cover" />
                </Box> */}
                <Container maxWidth="md">
                <Typography variant='h4' component='h1'>
                        We have you covered at Captain Termite Control
                    </Typography>
                    <Typography variant="h5" component="h2">We want your Home or Business to grow</Typography>
                    {/* <Grid container spacing={2}>

                    {treatments.map(treatment=> (
                        <Grid item  xs={6} md={6} lg={4} key={treatment.id}>
                            <Paper >
                            <Typography variant="h6">
                                {treatment.title}
                            </Typography>
                            <Typography variant="body1">
                                {treatment.excerpt}
                            </Typography>
                            <Typography>{treatment.timeToRead}</Typography>
                            </Paper>
                            
                        </Grid>
                    ))}

                    </Grid> */}

                    
                    <Box >
                        <Grid container  spacing={2} justifyContent='center'   direction='row'>
                            {treatments.map(treatment=> (
                                <Grid item key={treatment.id}>
                                    <CustomCard treatment={treatment}
                                        title={treatment.frontmatter.title}
                                        slug={treatment.frontmatter.slug}
                                        excerpt={treatment.excerptAst.children[2].children[0].value}
                                        timeToRead={treatment.timeToRead}
                                        thumbnail={treatment.thumb}
                                        thumbImage={treatment.frontmatter.thumb.childImageSharp.gatsbyImageData}
                                    />
                                </Grid>
                            ))}    
                        </Grid>
                    </Box>
                    
                </Container>
            </>
       
    )
}

// export const query = graphql`
//   {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           slug
//           title
//           thumb {
//             childImageSharp {
//               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
//             }
//           }
//         }
//         excerpt(pruneLength: 115, format: HTML)
//         timeToRead
//         id
//       }
//     }
//   }
// `

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 210)
            }
          }
        }
        timeToRead
        id
        excerptAst(pruneLength: 100)
      }
    }
  }
`

