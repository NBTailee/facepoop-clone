import { Box } from "@mui/material";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "../watch/watch.css";
import "./marketplace.css";
// import { grey } from "@mui/material/colors";
import {
  Settings,
  Search,
  Storefront,
  DeliveryDining,
  NotificationsActive,
  MarkunreadMailboxTwoTone,
  ShoppingBag,
  LocalOffer,
  ArrowForwardIos,
  DirectionsCar,
  House,
  Construction,
  Favorite,
  QueueMusic,
  Pets,
  Checkroom,
  VideogameAsset,
  Smartphone,
} from "@mui/icons-material";
function SideBar() {
  return (
    <Box
      flex={2.5}
      p={2}
      sx={{
        display: {
          xs: "none",
          lg: "block",
        },

        // display: "none",
        margin: "0 !important",
        padding: "0 !important",
      }}
    >
      <Box
        className="sidebar-wrapperzz"
        sx={{
          position: "fixed",
          width: "400px",
          // bgColor: "#eeeeee",
          maxHeight: "90vh",
          overflowY: "scroll",
          height: "auto",
          borderRadius: "10px",
        }}
        disablePadding
      >
        {/* <Box sx={{ width: "350px", bgcolor: "#ffffff", zIndex: "-1" }}> */}
        <List
          sx={{
            width: "350px",
            // maxWidth: 400,
            bgcolor: "#ffffff",
            marginTop: "100px",
            marginLeft: "0px",
            padding: "10px 20px 10px 20px",
            // margin: "100px 15px 15px 15px",
          }}
        >
          <Box
            sx={{
              position: "fixed",
              top: "64px",
              left: "0px",
              bgcolor: "#ffffff",
              width: "350px",
              height: "110px",
              paddingRight: "0 !important",
              zIndex: "4",
            }}
          >
            <Stack direction="row" alignItems="center">
              <Typography
                sx={{
                  color: "#050505",
                  fontSize: "25px",
                  fontWeight: "600",
                  margin: "12px 0 5px 22px",
                }}
              >
                Marketplace
              </Typography>
              <IconButton
                sx={{
                  width: "40px",
                  height: "40px",
                  color: "050505",
                  marginLeft: "131.5px",
                  marginTop: "6px",
                  zIndex: "2",
                }}
              >
                <Settings sx={{ zIndex: "2", color: "050505" }} />
              </IconButton>
              <div className={`all-overlap-btn setting-overlap`}></div>
            </Stack>

            <Stack direction="row">
              <Search
                sx={{
                  position: "absolute",
                  top: "63px",
                  left: "32px",
                  color: "#65676b",
                }}
              />
              <input
                type="text"
                className="video-search"
                placeholder="T??m ki???m video"
              />
            </Stack>
            <Divider sx={{ marginLeft: "22px", marginRight: "20px" }} />
          </Box>
          <ListItemButton
            sx={{ borderRadius: "10px", height: "52px", bgcolor: "#f0f2f5" }}
          >
            <ListItemIcon>
              <Storefront sx={{ color: "#ffffff", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn-active`}></div>
            <ListItemText primary="L?????t xem t???t c???" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <DeliveryDining sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ListItemText primary="Mua s???m tr???c ti???p" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <NotificationsActive sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ListItemText primary="Th??ng b??o" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <MarkunreadMailboxTwoTone
                sx={{ color: "#1d1f23", zIndex: "3" }}
              />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ListItemText primary="H???p th??" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <ShoppingBag sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ArrowForwardIos
              sx={{
                position: "absolute",
                top: "19px",
                right: "10px",
                fontSize: "14px",
              }}
              fontSize="small"
            />
            <ListItemText primary="??ang mua" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <LocalOffer sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>
            <ArrowForwardIos
              sx={{
                position: "absolute",
                top: "19px",
                right: "10px",
                fontSize: "14px",
              }}
              fontSize="small"
            />
            <ListItemText primary="B??n h??ng" />
          </ListItemButton>
          <button className="market-btn">
            <span className="plus-market-1">+</span> T???o b??i ni??m y???t m???i
          </button>
          <Divider sx={{ marginTop: "10px" }} />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                sx={{
                  fontSize: "17px",
                  fontWeight: "700",
                  bgcolor: "#ffffff",
                  // padding: "0",
                  marginBottom: "0",
                }}
                component="div"
                // id="nested-list-subheader"
              >
                B??? l???c
              </ListSubheader>
            }
          ></List>
          <Typography
            sx={{
              color: "#3086f3",
              position: "relative",
              left: "15px",
              fontWeight: "600",
              top: "-10px",
              fontSize: "15px",
            }}
          >
            Bi??n H??a - Trong v??ng 60km
          </Typography>
          <Divider />
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <DirectionsCar sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Xe c???" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <House sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="B??n nh??" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Construction sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="D???ng c??? s???a ch???a" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Favorite sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Gia ????nh" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <QueueMusic sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="Nh???c c???" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Pets sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="????? d??ng cho th?? c??ng" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Checkroom sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="????? may m???c" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <VideogameAsset sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="????? ch??i & tr?? ch??i" />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: "10px", height: "52px" }}>
            <ListItemIcon>
              <Smartphone sx={{ color: "#1d1f23", zIndex: "3" }} />
            </ListItemIcon>
            <div className={`all-overlap-btn watch-sidebar-btn`}></div>

            <ListItemText primary="????? ??i???n t???" />
          </ListItemButton>
        </List>
        {/* </Box> */}
      </Box>
    </Box>
  );
}

export default SideBar;
