"use client";

import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  { title: "Slide 1", description: "Modern and sleek" },
  { title: "Slide 2", description: "Touch-friendly and responsive" },
  { title: "Slide 3", description: "Styled with MUI" },
];

const Slider = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", py: 4 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        style={{ borderRadius: "16px", overflow: "hidden" }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: 250,
                // bgcolor: "primary.main",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 3,
              }}
            >
              <Typography variant="h5" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;