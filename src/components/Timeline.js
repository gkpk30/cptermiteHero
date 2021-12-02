import * as React from 'react';
import Box from '@mui/material/Box'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
      <Box mt={8}>
        <Typography variant="h4" sx={{textAlign: 'center'}}>What to Expect</Typography>
        <Timeline position="right">
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                >
                9:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                Inspection Visit
                </Typography>
                <Typography>Captain Termite Control Inc. will inspect all accessible areas of your property. That includes the exteriors, underneath your home, and in the attic. With 25 years' experience you can trust that he'll do a thorough job</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                >
                10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                    <MoneyOffIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                Free Estimate
                </Typography>
                <Typography>The Captain will go over your treatment plan and schedule a treatment date at your convenience. Some treatments can take several hours to several days. All estimates are valid for 30 days</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                    <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Two Year Warranty
                </Typography>
                <Typography>Most treatments will come with a 2 year warranty. Captain will come out to inspect your property annually for the next two years.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                    <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    After 2nd Year
                </Typography>
                <Typography>We'll come out every year to inspect for re-infestations. Your exterior and interior treatments will continue for as long as you keep your warranty.</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </Box>
  );
}