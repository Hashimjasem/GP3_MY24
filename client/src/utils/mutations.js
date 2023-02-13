import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login(
    $email: String!, 
    $password: String!
    ) {
    login(email: $email, 
      password: $password
      ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $fullName: String!
    $email: String!
    $password: String!
    ) {
    addUser(
      fullName: $fullName
       email: $email
       password: $password
       ) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_TIMEBLOCK = gql`
  mutation addTimeblock(
    $belongsTo: ID!
    $title: String!
    $timeS: String!
    $timeE: String!
    $description: String
  ) {
    addTimeblock(
      belongsTo: $belongsTo
      title: $title
      timeS: $timeS
      timeE: $timeE
      description: $description
    ) {
      id
    }
  }
`;

export const CREATE_DAY = gql`
  mutation addDay(
    $belongsTo: ID!
    $date: String!
    $date_id: String!
  ) {
    addDay(
      belongsTo: $belongsTo
      date: $date
      date_id: $String
    ) {
      id
    }
  }
`;
