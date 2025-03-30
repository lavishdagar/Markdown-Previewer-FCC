import React, { Component } from 'react';
import Previewer from './components/Previewer';
import Markdown from './components/Markdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine ===  && lastLine === ) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!  
Or _italic_.  
Or... wait for it... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and  
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
      `,
    }
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }
  render() {
    return (
      <>
        <h1 className='heading'>Markdown Previewer</h1>
        <div className="container mt-5 mb-5 border border-2 rounded-3 shadow-lg p-3 bg-body-tertiary+ text-bg-light ">
          <div >
          <Markdown markdown={this.state.markdown} updateMarkdown={this.updateMarkdown} />
          </div>
          <br />
          <div>
          <Previewer markdown={this.state.markdown}/>
          </div>
        </div>;
      </>
    );
  }
}

export default App;