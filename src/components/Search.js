import React, { useState } from "react";
import { Add, Search as SearchIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { setSearchTerm } from "../context/actions";
import "../styles/Search.scss";
import { IconButton } from "@mui/material";

function Search({ hideButton = false, extraIcons = false }) {
    const [state, dispatch] = useStateValue();
    const [input, setInput] = useState(state.term);
    const history = useNavigate();

    const search = (e) => {
        e.preventDefault();
        history("/search");
        dispatch(setSearchTerm(input));
    };

    return (
        <div className="search">
            <form onSubmit={search} className="searchInput">
                {!extraIcons && (
                    <IconButton sx={{ padding: 0 }}>
                        <SearchIcon
                            sx={{
                                height: "1.3vw",
                                width: "1.3vw",
                                color: "#5F6368",
                            }}
                            onClick={search}
                        />
                    </IconButton>
                )}
                <input
                    type="text"
                    placeholder="Search Google or type a URL"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <IconButton sx={!extraIcons ? { padding: 0 } : {padding: 0, marginRight: '1vw'}}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png"
                        alt="mic"
                        className="mic"
                    />
                </IconButton>
                {extraIcons && (
                    <>
                        <IconButton sx={{ padding: 0, marginRight: '1vw' }}>
                            <img
                                src="https://fonts.gstatic.com/s/i/productlogos/lens_camera/v1/192px.svg"
                                alt="lens"
                            />
                        </IconButton>
                        <IconButton sx={{ padding: 0 }}>
                            <SearchIcon
                                sx={{
                                    height: "1.7vw",
                                    width: "1.7vw",
                                    color: "#4285f4",
                                }}
                                onClick={search}
                            />
                        </IconButton>
                    </>
                )}
            </form>
            {!hideButton && (
                <IconButton
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        padding: "15px",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "fit-content",
                        margin: "0 auto",
                        marginTop: "2vw",
                        borderRadius: "7px",
                    }}
                >
                    <div className="round">
                        <Add
                            sx={{
                                height: "1.8vw",
                                width: "1.8vw",
                                color: "#202124",
                            }}
                        />
                    </div>
                    <p>Add shortcut</p>
                </IconButton>
            )}
        </div>
    );
}

export default Search;
