import React,{useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {
    const [post, setPosts] =useEffect(null)
    const {slug} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                if (post){
                    setPosts(post)
                } {
                    
                }
            })
        }
    },[])
    return post?(
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) :null
}

export default EditPost
