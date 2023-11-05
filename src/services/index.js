import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getHero = async () => {
	const query = gql`
		query Assets {
			heroesConnection {
				edges {
					node {
						desc
						id
						photo {
							url
						}
						title
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.heroesConnection.edges;
};

export const getHeroCarousel = async () => {
	const query = gql`
		query Assets {
			carouselsConnection {
				edges {
					node {
						desc
						id
						title
						createdAt
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.carouselsConnection.edges;
};

export const getUpcomingMeetings = async () => {
	const query = gql`
		query Assets {
			categoriesConnection {
				edges {
					node {
						data
						desc
						id
						slug
						title
						photo {
							url
						}
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.categoriesConnection.edges;
};

export const getEducation = async () => {
	const query = gql`
		query Assets {
			educationsConnection {
				edges {
					node {
						desc
						id
						title
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.educationsConnection.edges;
};
