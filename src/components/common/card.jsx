import React from "react";
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
    const onClick = () => {
        console.log("card clickeado:" + itemId);
    };

    return (
        <div className="card-rectangle" onClick={() => onClick()}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-10 p-3 text-start">
                        <div className="row">
                            <div className="col-12">
                                <img src={IconTimeSmall} alt="..." />
                                <small className="card-creation-info-label">
                                    {getTimeSinceCreation(creationDate)} by{" "}
                                    {creator}
                                </small>
                            </div>
                        </div>
                        <div className="row">
                            <p className="card-text card-text-principal">
                                {label}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-2 ">
                        <div className="container">
                            <img
                                style={{ cursor: "pointer" }}
                                src={
                                    isFavourite
                                        ? IconLikeSolid
                                        : IconLikeRegular
                                }
                                onClick={() =>
                                    onLikeClicked(itemId, isFavourite)
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
