import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

function PostId() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById();
        setPost(response.data);
    })

    const [fetchComments, isComLoading, errorComment] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(post.id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])
    
    return (
        <>
            <h1>You open post page</h1>
            { isLoading 
                ?   <Loader />
                :   <div>{post.id}. {post.title}</div>
            }
            <h2>Comments</h2>
            { isLoading 
                ?   <Loader />
                :   <div>
                        {comments.map(comm => {
                            <div style={{marginTop: '10px'}}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        })}
                    </div>
            }
        </>
     );
}

export default PostId;