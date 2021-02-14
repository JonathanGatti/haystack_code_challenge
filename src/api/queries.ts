import { gql } from '@apollo/client';

export  const VIEWER_QUERY = gql`
  query {
    viewer {
      id
      firstName
      lastName
      email
      photo
      companyId
      github
      location {name}
      active
      created
      biography
      linkedInProfileURL
      currentCompany
      techs {uid, weight}
      preferences {remoteInterest, sectors{name}}
    }
  }
  `;

export const UPDATE_VIEWER = gql`
  mutation EditUser(
      $id: ID!, 
      $photo: String, 
      $email: String, 
      $linkedInProfileURL: String, 
      $github: String
      ){
    editUser(
      id: $id, 
      update: {
        photo: $photo, 
        email: $email,
        linkedInProfileURL: $linkedInProfileURL,
        github: $github
      }){
      id
      photo
      email
      linkedInProfileURL
      github
    }
}`;

export const UPDATE_VIEWER_TECHS = gql`
  mutation EditUser(
    $id: ID!,
    $techs: [WeightInput!]
    ){
    editUser(
      id: $id
      update: { techs: $techs } 
    ){
    id
    techs {uid} }
}
`;

export const UPDATE_VIEWER_BIOGRAPHY= gql`
  mutation EditUser(
    $id: ID!,
    $biography: String 
  ){
    editUser(
      id: $id
      update: { biography: $biography }
    )
  {
    id
    biography
  }
}
`