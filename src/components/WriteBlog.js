import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class WriteBlog extends Component {
 state ={
     blog : ' ',
     display : 'none'
 }

 handleClick = () =>{
     //console.log(this.state.blog) ;
     this.setState({
         display : 'block'
     });
 }

    render() {
        return (
            <div className="App">
                <h3>Writing blog for Examrly</h3>
                <CKEditor 
                   
                    editor={ ClassicEditor }
                    data="<p>Write your blog here</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        //console.log( { event, editor, data } );
                        this.setState({blog : data});
                    } }
                    onBlur={ ( event, editor ) => {
                       // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        //console.log( 'Focus.', editor );
                    } }
                />
                  <button onClick={this.handleClick}> Submit </button>

                <div> 
                    <p style={ {padding : `30px`, display: this.state.display}}>
                        {this.state.blog}
                    </p>
                    
                </div>
            </div>

                  

        );
    }
}

export default WriteBlog;