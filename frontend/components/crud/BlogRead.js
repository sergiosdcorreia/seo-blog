import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';

import { list, removeblog } from '../../actions/blog';

const BlogRead = () => {
    return(
        <>
            <p>Update delete blogs</p>
        </>
    )
}

export default BlogRead;