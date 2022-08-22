import { gql } from '@apollo/client'
import React, { Component } from 'react'
import { client } from '../App'

// const GET_CLOTHES = gql` 
// query {  category(input: { title: "clothes" }) {
//   products {
//     id
//     name
//   }
// }
// }`


// client 
//   .query({
// 	query:GET_CLOTHES
//   }).then(res => console.log(res))
export default class ALL extends Component {

  render() {
    return (
      <div>ALL</div>
    )
  }
}
