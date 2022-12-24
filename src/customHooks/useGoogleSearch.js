import { useEffect, useState } from "react";
import { KEY } from "../utils/API_KEY";

const CONTEXT_KEY = "a070d13c2c28c4efa";

const useGoogleSearch = (term) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then((res) => res.json())
                .then((result) => setData(result));
        };

        fetchData();
    }, [term]);

    return { data };
};

export default useGoogleSearch;
