import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getResentPosts, getSimilarPosts } from '@/services';

const PostWidget = ({ post }) => {
	return (
		<div>
			{post.title} {post.slug}
		</div>
	);
};

export default PostWidget;
