import React, { Component } from 'react'

type ArticleProps = {
  title: string
  content: string
}

type ArticleState = {
  liked: boolean
}

export default class Article extends Component<ArticleProps, ArticleState> {
  readonly state: ArticleState = {
    liked: false
  }

  // toggleLike = () => {
  //   this.setState(prevState => ({
  //     liked: !prevState.liked
  //   }))
  // }
  toggleLike() {
    this.setState(prevState => ({
      liked: !prevState.liked
    }))
  }

  render() {
    const { title, content } = this.props
    const { liked } = this.state

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={this.toggleLike}>{liked ? 'cancel like' : 'like'}</button>
      </div>
    )
  }
}
