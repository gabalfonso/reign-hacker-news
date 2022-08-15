import React from "react";
import { useEffect, useState } from "react";
import CommentTable from "./commentTable";
import ButtonsSelector from "./common/buttonsSelector";
import PageSelector from "./common/pageSelector";
import SelectCombo from "./common/selectCombo";

const BUTTON_SHOW_ALL_COMMENTS = "All";
const BUTTON_SHOW_MY_FAVOURITES = "My faves";
const QUERY_WORD_1 = "Angular";
const QUERY_WORD_2 = "Reactjs";
const QUERY_WORD_3 = "Vuejs";
const DEFAULT_QUERY_WORD = QUERY_WORD_1;
const Comments = (props) => {
    const [todo, setTodo] = useState({});
    const [loading, setLoading] = useState(false);
    const [pageSelected, setPageSelected] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [favourites, setFavourites] = useState([]);
    const [showOnlyFavourites, setShowOnlyFavourites] = useState(false);
    const [queryWord, setQueryWord] = useState("");

    useEffect(() => {
        //Request data from backend
        const fetchData = () => {
            // console.log("hola. Page selected:" + pageSelected);
            if (queryWord != "") {
                setLoading(true);
                const realPageSelected = pageSelected - 1;
                // console.log(
                //     `https://hn.algolia.com/api/v1/search_by_date?query=${queryWord}&page=${realPageSelected}`
                // );
                fetch(
                    `https://hn.algolia.com/api/v1/search_by_date?query=${queryWord}&page=${realPageSelected}`
                )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        //console.log(data.hits[0]);
                        setTodo(data.hits);
                        if (data.nbPages !== 0 || pageSelected === 0)
                            setTotalPages(data.nbPages);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                        setLoading(false);
                    });
            }
        };

        fetchData();
    }, [pageSelected, queryWord]);

    useEffect(() => {
        //Read localStorage items

        const favouritesStg = JSON.parse(localStorage.getItem("favourites"));
        if (favouritesStg) {
            setFavourites(favouritesStg);
        }

        const showOnlyFavouritesStg = JSON.parse(
            localStorage.getItem("showOnlyFavourites")
        );
        if (showOnlyFavouritesStg) {
            setShowOnlyFavourites(showOnlyFavouritesStg);
        }

        const queryWordStg = JSON.parse(localStorage.getItem("queryWord"));
        if (queryWordStg && queryWordStg !== "") {
            setQueryWord(queryWordStg);
        } else {
            setQueryWord(DEFAULT_QUERY_WORD);
        }
    }, []);

    const handlePageSelection = (event, paramPageSelected) => {
        setPageSelected(paramPageSelected);
    };

    useEffect(() => {
        //Write favourites to localStorage
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        //Write showOnlyFavourites flag to localStorage
        localStorage.setItem(
            "showOnlyFavourites",
            JSON.stringify(showOnlyFavourites)
        );
    }, [showOnlyFavourites]);

    useEffect(() => {
        //Write queryWord to localStorage
        localStorage.setItem("queryWord", JSON.stringify(queryWord));
    }, [queryWord]);

    const handleLikeClicked = (event, commentId, isFavourite) => {
        // console.log("Like clicked");
        event.stopPropagation();
        if (isFavourite) {
            setFavourites(favourites.filter((f) => f !== commentId));
        } else {
            setFavourites([...favourites, commentId]);
        }
    };

    const handleShowOptionClicked = (optionClicked) => {
        setShowOnlyFavourites(
            optionClicked === BUTTON_SHOW_MY_FAVOURITES ? true : false
        );
    };

    const handleOptionSelected = (optionSelected) => {
        setQueryWord(optionSelected);
    };

    return (
        <>
            {loading ? (
                <div>...Data Loading.....</div>
            ) : (
                <div>
                    <div className="row justify-content-center p-3">
                        <div className="col-sm-4">
                            <ButtonsSelector
                                key={1}
                                options={[
                                    BUTTON_SHOW_ALL_COMMENTS,
                                    BUTTON_SHOW_MY_FAVOURITES,
                                ]}
                                optionSelected={
                                    showOnlyFavourites
                                        ? BUTTON_SHOW_MY_FAVOURITES
                                        : BUTTON_SHOW_ALL_COMMENTS
                                }
                                onOptionClicked={handleShowOptionClicked}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-10">
                            <div className="row justify-content-start">
                                <div className="col-8 col-sm-6 col-md-5 col-lg-3">
                                    <SelectCombo
                                        key={2}
                                        options={[
                                            QUERY_WORD_1,
                                            QUERY_WORD_2,
                                            QUERY_WORD_3,
                                        ]}
                                        optionSelected={queryWord}
                                        onOptionSelected={handleOptionSelected}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <span>Title: {todo ? todo.length : "no Title Found"}</span> */}
                    {todo[0] ? (
                        <CommentTable
                            key={3}
                            commentsOnScreen={todo}
                            favourites={favourites}
                            onLikeClicked={handleLikeClicked}
                            showOnlyFavourites={showOnlyFavourites}
                        />
                    ) : (
                        "no Title Found"
                    )}
                    <PageSelector
                        key={4}
                        totalPages={totalPages}
                        pageSelected={pageSelected}
                        onPageSelection={handlePageSelection}
                    />
                </div>
            )}
        </>
    );
};

export default Comments;
