import React, { Component } from 'react';

import classes from './textEditor.module.css';
import Editor from '../Components/Editor/Editor';
import SideDrawer from '../Components/UI/sideDrawer/sideDrawer';

class TextEditor extends Component {
    state = {
        code: "// Write your code here ...",
        language: "plaintext",
        editorWidth: "96%"
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }
    editorDidMount = (editor, monaco) => {
        console.log('editorDidMount', this.state.code);
        // editor.focus();
    }
    onChange = (newValue, e) => {
        // console.log('onChange', e);
        this.setState({ code: e });
        console.log(this.state.code);
    }

    drawerToggler = ()=>{
        this.setState({editorWidth: "90%"});
    }

    render() {
        return (
            <div className={classes.Main}>
                <SideDrawer click={this.drawerToggler} />
                <Editor
                    code={this.state.code}
                    change={this.onChange}
                    editorMount={this.editorDidMount}
                    editorWidth={this.state.editorWidth} 
                />
            </div>
        );
    }
}

export default TextEditor;