'use client'
import React, { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  Alert,
  CircularProgress,
  Divider,
  IconButton,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import DownloadIcon from '@mui/icons-material/Download'
import FilePresentIcon from '@mui/icons-material/FilePresent'
import SendIcon from '@mui/icons-material/Send'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  })
  const cvFileName = 'CSPEREZ_CV-0725.pdf' // Replace with your actual CV filename

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: null })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send')
      setStatus({ submitting: false, success: true, error: null })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message })
    }
  }

  return (
    <Box id="contact" sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Get In Touch
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Contact Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ flex: 1 }}>
          <Stack spacing={3}>
            <TextField
              required
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="filled"
              sx={{ backgroundColor: 'white' }}
            />

            <TextField
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="filled"
              sx={{ backgroundColor: 'white' }}
            />

            <TextField
              required
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="filled"
              sx={{ backgroundColor: 'white' }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={status.submitting ? <CircularProgress size={24} /> : <SendIcon />}
              disabled={status.submitting}
              sx={{ alignSelf: 'flex-start' }}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </Button>

            {status.success && (
              <Alert severity="success" onClose={() => setStatus({ ...status, success: false })}>
                Message sent successfully!
              </Alert>
            )}
            {status.error && (
              <Alert severity="error" onClose={() => setStatus({ ...status, error: false })}>
                Failed to send message. Please try again.
              </Alert>
            )}
          </Stack>
        </Box>

        {/* Divider - Visible only on desktop */}
        <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
        <Divider orientation="horizontal" sx={{ display: { xs: 'block', md: 'none' }, my: 2 }} />

        {/* CV Download Section */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
            Download My CV
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 3,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              mb: 2,
            }}
          >
            <FilePresentIcon fontSize="large" />
            <Typography variant="body1">{cvFileName}</Typography>
          </Box>

          <Button
            variant="outlined"
            component="a"
            href={`/docs/${cvFileName}`} // Make sure your CV is in public/docs/
            download
            startIcon={<DownloadIcon />}
            size="large"
            sx={{ alignSelf: 'flex-start' }}
          >
            Download CV
          </Button>

          <Box sx={{ mt: 'auto', pt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Direct Email
            </Typography>
            <Button
              variant="text"
              color="inherit"
              href="mailto:crisjahn.perez09@gmail.com" // Replace with your email
              startIcon={<EmailIcon />}
              sx={{ textTransform: 'none' }}
            >
              crisjahn.perez09@gmail.com
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactSection
