import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

function PostId() {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById();
        setPost(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id);
    }, [])
    
    return (
        <>
            { isLoading 
                ?   <Loader />
                :   <>
                        <h1>You open post page</h1>
                        <div>{post.id}. {post.title}</div> 
                    </>
            }

        </>
     );
}

export default PostId;