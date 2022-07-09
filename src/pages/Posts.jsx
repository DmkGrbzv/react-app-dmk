import React, { useState, useEffect } from "react";
import PostServise from "../API/PostServise";
import PostFilter from "../components/PostFilter/PostFilter";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/UI/form/PostForm";
import MyLoader from "../components/UI/loader/MyLoader";
import MyModal from "../components/UI/modal/MyModal";
import MyPagination from "../components/UI/pagination/MyPagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getPagesArray, getPageCount } from "../utils/pages";

function Posts() {
  const [postsList, setPostsList] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let pagesArray = getPagesArray(totalPages);
  const paginationPage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
    console.log(page);
  };
  const [fetchPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await PostServise.getAll(limit, page);
      setPostsList(response.data);
      setTotalPages(getPageCount(response.headers["x-total-count"], limit));
    }
  );
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModalVisible] = useState(false);

  const createPost = (newPost) => {
    setPostsList([...postsList, newPost]);
    setModalVisible(false);
  };
  const deletePost = (post) => {
    setPostsList(postsList.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);
  const sortedAndSearchPosts = usePosts(postsList, filter.sort, filter.query);

  return (
    <div className="App">
      <MyButton onClick={() => setModalVisible(true)}>Create user</MyButton>
      <MyModal visible={modal} setVisible={setModalVisible}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postsError && <h1>Error:{postsError} </h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <MyLoader />
        </div>
      ) : (
        <PostList remove={deletePost} postsList={sortedAndSearchPosts} />
      )}
      <MyPagination
        pagesArray={pagesArray}
        paginationPage={paginationPage}
        page={page}
      />
    </div>
  );
}

export default Posts;