import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    User {
      id
      fullName
      email
      days {

        journal
        date_id
        date
        id
        timeblocks {
          notes
          timeE
          timeS
          description
          title
          id
        }
      }
    }
  }
`;

export const GET_DAY = gql`
  query GetDay($date_id: ID!) {
    Day(date_id: $date_id) {
      _id
      date
      journal
      timeblocks {
        id
        title
        description
        timeS
        timeE
        notes
      }
    }
  }
`;


