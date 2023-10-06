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
      types {
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
    }
  }
  `;


  export const Types = gql `
  query Types {
    types {
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