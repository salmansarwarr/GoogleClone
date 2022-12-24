import { Link } from "react-router-dom";
import homeStyles from "../styles/Home.module.scss";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import Search from "../components/Search";

function Home() {
    return (
        <div className={homeStyles.home}>
            {/* HOME HEADER */}
            <div className={homeStyles.header}>
                <div className={homeStyles.headerRight}>
                    <a href="https://mail.google.com/mail">Gmail</a>
                    <a href="https://www.google.com.pk/imghp?hl=en&tab=ri&ogbl">Images</a>
                    <IconButton sx={{padding: 0, marginRight: "2vw"}}>
                        <AppsIcon
                            style={{ fontSize: "1.5vw" }}
                        />
                    </IconButton>
                    <Avatar style={{ width: "2.2vw", height: "2.2vw" }} />
                </div>
            </div>

            {/* HOME BODY */}
            <div className={homeStyles.body}>
                <img
                    src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png"
                    alt="google"
                />
                <div className={homeStyles.homeInputContainer}>
                    <Search />
                </div>
            </div>

            {/* HOME FOOTER */}
            <div className={homeStyles.footer}>
                <IconButton>
                    <Edit sx={{ fontSize: "1.1vw", marginRight: "0.75vw" }} />
                    <p>Customize Chrome</p>
                </IconButton>
            </div>
        </div>
    );
}

export default Home;
