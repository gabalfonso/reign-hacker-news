import React, { Component } from "react";

// import {
//     deleteComment,
//     getComments,
//     saveComment,
// } from "../services/fakeCommentService";
// import { getGenres } from "../services/fakeGenreService";
// import PageSelector from "./common/pageSelector";
// import CommentsTable from "./commentsTable";
// import Form from "./common/form";
// import { getTotalPages, paginate } from "../utils/paginate";
// import _ from "lodash";

class Comments extends Component {
    state = {
        comments: [],
        genres: [],
        rowsPerPage: 20,
        pageSelected: 1,
    };

    componentDidMount() {
        // this.setState({ comments: getComments(), genres });
    }

    handleLikeClicked = (comment) => {
        const comments = [...this.state.comments];
        const commentIndex = comments.indexOf(comment);
        comments[commentIndex] = { ...comments[commentIndex] };
        comments[commentIndex].liked = !comments[commentIndex].liked;
        // saveComment(comments[commentIndex]);
        // this.setState({ comments });
    };

    handlePageSelection = (pageSelected) => {
        this.setState({ pageSelected });
    };

    render() {
        const { comments, pageSelected } = this.state;

        if (comments.length === 0)
            return <div>There are no comments in the DB!</div>;
        else return <div>There are {comments.length} comments in the DB!</div>;

        // const { commentsFilteredLength, commentsOnScreen } = this.getPagedData();

        return (
            <div className="row">
                <div className="col">
                    <h1>Comments</h1>
                    {/* <CommentsTable
                        key={1}
                        commentsOnScreen={commentsOnScreen}
                        sortColumn={sortColumn}
                        onLike={this.handleLikeClicked}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />

                    <PageSelector
                        key={2}
                        totalItems={commentsFilteredLength}
                        rowsPerPage={rowsPerPage}
                        pageSelected={pageSelected}
                        onPageSelection={this.handlePageSelection}
                    /> */}
                </div>
            </div>
        );
    }

    // return (
    //   <div className="App">
    //     <h1>test</h1>
    //     {fetchedData.data ? <h2>title: {fetchedData.data.title}</h2> : null}
    //   </div>
    // );
}

export default Comments;
