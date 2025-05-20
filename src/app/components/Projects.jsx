'use client'
import {
  Box,
  Typography,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import * as motion from 'motion/react-client'

import Slider from './subcomponents/Slider'

const Projects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: '100vh',
        height: 'auto',
        px: { lg: 8, xs: 4 },
        py: 2,
      }}
    >
      <Box>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', lg: '3rem' },
              fontWeight: 'bold',
              mb: 4,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '80px',
                height: '4px',
                backgroundColor: '#00FF00',
              },
            }}
          >
            Company and Personal Projects
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <Box>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                      1. ParkNcharge(v2) - Portal
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                        SysNet Integrators, Inc.
                      </Typography>
                      <Typography variant="subtitle1">(Company Project)</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                      2. ParkNcharge(v2) - Admin
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                        SysNet Integrators, Inc.
                      </Typography>
                      <Typography variant="subtitle1">(Company Project)</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                      3. ParkNcharge(v2) - QR-Charging
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                        SysNet Integrators, Inc.
                      </Typography>
                      <Typography variant="subtitle1">(Company Project)</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions>
              </Accordion>
            </div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}

export default Projects
