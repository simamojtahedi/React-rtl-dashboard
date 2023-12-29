import { Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import { IranMap } from "react-iran-map";
import Title from "../../title";

const mapData = {
  ardabil: 0,
  isfahan: 20,
  alborz: 11,
  ilam: 18,
  eastAzerbaijan: 10,
  westAzerbaijan: 20,
  bushehr: 15,
  tehran: 3,
  chaharmahalandBakhtiari: 25,
  southKhorasan: 29,
  razaviKhorasan: 11,
  northKhorasan: 19,
  khuzestan: 12,
  zanjan: 18,
  semnan: 9,
  sistanAndBaluchestan: 3,
  fars: 7,
  qazvin: 35,
  qom: 30,
  kurdistan: 24,
  kerman: 23,
  kohgiluyehAndBoyerAhmad: 2,
  kermanshah: 7,
  golestan: 18,
  gilan: 14,
  lorestan: 7,
  mazandaran: 28,
  markazi: 25,
  hormozgan: 14,
  hamadan: 19,
  yazd: 32,
};

const SaleStatistics = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item xs={12}>
      <Box
        className="default_card"
        sx={{ background: theme.palette.background.paper }}
      >
        <Grid container>
          <Grid item xs={12} md={5}>
            <Title title="آمار فــروش" />
            <IranMap
              data={mapData}
              colorRange="139, 204, 120"
              width={isMobile ? 300 : 500}
              textColor="#000"
              deactiveProvinceColor="#eee"
              selectedProvinceColor="#519AFF"
              tooltipTitle="فروش:"
            />
          </Grid>
          <Grid item xs={12} md={5}></Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SaleStatistics;
