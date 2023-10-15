import { request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						title
						slug
						exsetpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.postsConnection.edges;
};

export const getResentPosts = async () => {
	const query = gql`
	query GetPostDetails() {
		post(
			orderBy: createdAt_ASC
			last: 2
			) {
				title
				featuredImage{
					url
				}
				createdAt_ASC
				slug
			}
	}
	`;
	const result = await request(graphqlAPI, query);

	return result.posts;
};

export const getSimilarPosts = async () => {
	const query = gql`
	query GetPostDetails( $slug: String! $categories: [String!]){
		post(
			where: {slug_not: $slug, AND {categories_some: {slug_in: $categories}}}
			last: 3
		){
					title
				featuredImage{
					url
				}
				createdAt
				slug
		}
	}
	`;

	const result = await request(graphqlAPI, query);

	return result.posts;
};

export const getCategory = async () => {
	const query = gql`
		query getCategory {
			categories {
				name
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query);
	return result.categories;
};
