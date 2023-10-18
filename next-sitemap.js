const fs = require("fs");
const { ApolloClient, InMemoryCache, gql } = require("@apollo/client")

const FRONTEND_URI = "https://www.homeandgardenmasters.co.uk"

const apolloClient = new ApolloClient({
     uri: "https://hgm.amazingpestsolution.co.uk/graphql",
     cache: new InMemoryCache(),
});

// generate current data and time to given formate that required in sitemap 
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;



// generating sitemap here 
async function generateSitemap() {
     // Queries
     const allServices = gql`
     query services {
          services(first: 100) {
                  nodes {
                       slug
                       date
                       modified
                  }
             }
     }`
     const servicesRes = await apolloClient.query({
          query: allServices,
     });

     const serviceslist = servicesRes.data.services.nodes

     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
               <loc>${FRONTEND_URI}</loc>
               <lastmod>${formattedDateTime}</lastmod>
               <priority>1.00</priority>
          </url>
          ${serviceslist.map((item) => `<url>
               <loc>${FRONTEND_URI}/${item.slug}</loc>
               <lastmod>${item?.modified || item?.date}+00:00</lastmod>
               <priority>0.80</priority>
          </url>`).join("")}
     </urlset>
  `;
     fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();










