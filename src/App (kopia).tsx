

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import KIDS from './pages/CLOTHES'
import MEN from './pages/TECH'
import NavBar from './components/Navbar'
import Home from './pages/ALL'
import { useQuery ,gql} from '@apollo/client'

const GET_CATEGORIES = gql`
  query GetCategories {
	categories {
	  name
	}
  }  
`;


// interface CategoriesProps {
// 	categories: string,
// 	name: string
// }
interface PostsProps {
	id: string;
	title: string;
}

export default class App extends Component <{},{posts:[]}>{
	constructor(props:any) {
		super(props);
		this.state = {posts:[]};
	}
		componentDidMount(){
			fetch('https://jsonplaceholder.typicode.com/posts').then(resp=>resp.json())
			.then(resp=>this.setState({posts:resp}))
		}
		// this.create = this.create.bind(this);
		// this.update = this.update.bind(this);
		// this.delete = this.delete.bind(this);
		// this.handleChange = this.handleChange.bind(this);
	
		
	
		// create(e:any) {
		// 	// add entity - POST
		// 	e.preventDefault();

		// 	// creates entity
		// 	fetch("http://localhost:4000", {
		// 		"method": "POST",
		// 		"headers": {
		// 		  "content-type": "application/json",
		// 		  "accept": "application/json"
		// 		},
		// 		"body": JSON.stringify({
		// 		  name: this.state.name,
		// 		  notes: this.state.notes
		// 		})
		// 	  })
		// 	  .then(response => response.json())
		// 	  .then(response => {
		// 		console.log(response)
		// 	  })
		// 	  .catch(err => {
		// 		console.log(err);
		// 	  });
		// 	}
		// 	update(e: { preventDefault: () => void }, id:any, name:any) {
		// 		// update entity - PUT
		// 		e.preventDefault();
		// 		// this will update entries with PUT
		// 		fetch("http://localhost:4000", {
		// 			"method": "PUT",
		// 			"headers": {
		// 				"content-type": "application/json",
		// 				"accept": "application/json"
		// 			},
		// 			"body": JSON.stringify({
		// 				_id: this.state.id,
		// 				name: this.state.name,
		// 				// notes: this.state.notes
		// 			})
		// 			})
		// 			.then(response => response.json())
		// 			.then(response => { console.log(response);
		// 			})
		// 			.catch(err =>{ console.log(err); });
		// 		}
		// 		delete(e:any) {
		// 			// delete entity - DELETE
		// 			e.preventDefault();
		// 			// deletes entities
		// 			fetch(`http://localhost:4000/categories/name/_id/$%7Bthis.state.id%7D/${this.state.id}`, {
		// 			  "method": "DELETE",
		// 			  "headers": {
					
		// 			  }
		// 			})
		// 			.then(response => response.json())
		// 			.then(response => {
		// 			  console.log(response);
		// 			})
		// 			.catch(err => {
		// 			  console.log(err);
		// 			});
		// 		  }
		// 		  handleChange(changeObject:any) {
		// 			this.setState(changeObject)
		// 		  }
		
	render() {
		
		return (
			<>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/MEN' element={<MEN />} />
					<Route path='/KIDS' element={<KIDS />} />
				
				</Routes>
				{this.state.posts.map((post:PostsProps) =><div key={post.id}>{post.id}.{post.title}</div>)}
			</>
		)
	}
}
