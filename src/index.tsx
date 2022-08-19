import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,from, HttpLink
  } from "@apollo/client";
import { onError } from '@apollo/client/link/error'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
})

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  if (networkError) console.error(`[Network error]: ${JSON.stringify(networkError, null, 2)})`)
})

const client = new ApolloClient({
	link: from([errorLink, httpLink]), // `httpLink` must be the last
	cache: new InMemoryCache(),
  });
 

 client 
  .query({
	query: gql`
	query {categories {
		name 
		products {
		  id
		  name
		  inStock
		  gallery
		  description
		  category
		  attributes {
			id
			name
			type
			items {
			  displayValue
			  value
			  id
			}
		  }
		  prices {
			currency {
			  label
			  symbol
			}
			amount
		  }
		  brand
		}
	  }	}
	  `,
})

  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ApolloProvider client={client}>
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
	</ApolloProvider>
)
