'use client'
import React, { useState } from 'react'
import {
  Modal,
  Fade,
  Backdrop,
  Box,
  Typography,
  IconButton,
  Button,
  CardMedia,
  Divider,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  TextField,
  InputAdornment,
  Tooltip,
  Collapse,
  Alert,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const ProjectModal = ({ open, onClose, project }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showCredentials, setShowCredentials] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '95vw', md: '80vw', lg: '70vw' },
            maxWidth: '1000px',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 24,
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'sticky',
              top: 8,
              right: 8,
              float: 'right',
              zIndex: 2,
              color: (theme) => theme.palette.grey[500],
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {project && (
            <Box sx={{ p: { xs: 2, md: 4 } }}>
              <Typography variant="h4" component="h2" gutterBottom>
                {project.title}
              </Typography>

              {project.role && (
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {project.role}
                </Typography>
              )}

              {/* Image Carousel */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  mb: 3,
                  height: { xs: 250, sm: 350, md: 400 },
                  width: '100%',
                }}
              >
                {project.images?.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePrevImage}
                      sx={{
                        position: 'absolute',
                        left: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.7)',
                        },
                      }}
                    >
                      <NavigateBeforeIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                      onClick={handleNextImage}
                      sx={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.7)',
                        },
                      }}
                    >
                      <NavigateNextIcon fontSize="large" />
                    </IconButton>
                  </>
                )}

                <CardMedia
                  component="img"
                  image={project.images?.[currentImageIndex] || project.img_url}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {project.images?.length > 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    {project.images.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: currentImageIndex === index ? 'primary.main' : 'grey.500',
                          cursor: 'pointer',
                          transition: 'background-color 0.3s',
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </Box>
                )}
              </Box>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <>
                  <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip key={index} label={tech} variant="outlined" />
                    ))}
                  </Stack>
                  <Divider sx={{ my: 2 }} />
                </>
              )}

              {/* Description */}
              <Typography variant="body1" paragraph>
                {project.description}
              </Typography>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Key Features:
                  </Typography>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <Typography variant="body2" component="span">
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}

              {project.credentials && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Sample Credentials
                  </Typography>

                  <Alert severity="info" sx={{ mb: 2 }}>
                    Use these credentials for demo purposes only
                  </Alert>

                  <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                    <TextField
                      label="Username"
                      value={project.credentials.username}
                      InputProps={{
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Tooltip title="Copy username">
                              <IconButton onClick={() => handleCopy(project.credentials.username)}>
                                <ContentCopyIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />

                    <TextField
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      value={project.credentials.password}
                      InputProps={{
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Tooltip title={showPassword ? 'Hide password' : 'Show password'}>
                              <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Copy password">
                              <IconButton onClick={() => handleCopy(project.credentials.password)}>
                                <ContentCopyIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </Box>

                  {copied && (
                    <Collapse in={copied}>
                      <Alert severity="success" sx={{ mt: 1 }}>
                        Copied to clipboard!
                      </Alert>
                    </Collapse>
                  )}
                </Box>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
                {project.demoUrl ? (
                  <Button
                    variant="contained"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    sx={{ flexGrow: isMobile ? 1 : 0 }}
                  >
                    Live Demo
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled
                    size="large"
                    sx={{ flexGrow: isMobile ? 1 : 0 }}
                  >
                    Demo Unavailable
                  </Button>
                )}

                {project.codeUrl ? (
                  <Button
                    variant="outlined"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    sx={{ flexGrow: isMobile ? 1 : 0 }}
                  >
                    Open site
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    disabled
                    size="large"
                    sx={{ flexGrow: isMobile ? 1 : 0 }}
                  >
                    Code Private
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  )
}

export default ProjectModal
