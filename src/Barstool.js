import React from "react";
import './Barstool.css';
export default class Barstool extends React.Component {
  state = {
    
    article: []
  };

  async componentDidMount() {
    const response = await fetch("https://www.jalirani.com/files/barstool.json")
    const data = await response.json();
    this.setState({ article: data})
    
  };

  render() {
  
    return (
      <div>
        {this.state.article.map(response => (
          <div id= "rectangle" key={response.id}>
            <img id="pics" src ={response.thumbnail.location + response.thumbnail.images.medium}></img>
            <a id ="text"href={response.url}>{response.title}</a>
            <div>{response.author.name}</div>
            <img id="av" src ={response.author.avatar}></img>
            <div>Comments:{response.comment_count}</div>
            
            
          </div>
        ))}
      </div>
    );
  }
}