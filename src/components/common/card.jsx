import React from "react";
import { useState } from "react";
import "@fontsource/roboto";
import IconTimeSmall from "../../assets/icon-time-small.svg";
import IconLikeSolid from "../../assets/icon-like-solid.svg";
import IconLikeRegular from "../../assets/icon-like-regular.svg";
import { getTimeSinceCreation } from "../../utils/timeCalculations";

const Card = ({
    itemId,
    creator,
    label,
    urlLink,
    creationDate,
    isFavourite,
    onLikeClicked,
}) => {
    //const [isHovering, setIsHovering] = useState(false);

    const onCardClick = () => {
        window.open(urlLink, "_blank", "noopener,noreferrer");
    };

    return (
        <div
            key={itemId}
            className="card-rectangle"
            onClick={() => onCardClick(itemId, urlLink)}
        >
            <div className="row align-items-center">
                <div className="col-10 p-3 text-start">
                    <div className="row">
                        <div className="col-12 ps-4">
                            <img src={IconTimeSmall} alt="..." />
                            <small className="card-creation-info-label">
                                {getTimeSinceCreation(creationDate)} by{" "}
                                {creator}
                            </small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ps-4">
                            <p className="card-text card-text-principal">
                                {label}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row mh-100">
                        <div className="col">
                            <img
                                style={{ cursor: "pointer" }}
                                src={
                                    isFavourite
                                        ? IconLikeSolid
                                        : IconLikeRegular
                                }
                                onClick={(event) =>
                                    onLikeClicked(event, itemId, isFavourite)
                                }
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
