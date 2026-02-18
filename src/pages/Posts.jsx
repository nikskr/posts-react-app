import React, { useEffect, useRef, useState } from 'react';
import '../styles/App.css';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response  = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1));

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit])

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter(p =>p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div>
      <MyButton style={{marginTop: '10px'}} onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <hr style={{margin: '15px 0px'}} />

      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&  <h1 style={{textAlign: 'center', marginTop: '20px'}}>Error occured {postError}</h1>}

      <MySelect value={limit} onChange={(value) => setLimit(value)} defaultValue={'Page elements amount'}
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: -1, name: 'Show all posts'},
        ]}
        >

      </MySelect>
      
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts'}/> 
      <div ref={lastElement} style={{height: 20, background: 'red'}} />     
      {isPostsLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}><Loader  /></div>}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
