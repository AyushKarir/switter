import { graphql } from "../../gql";

export const createStweetMutation = graphql(`
#graphql
mutation CreateStweet($payload: CreateStweetData!) {
    createStweet(payload: $payload) {
      id
    }
  }
`);