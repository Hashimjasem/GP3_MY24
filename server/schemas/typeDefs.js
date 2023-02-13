const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    fullName: String
    email: String
    password: String
    timeblocks: [Timeblock]
    journals: [Journal]
  }

  type Auth {
    token: ID
    user: User
  }

  type Journal {
    _id: ID
    owner: User
    date_id: String!
    text: String
  }

  type Timeblock {
    id: ID
    owner: User
    date_id: String!
    title: String!
    description: String
    startTime: String!
    endTime: String!
    notes: String
  }

  type Query {
    user: User
    timeblocks: [Timeblock]
    journals: [Journal]
  }

  type Mutation {
    addUser(fullName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addJournal(owner: ID!, date_id: String!, text: String): Journal
    addTimeblock(
      owner: ID!
      date_id: String!
      title: String!
      description: String!
      startTime: String!
      endTime: String!
      notes: String
    ): Timeblock

    updateTimeblock(
      id: ID!
      owner: ID
      title: String
      description: String
      startTime: String
      endTime: String
      notes: String
    ): Timeblock
    deleteUser(id: ID!): User
    deleteTimeblock(id: ID!): Timeblock
  }
`;

module.exports = typeDefs;
