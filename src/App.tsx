import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import CLOTHES from './pages/CLOTHES'
import TECH from './pages/TECH'
import NavBar from './components/Navbar'
import ALL from './pages/ALL'
import {
	ApolloClient,
	InMemoryCache,
	gql,from, HttpLink, useQuery
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

export const client = new ApolloClient({
	link: from([errorLink, httpLink]),
	cache: new InMemoryCache(),
  });

const GET_CATEGORIES = gql`
  query GetCategories {
	categories  {
	  name
	}
  }  
`;

// const {id} = this.props.match.params()
// let product; 
// if(!Array.isArray(data.product)){
// 	product=[data.product];
//   }
// useQuery query={your_query}>
// {({ loading, data }) => {
//   if (loading) return 'Loading...';
//  	return data.categories.map(item => {
// 	return (<everything you need>
// <p>{item.name}</p> ;


// const id = gql`
// query type($productId: String!) {
// 	product(id: $productId) {
// 		brand
// 		category
// 	  description
// 	  gallery
// 	  id
// 	  attributes {
// 		id
// 		name
// 		type
// 		items {
// 		  displayValue
// 		  id
// 		  value
// 		}
// 	  }
// 	  inStock
// 	  prices {
// 		  amount
// 		  currency {
// 			  label
// 			  symbol
// 			} 
// 		} 
// 		name
// 	}
// }
// `;

client 
  .query({
	query:GET_CATEGORIES
  })

  .then(name => this.setState({'name': name}))
    .then(res => console.log(res))


	// class Product extends Component { 
	// 	render() {
	// 	const {id} =this.props.params}}                                                         
	//    export default (props) => (
	// 	<Product
	// 		{...props}
	// 		params = {useParams()}
	//   />)


export default class App extends Component <{},{name:{}}> {
	constructor(props:any) {
		super(props);
		this.state = {name:{}};
	}
		componentDidMount(){
			fetch('http://localhost:4000/').then(response=>response.json())
			.then(name=> this.setState({name:{}}))
		}
		
	
	render() {
		
		return (
			<>
				<NavBar />
				<Routes>
					<Route path='/ALL' element={name} />
					<Route path='/TECH' element={<TECH />} />
					<Route path='/CLOTHES' element={<CLOTHES />} />
				</Routes>
			</>
		)
	}
}
// `/singleitem/${this.props.item.id}` 