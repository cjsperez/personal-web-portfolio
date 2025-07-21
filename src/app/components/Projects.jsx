'use client'
import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { items } from './websites/constant'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import ProjectModal from './subcomponents/ProjectModal'

const Projects = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [clickAllowed, setClickAllowed] = useState(true)

  // Show fewer items on smaller screens
  const itemsToShow = isMobile ? 1 : isTablet ? 2 : 3

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex >= items.length - itemsToShow ? 0 : prevIndex + 1))
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - itemsToShow : prevIndex - 1))
  }

  // Touch event handlers for swipe detection
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
    setClickAllowed(true)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
    // If movement is significant, disable click
    if (Math.abs(e.targetTouches[0].clientX - touchStart) > 10) {
      setClickAllowed(false)
    }
  }

  const handleTouchEnd = () => {
    const threshold = 50 // Minimum swipe distance
    const difference = touchStart - touchEnd

    if (difference > threshold) {
      // Swipe left (next)
      handleNext()
    } else if (difference < -threshold) {
      // Swipe right (prev)
      handlePrev()
    }
  }

  // Handle modal open
  const handleOpenModal = (project) => {
    if (clickAllowed) {
      setSelectedProject(project)
      setOpenModal(true)
    }
  }

  // Handle modal close
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Get the current items to display
  const visibleItems = []
  for (let i = 0; i < itemsToShow; i++) {
    const index = (activeIndex + i) % items.length
    visibleItems.push(items[index])
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: '100vh',
        height: 'auto',
        px: { lg: 8, xs: 2 },
        py: 8,
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.5rem', lg: '3rem' },
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
        My Projects
      </Typography>
      <Box
        sx={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: { xs: theme.spacing(1), sm: theme.spacing(4) },
          width: '100%',
        }}
      >
        <Box
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            display: 'flex',
            gap: { xs: theme.spacing(1), sm: theme.spacing(4) },
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            touchAction: 'pan-y',
          }}
        >
          {visibleItems.map((item, index) => (
            <Card
              key={item.id}
              onClick={() => handleOpenModal(item)}
              sx={{
                width: {
                  xs: '90vw',
                  sm: isTablet && index === 1 ? 350 : 300,
                  md: index === 1 ? 400 : 300,
                },
                height: {
                  xs: 400,
                  sm: isTablet && index === 1 ? 450 : 400,
                  md: index === 1 ? 500 : 400,
                },
                borderRadius: '8px!important',
                minWidth: { xs: '85vw', sm: 'unset' },
                flexShrink: 0,
                scrollSnapAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: !isMobile && index === 1 ? theme.shadows[8] : theme.shadows[4],
                transform: !isMobile && index === 1 ? 'scale(1.05)' : 'scale(1)',
                position: 'relative',
                zIndex: !isMobile && index === 1 ? 2 : 1,
                backgroundColor: theme.palette.background.paper,
                mx: 'auto',
                cursor: 'pointer',
                '&:hover': {
                  transform: !isMobile && index === 1 ? 'scale(1.08)' : 'scale(1.03)',
                  boxShadow: theme.shadows[12],
                  zIndex: 3,
                  '& .MuiCardMedia-root': {
                    opacity: 0.9,
                  },
                },
                '&:active': {
                  transform: 'scale(0.98)',
                },
              }}
            >
              <CardMedia
                component="img"
                height={!isMobile && index === 1 ? 300 : 200}
                image={item.img_url}
                alt={item.title}
                sx={{ objectFit: 'cover', width: '100%' }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant={!isMobile && index === 1 ? 'h5' : 'h6'}
                  component="div"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
          <ProjectModal open={openModal} onClose={handleCloseModal} project={selectedProject} />
        </Box>

        {!isMobile && (
          <>
            <Button
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                minWidth: 'unset',
                width: 48,
                height: 48,
                borderRadius: '50%',
                padding: theme.spacing(1),
                backgroundColor: theme.palette.grey[800],
                color: 'white',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                '&:hover': {
                  backgroundColor: theme.palette.grey[700],
                },
                opacity: '50%',
                zIndex: 1,
              }}
            >
              <KeyboardArrowLeft fontSize="large" />
            </Button>

            <Button
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                minWidth: 'unset',
                width: 48,
                height: 48,
                borderRadius: '50%',
                padding: theme.spacing(1),
                backgroundColor: theme.palette.grey[800],
                color: 'white',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                '&:hover': {
                  backgroundColor: theme.palette.grey[700],
                },
                opacity: '50%',
                zIndex: 1,
              }}
            >
              <KeyboardArrowRight fontSize="large" />
            </Button>
          </>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(4),
          }}
        >
          {items.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                margin: theme.spacing(0, 0.5),
                backgroundColor:
                  index >= activeIndex && index < activeIndex + itemsToShow
                    ? theme.palette.primary.main
                    : theme.palette.grey[400],
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
