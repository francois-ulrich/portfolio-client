import gql from 'graphql-tag';

export const SUBMIT_CAT = gql`
  mutation CreateCat($name: String!) {
    createCat(name: $name) {
      id,
      name
    }
  }
`;