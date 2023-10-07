import { gql } from '@apollo/client';

export const AllServices = gql`
query AllServices {
  services(first: 100, where: {orderby: {field: MENU_ORDER, order: ASC}}) {
       nodes {
         title
         slug
         content
         excerpt
         terms {
           nodes {
             name
           }
         }
         featuredImage {
           node {
             mediaItemUrl
           }
         }
       }
     }
      types(where: {parent: 0}) {
        nodes {
          name
          servicesTypeInfo {
            icon {
              mediaItemUrl
            }
            image {
              mediaItemUrl
            }
          }
        }
      }
   }`;




  export const ServiceSingle = gql `
  query ServiceSingle($id: ID = "") {
    service(id: $id, idType: URI) {
      title
      excerpt
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      servicesInfo {
        beforeAfter {
          mediaItemUrl
        }
      }
    }
  }
  `;


  export const Types = gql `
  query Types {
    types(where: {parent: 0}) {
      nodes {
        name
        servicesTypeInfo {
          image {
            mediaItemUrl
          }
        }
        slug
      }
    }
  }
  `;

  export const TypesWithChildren = gql `
  query TypesWithChildren {
    types(first: 100) {
      nodes {
        name
        servicesTypeInfo {
          image {
            mediaItemUrl
          }
        }
        children {
          nodes {
            name
            servicesTypeInfo {
              image {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }`