import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
export const Volume = ({ width = 150, value = 40, setVolume }) => {
  const handleVolumen = (e) => {
    setVolume(e.target.value);
  };
  return (
    <Box sx={{ width: width }}>
      <Slider
        size="small"
        sx={{
          color: "white",
          height: 4,
          "& .MuiSlider-thumb": {
            width: "0px",
            height: "0px",
            "&:hover ": {
              boxShadow: "none",
              backgroundColor: "#1FDF64",
              width: "14px",
              height: "14px",
              "&:hover + .MuiSlider-track": {
                backgroundColor: "#1FDF64",
              },
            },
          },
        }}
        max={100}
        min={0}
        value={value}
        onChange={handleVolumen}
      />
    </Box>
  );
};

export const MusicProgress = ({ width, currentTime, max, audioRef }) => {
  const handlerogress = (e) => {
    audioRef.current.currentTime = e.target.value;
  };
  return (
    <Box sx={{ width: width }}>
      <Slider
        size="small"
        sx={{
          color: "white",
          height: 4,
          "& .MuiSlider-thumb": {
            width: "0px",
            height: "0px",
            "&:hover ": {
              boxShadow: "none",
              backgroundColor: "#1FDF64",
              width: "14px",
              height: "14px",
              "&:hover + .MuiSlider-track": {
                backgroundColor: "#1FDF64",
              },
            },
          },
        }}
        max={max}
        min={0}
        value={currentTime}
        onChange={handlerogress}
      />
    </Box>
  );
};
