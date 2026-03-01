import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import '../styles/App.css';
import CommentItem from '../components/CommentItem';

function PostId() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })

    const [fetchComments, isComLoading, errorComment] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])
    
    return (
        <>
            <div className='post-id__container'>
        
            { isLoading 
                ?   <Loader />
                :   ( post 
                        ?
                            <>
                                <h1 className='post-id__title'>{post.title}</h1>
                                <hr style={{marginBottom: '10px', color: '#4285B4'}}/>
                                <p className='post-id__body'>{post.body}</p>
                            </> 
                        :   <h2>{error}</h2>
                    )
                        
                       
            }
            </div>
            <div>
                <h2 className='comments__title'>Comments</h2>
                { isComLoading 
                    ?   <Loader />
                    :   ( comments 
                        ?
                            <div>
                                {comments.map(comm => {
                                    return (<CommentItem comm={comm}/>)
                                })}
                            </div>
                        :   <h2>{errorComment}</h2>
                        )
                }
            </div>
            
        </>
     );
}

export default PostId;