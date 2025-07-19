'use client'
import { Box, Typography } from '@mui/material'
import * as motion from 'motion/react-client'

const Summary = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: '100vh',
        height: { lg: '100vh', xs: 'auto' },
        p: { lg: 8, xs: 2 },
      }}
    >
      <Box ref={props.onTargetRef}>
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
            Who am I?
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
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              textAlign: 'justify',
            }}
          >
            I'm CJ, a passionate developer from the Philippines who values clean code, practical
            solutions, and continuous learning. When I'm not coding, I enjoy playing basketball,
            biking, watching movies/TV series, and exploring ideas that blend technology and
            everyday life.
          </Typography>
        </motion.div>
      </Box>
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
            What I do?
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
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              textAlign: 'justify',
              mb: 3,
            }}
          >
            I'm a Front-End Developer with nearly 3 years of experience, starting as a Mid-Level
            React Developer and growing into full-stack development roles. I've recently been
            working with Next.js and exploring AI integration, including building a
            Retrieval-Augmented Generation (RAG) system with local LLM using Ollama.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              textAlign: 'justify',
              mb: 3,
            }}
          >
            My background in both design and code allows me to deliver interfaces that are not only
            functional but also user-friendly. I'm comfortable working independently, adapting to
            new tools, and solving real-world problems with clean, maintainable code.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              textAlign: 'justify',
            }}
          >
            I'm currently open to freelance work, collaborations, or full-time opportunities where I
            can make an impact.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  )
}

export default Summary
