'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
// import * as motion from 'motion/react-client'
import { motion } from 'motion/react'
import { Typewriter } from 'react-simple-typewriter'

import TechStack from './components/TechStack'
import Summary from './components/Summary'
import Projects from './components/Projects'

export default function Home() {
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
  // State to control which line to show
  const [showLine, setShowLine] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [UserImage, setUserImage] = useState(false)

  useEffect(() => {
    setUserImage(true)
    setTimeout(() => {
      setShowLine(1)
    }, 1500)
  }, [])

  useEffect(() => {
    if (showLine === 5) {
      setShowButton(true)
    }
    let timer

    if (showLine === 3) {
      // Set up the sequential typing effect with delays between each line
      timer = setTimeout(() => {
        setShowLine((prev) => prev + 1)
      }, 2750) // Adjust delay between lines (in milliseconds)
    } else {
      if (showLine !== 5) {
        // Set up the sequential typing effect with delays between each line
        timer = setTimeout(() => {
          setShowLine((prev) => prev + 1)
        }, 2250) // Adjust delay between lines (in milliseconds)
      }
    }

    return () => clearTimeout(timer) // Clean up on unmount
  }, [showLine])

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        minHeight: '100vh',
        width: '100vw',
        color: 'white',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          minHeight: '100vh',
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            width: { lg: '70vw', xs: '100%' },
            p: { lg: 8, xs: 4 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'space-between', lg: 'space-around' },
          }}
        >
          <Box sx={{ zIndex: 2 }}>
            {/* First Line */}
            {showLine >= 1 &&
              (showLine == 1 ? (
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: { xs: 46, lg: 64 },
                  }}
                >
                  <Typewriter
                    words={["Hi! I'm Crisjahn Perez"]}
                    loop={1}
                    cursor={showLine <= 1}
                    cursorStyle="|"
                    typeSpeed={30}
                    deleteSpeed={0}
                    onLoopDone={() => setShowLine(2)} // Move to next line after completion
                  />
                </Typography>
              ) : (
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: { xs: 46, lg: 64 },
                    // textAlign: { xs: 'center', lg: 'start' },
                  }}
                >
                  Hi! I'm
                  <br />
                  <span style={{ color: '#00FF00', textAlign: 'center' }}>Crisjahn Perez</span>
                </Typography>
              ))}

            {/* Second Line */}
            {showLine >= 2 &&
              (showLine == 2 ? (
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'white',
                    fontSize: { xs: 24, lg: 32 },
                    marginLeft: { lg: 4, xs: 0 },
                    marginTop: { xs: 8, lg: 4 },
                    textAlign: { xs: 'center', lg: 'start' },
                  }}
                >
                  <Typewriter
                    words={["> You can call me 'CJ'."]}
                    loop={1}
                    cursor={showLine <= 2}
                    cursorStyle="|"
                    typeSpeed={30}
                    deleteSpeed={0}
                    delay={1000}
                    onLoopDone={() => setShowLine(3)} // Move to next line after completion
                  />
                </Typography>
              ) : (
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'white',
                    fontSize: { xs: 24, lg: 32 },
                    marginLeft: { lg: 4, xs: 0 },
                    marginTop: { xs: 8, lg: 4 },
                    textAlign: { xs: 'center', lg: 'start' },
                  }}
                >
                  {'>'}&nbsp;You can call me '<span style={{ color: '#00FF00' }}>CJ</span>'.
                </Typography>
              ))}

            {/* Third Line */}
            {showLine >= 3 && (
              <Typography
                variant="subtitle2"
                sx={{
                  color: 'white',
                  fontSize: { xs: 24, lg: 32 },
                  marginLeft: { lg: 4, xs: 0 },
                  textAlign: { xs: 'center', lg: 'start' },
                }}
              >
                <Typewriter
                  words={["> I'm a Web & Mobile Application Developer"]}
                  loop={1}
                  cursor={showLine <= 3}
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={0}
                  delay={1000}
                  onLoopDone={() => setShowLine(4)} // Move to next line after completion
                />
              </Typography>
            )}

            {/* Fourth Line */}
            {showLine >= 4 && (
              <Typography
                sx={{
                  color: 'white',
                  fontSize: { xs: 24, lg: 32 },
                  marginLeft: { lg: 4, xs: 0 },
                  textAlign: { xs: 'center', lg: 'start' },
                }}
              >
                <Typewriter
                  words={['> How can I help you?']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={0}
                  delay={1000}
                  onLoopDone={() => setShowLine(5)}
                />
              </Typography>
            )}
          </Box>

          {/* Buttons Section */}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 1, lg: 3 },
                  flexWrap: 'wrap',
                  marginTop: { xs: 4 },
                  justifyContent: { xs: 'center', lg: 'start' },
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    borderWidth: 3,
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  Learn more about me
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  disabled
                  sx={{
                    color: '#00FF00',
                    borderWidth: 3,
                    borderColor: '#00FF00',
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderWidth: '2px',
                    '&.Mui-disabled': {
                      color: 'gray',
                      borderColor: 'gray',
                    },
                  }}
                >
                  Ask my Assistant AI (Coming Soon!)
                </Button>
              </Box>
            </motion.div>
          )}
        </Box>

        {/* Image Section */}
        {UserImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 },
            }}
            style={{
              position: isMdUp ? 'relative' : 'absolute',
              width: isMdUp ? '40vw' : '100%',
            }}
          >
            <Box
              sx={{
                width: { lg: '40vw', xs: '100%' },
                height: { xs: '100vh', lg: '100vh' },
                opacity: { xs: '45%', lg: '100%' },
                position: { xs: 'absolute', lg: 'relative' },
                overflow: 'hidden',
                padding: 8,
                zIndex: 1,
                borderRadius: '0 0 0 16px',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0.1) 10%)',
                  zIndex: 1,
                  mixBlendMode: 'multiply',
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: {
                    xs: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                    lg: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)',
                  },
                  zIndex: 1,
                  mixBlendMode: 'multiply',
                },
              }}
            >
              <Image
                src={'/assets/img/image-003.png'}
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '0 0 0 35%',
                  maskImage: 'radial-gradient(circle at 70% 50%, black 30%, transparent 100%)',
                }}
                alt="CJ - Web Developer"
              />
            </Box>
          </motion.div>
        )}
      </Box>

      {/* About Section */}
      {showButton && (
        <Box
          sx={{
            maxWidth: '100vw',
            width: 'auto',
            mx: { md: '64px', xs: '16px' },
          }}
        >
          <Summary />
          <TechStack />
          <Projects />
        </Box>
      )}
    </Box>
  )
}
