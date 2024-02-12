import { graphql } from "../../gql";

export const getAllStweetsQuery = graphql(`#graphql

    query GetAllStweets {
        getAllStweets{
            id
            content
            imageURL
            author{
                firstName
                lastName
                profileImageURL
            }
        }
    }
`);