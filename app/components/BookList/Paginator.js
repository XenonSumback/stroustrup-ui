import React, { Component } from 'react'
import { connect } from 'react-refetch'

export class Paginator extends Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
      this.state = {
        next: this.props.books.next,
        previous: this.props.books.previous,
      };
  }

    handleClick = (e, url) => {
      e.preventDefault()
      if (url == undefined){
        return
      }
      const { pages } = this.props
      pages(url)
            next = pages.value.next,
            previous = pages.value.previous
      this.setState(next: next, previous: previous)
    }

  render(){
    console.log(this.props);
    const pages = this.props.books
    return(
      <nav>
        <ul className="pager">
          <li><a onClick={(e) => {this.handleClick(e, this.state.previous)}} >Previous</a></li>
          <li><a onClick={(e) => {this.handleClick(e, this.state.next)}}>Next</a></li>
        </ul>
      </nav>
    )
  }
}

export default connect(props => {
  return{
  pages: (url) => ({
    pagesResponse: {
      url: url,
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
      force: true,
      refreshing: true,
    }
  })
}
})(Paginator)
