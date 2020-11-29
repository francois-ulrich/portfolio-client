import gql from 'graphql-tag';

export const GET_CATS = gql`
    query GetCats {
        cats {id, name}
    }
`;