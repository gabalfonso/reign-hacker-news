import React from "react";
import PropTypes from "prop-types";
import { Pagination, Stack } from "@mui/material";

const PageSelector = (props) => {
    const { totalPages, pageSelected, onPageSelection } = props;

    // const getPages = () => {
    //     console.log("totalPages:" + totalPages);
    //     if (totalPages === 1) return null;
    //     let pageList = [];

    //     // const pages = _.range(1, totalItems + 1);

    //     // console.log(totalPages);
    //     for (let i = 1; i <= totalPages; i++) {
    //         pageList.push(
    //             <li key={i} className={getPageSelectorClassName(i)}>
    //                 <a className="page-link" onClick={() => onPageSelection(i)}>
    //                     {i}
    //                 </a>
    //             </li>
    //         );
    //     }

    //     return <ul className="pagination">{pageList}</ul>;
    // };

    // const getPageSelectorClassName = (pageNumber) => {
    //     let cls = "page-item " + (pageNumber === pageSelected ? "active" : "");
    //     return cls;
    // };

    // return <nav aria-label="Page navigation">{getPages()}</nav>;

    return (
        <Stack alignItems="center">
            <Pagination
                className="justify-content-center"
                count={totalPages}
                variant="outlined"
                color="primary"
                shape="rounded"
                onChange={onPageSelection}
                page={pageSelected}
            />
        </Stack>
    );
};

PageSelector.propTypes = {
    totalPages: PropTypes.number.isRequired,
    pageSelected: PropTypes.number.isRequired,
    onPageSelection: PropTypes.func.isRequired,
};

export default PageSelector;
