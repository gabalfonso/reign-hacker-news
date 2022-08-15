import React from "react";
import CardsTable from "./common/cardsTable";

const CommentTable = ({
    commentsOnScreen,
    favourites,
    onLikeClicked,
    showOnlyFavourites,
}) => {
    return (
        <CardsTable
            key={1}
            items={commentsOnScreen}
            idPath={"objectID"}
            creatorPath={"author"}
            labelPath={"story_title"}
            urlLinkPath={"story_url"}
            creationDatePath={"created_at"}
            favourites={favourites}
            onLikeClicked={onLikeClicked}
            showOnlyFavourites={showOnlyFavourites}
        />
    );
};

export default CommentTable;
