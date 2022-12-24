import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import "../styles/SearchPage.scss";
import { response } from "../response";
import { Link, NavLink } from "react-router-dom";
import Search from "../components/Search";
import useGoogleSearch from "../customHooks/useGoogleSearch";
import {
    AppsOutlined,
    FeedOutlined,
    ImageOutlined,
    MoreVert,
    MoreVertOutlined,
    SearchOutlined as SearchIcon,
    SettingsOutlined,
    SmartDisplayOutlined,
} from "@mui/icons-material";
import { Avatar, CircularProgress, IconButton } from "@mui/material";

function SearchPage() {
    const [selectedtab, setSelectedtab] = useState("all");
    const [{ term }, dispatch] = useStateValue();

    const { data } = useGoogleSearch(term);

    //MOCK RESPONSE USED WHILE DEVELOPING
    // const data = response;

    console.log(data);
    return (
        <div className="searchPage">
            <div className="header">
                <Link to="/">
                    <img
                        className="logo"
                        src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png"
                        alt="google"
                    />
                </Link>
                <div className="headerBody">
                    <Search hideButton extraIcons />
                    <div className="options">
                        <div className="optionsLeft">
                            <div
                                className={`option ${
                                    selectedtab == "all" && "selected"
                                }`}
                            >
                                <SearchIcon sx={{ height: "1.3vw" }} />
                                <NavLink to="/search">All</NavLink>
                            </div>
                            <div
                                className={`option ${
                                    selectedtab == "news" && "selected"
                                }`}
                            >
                                <FeedOutlined sx={{ height: "1.3vw" }} />
                                <NavLink to="#">News</NavLink>
                            </div>
                            <div
                                className={`option ${
                                    selectedtab == "images" && "selected"
                                }`}
                            >
                                <ImageOutlined sx={{ height: "1.3vw" }} />
                                <NavLink to="#">Images</NavLink>
                            </div>
                            <div
                                className={`option ${
                                    selectedtab == "videos" && "selected"
                                }`}
                            >
                                <SmartDisplayOutlined
                                    sx={{ height: "1.3vw" }}
                                />
                                <NavLink to="#">Videos</NavLink>
                            </div>
                            <div
                                className={`option ${
                                    selectedtab == "more" && "selected"
                                }`}
                            >
                                <MoreVertOutlined sx={{ height: "1.3vw" }} />
                                <NavLink to="#">More</NavLink>
                            </div>
                        </div>
                        <div className="optionsRight">
                            <div className="option">
                                <IconButton sx={{ padding: 0 }}>
                                    Tools
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerLeft">
                    <IconButton sx={{ padding: 0, marginRight: "1.2vw" }}>
                        <SettingsOutlined
                            sx={{
                                width: "1.8vw",
                                height: "1.8vw",
                            }}
                        />
                    </IconButton>
                    <IconButton sx={{ padding: 0, marginRight: "1.2vw" }}>
                        <AppsOutlined
                            sx={{
                                width: "1.8vw",
                                height: "1.8vw",
                            }}
                        />
                    </IconButton>
                    <Avatar
                        sx={{
                            marginRight: "1.2vw",
                            width: "2.2vw",
                            height: "2.2vw",
                        }}
                    />
                </div>
            </div>
            {term ? (
                <div className="results">
                    {data && (
                        <p className="resultCount">
                            About{" "}
                            {data?.searchInformation.formattedTotalResults}{" "}
                            results (
                            {data?.searchInformation.formattedSearchTime}{" "}
                            seconds) for {term}
                        </p>
                    )}
                    {data?.items.map((item) => (
                        <div className="result" key={item}>
                            <a className="resultLink" href={item.link}>
                                {item.displayLink}
                            </a>
                            <IconButton>
                                <MoreVert
                                    sx={{ height: "1.4vw", width: "1.4vw" }}
                                />
                            </IconButton>
                            <a className="resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="loading">
                    <CircularProgress/>
                </div>
            )}
        </div>
    );
}

export default SearchPage;
