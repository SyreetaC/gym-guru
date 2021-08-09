const { gql } = require("apollo-server");

const typeDefs = gql`
  type Facility {
    id: ID!
    name: String!
  }

  type Gym {
    id: ID!
    name: String!
    address: String!
    city: String!
    postCode: String!
    contactNumber: String!
    rating: Float
    exerciseFacilities: [Facility]
    otherFacilities: [Facility]
  }

  type Query {
    exerciseFacilities: [Facility]
    otherFacilities: [Facility]
    gyms(city: String, sortBy: String): [Gym]
    gym(id: ID!): Gym
  }

  input CreateGymInput {
    name: String!
    address: String!
    city: String!
    postCode: String!
    contactNumber: String!
    rating: Float
    exerciseFacilities: [ID]
    otherFacilities: [ID]
  }

  type User {
    id: ID!
    email: String!
    username: String!
  }

  type Auth {
    token: ID!
    user: User!
  }
  input LoginInput {
    username: String!
    password: String!
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    profileImageUrl: String!
    city: String!
    bio: String!
    goals: [String]
    interests: [String]
    isGymOwner: Boolean!
  }

  type Mutation {
    login(input: LoginInput): Auth
    signUp(input: SignUpInput): Auth!
    createGym(input: CreateGymInput!): Gym!
  }
`;

module.exports = typeDefs;
