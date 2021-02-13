import { gql } from '@apollo/client';

const userId = '601becd46d5c780026524d4e';
const photoUrl =
  'https://static.onecms.io/wp-content/uploads/sites/6/2019/11/rick-and-morty-season-4-2000.jpg';

// const photoUrl =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcICmOm7O4XmMRb--LoDLwIQvn0GwMYHSmMw&usqp=CAU';


export  const VIEWER_QUERY = gql`
  query {
    viewer {
      id
      firstName
      lastName
      email
      photo
      companyId
      linkedin
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

export const UPDATE_TECHS = gql`
mutation {
  editUser(
    id: "601becd46d5c780026524d4e"
    update: { techs: 
        [
          {uid: "react", weight: 0},
          {uid: "javascript", weight: 0},
          {uid: "typescript", weight: 0},
          {uid: "html5", weight: 0},
          {uid: "css-3", weight: 0},
        ],
  } 
  ){
  id
  techs {uid} }
}
`;