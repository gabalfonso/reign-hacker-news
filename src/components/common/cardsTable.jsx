import React from "react";
import Card from "./card";

const CardsTable = ({
    items,
    idPath,
    creatorPath,
    labelPath,
    urlLinkPath,
    creationDatePath,
    favourites,
    onLikeClicked,
    showOnlyFavourites,
}) => {
    const renderCard = (item) => {
        if (
            item[idPath] &&
            item[creatorPath] &&
            item[labelPath] &&
            item[urlLinkPath] &&
            item[creationDatePath]
        ) {
            const isFavourite =
                favourites &&
                favourites.length > 0 &&
                favourites.includes(item[idPath]);

            if (isFavourite || !showOnlyFavourites) {
                return (
                    <div
                        className="col-sm-12 col-md-12 col-lg-6 p-3"
                        key={item[idPath]}
                    >
                        <Card
                            key={item[idPath]}
                            itemId={item[idPath]}
                            creator={item[creatorPath]}
                            label={item[labelPath]}
                            urlLink={item[urlLinkPath]}
                            creationDate={item[creationDatePath]}
                            isFavourite={isFavourite}
                            onLikeClicked={onLikeClicked}
                        />
                    </div>
                );
            }
        }
    };

    return <div className="row">{items.map((item) => renderCard(item))}</div>;
};

export default CardsTable;
