'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  Chip,
  CardContent,
} from '@mui/material'
import * as motion from 'motion/react-client'
import { Typewriter } from 'react-simple-typewriter'

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
                  Hi! I'm{' '}
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
                  }}
                >
                  Ask my Assistant AI
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
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              minHeight: '100vh',
              height: { lg: '100vh', xs: 'auto' },
              p: { lg: 8, xs: 4 },
            }}
          >
            <Box>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.2 }}
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
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    textAlign: 'justify',
                  }}
                >
                  I'm CJ, a passionate developer from the Philippines who values clean code,
                  practical solutions, and continuous learning. When I'm not coding, I enjoy playing
                  basketball, biking, watching movies/TV series, and exploring ideas that blend
                  technology and everyday life.
                </Typography>
              </motion.div>
            </Box>
            <Box>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.2 }}
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
                  I'm a Front-End Developer with nearly 3 years of experience, starting as a
                  Mid-Level React Developer and growing into full-stack development roles. I've
                  recently been working with Next.js and exploring AI integration, including
                  building a Retrieval-Augmented Generation (RAG) system with local LLM using
                  Ollama.
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
                  My background in both design and code allows me to deliver interfaces that are not
                  only functional but also user-friendly. I'm comfortable working independently,
                  adapting to new tools, and solving real-world problems with clean, maintainable
                  code.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    textAlign: 'justify',
                  }}
                >
                  I'm currently open to freelance work, collaborations, or full-time opportunities
                  where I can make an impact.
                </Typography>
              </motion.div>
            </Box>
          </Box>
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
                  What I Work With
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
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Card
                    sx={{
                      width: { md: '30%', xs: '100%' },
                      borderRadius: '16px',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}
                      >
                        Frontend Technologies
                      </Typography>
                      <Box sx={{ px: 4, marginTop: 4 }}>
                        <ul>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{ fontSize: 16, fontWeight: 'bold' }}
                              >
                                Core:
                              </Typography>
                              <Chip
                                avatar={
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                                  </svg>
                                }
                                label="HTML"
                              />
                              <Chip label="CSS" />
                              <Chip
                                avatar={
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                                  </svg>
                                }
                                label="JavaScript"
                              />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{ fontSize: 16, fontWeight: 'bold' }}
                              >
                                Frameworks:
                              </Typography>
                              <Chip label="React.js" />
                              <Chip label="Next.js" />
                              <Chip label="React-Native" />
                            </Box>
                          </li>
                          <li>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{ fontSize: 16, fontWeight: 'bold' }}
                              >
                                Styling:
                              </Typography>
                              <Chip label="Tailwind CSS" />
                              <Chip label="Bootstrap" />
                              <Chip label="Material UI" />
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      width: { md: '30%', xs: '100%' },
                      borderRadius: '16px',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}
                      >
                        Design Tools
                      </Typography>
                      <Box sx={{ px: 4, marginTop: 4 }}>
                        <ul>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Figma (UI/UX design)" />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Photoshop" />
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      width: { md: '30%', xs: '100%' },
                      borderRadius: '16px',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}
                      >
                        Backend & Fullstack
                      </Typography>
                      <Box sx={{ px: 4, marginTop: 4 }}>
                        <ul>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Node.js" />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Express" />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Next.js" />
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      width: { md: '30%', xs: '100%' },
                      borderRadius: '16px',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}
                      >
                        Tools & Libraries
                      </Typography>
                      <Box sx={{ px: 4, marginTop: 4 }}>
                        <ul>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Axios" />
                              <Chip label="React Query" />
                              <Chip label="jQuery" />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Framer Motion" />
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      width: { md: '30%', xs: '100%' },
                      borderRadius: '16px',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}
                      >
                        AI & RAG Systems
                      </Typography>
                      <Box sx={{ px: 4, marginTop: 4 }}>
                        <ul>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Ollama" />
                              <Chip label="OpenAI APIs" />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Langchain" />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Vector Stores (ChromaDB)" />
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      width: { md: '30%', xs: '100%' },
                      borderRadius: '16px',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}
                      >
                        Dev Tools & Workflow
                      </Typography>
                      <Box sx={{ px: 4, marginTop: 4 }}>
                        <ul>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Git / GitLab / GitHub" />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Vercel" />
                              <Chip label="PM2" />
                              <Chip label="Docker" />
                            </Box>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Chip label="Visual Studio Code (VSCode)" />
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}
