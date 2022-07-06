import React, {Component} from "react";
import "./Note.css"

// class Note extends Component {
//     state = {};
//     render() {
//         return <h1>This is first note</h1>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         note : "this is note 1"
//     };
//     render() {
//         return(this.state.note)
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         note : "this is note 1"
//     };
//     render() {
//         return <h1>{this.state.note}</h1>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         note : "this is note 1"
//     };
//     render() {
//         return <h1>{this.renderNote()}</h1>
//     }
//     renderNote(){
//         return <h1>FatemhBadiei</h1>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         note : "this is note 1"
//     };
//     styles = {
//       fontSize : 70,
//       color : "red"
//     };
//
//     render() {
//         return <h1 style={this.styles}>{this.state.note}</h1>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         note : "this is note 1"
//     };
//
//     render() {
//         return <h1 style={{fontSize : 70 , color : "green"}}>{this.state.note}</h1>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         note : "this is note 1"
//     };
//
//     render() {
//         return <h1 className="note">{this.state.note}</h1>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         notes : ["do homework" , "practice reactjs" , "writing code" , "megajs reactjs course" , "practice english"]
//     };
//     render() {
//         return (
//             <ul>
//                 <li>{this.state.notes[0]}</li>
//                 <li>{this.state.notes[1]}</li>
//                 <li>{this.state.notes[2]}</li>
//                 <li>{this.state.notes[3]}</li>
//                 <li>{this.state.notes[4]}</li>
//             </ul>
//         )
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         notes : ["do homework" , "practice reactjs" , "writing code" , "megajs reactjs course" , "practice english"]
//     };
//     render() {
//         return <ul>{this.state.notes.map(note => <li key={note.id}>{note}</li>)}</ul>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         notes: ["do homework",
//             "practice reactjs",
//             "writing code",
//             "megajs reactjs course",
//             "practice english"]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map(note => <li key={note.id}>{note}</li>)
//         }
//     }
//
//     render() {
//         return <ul>{this.renderNotes()}</ul>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         notes: [
//             {id : 1 , text: "do homework"},
//             {id : 2 , text: "practice reactjs"},
//             {id : 3 , text: "writing code"},
//             {id : 4 , text: "megajs reactjs course"},
//             {id : 5 , text: "practice english"}
//         ]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map((note) => <li key={note.id}>{note.id} : {note.text}</li>)
//         }
//     }
//
//     render() {
//         return <ul>{this.renderNotes()}</ul>
//     }
// }
//
// export default Note;


// class Note extends Component {
//     state = {
//         notes: [
//             {id : 1 , text: "do homework"},
//             {id : 2 , text: "practice reactjs"},
//             {id : 3 , text: "writing code"},
//             {id : 4 , text: "megajs reactjs course"},
//             {id : 5 , text: "practice english"}
//         ]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map((note) => <li key={note.id}>{note.id}. text: {note.text}</li>)
//         }
//     }
//
//     render() {
//         return <ul>{this.renderNotes()}</ul>
//     }
// }
//
// export default Note;



// class Note extends Component {
//     state = {
//         notes: [
//             {id : 1 , text: "do homework"},
//             {id : 2 , text: "practice reactjs"},
//             {id : 3 , text: "writing code"},
//             {id : 4 , text: "megajs reactjs course"},
//             {id : 5 , text: "practice english"}
//         ]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map((note) => <li key={note.id}>{note.id}. text: {note.text}</li>)
//         }
//     }
//
//     changeNotes(){
//         console.log(this)
//     }
//
//     render() {
//         return(
//             <>
//                 <ul>{this.renderNotes()}</ul>
//                 <button onClick={this.changeNotes}>Change notes</button>
//             </>
//         )
//     }
// }
//
// export default Note;



// class Note extends Component {
//     constructor() {
//         super();
//         this.changeNotes = this.changeNotes.bind(this)
//     }
//     state = {
//         notes: [
//             {id : 1 , text: "do homework"},
//             {id : 2 , text: "practice reactjs"},
//             {id : 3 , text: "writing code"},
//             {id : 4 , text: "megajs reactjs course"},
//             {id : 5 , text: "practice english"}
//         ]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map((note) => <li key={note.id}>{note.id}. text: {note.text}</li>)
//         }
//     }
//
//     changeNotes(){
//         console.log(this)
//     }
//
//     render() {
//         return(
//             <>
//                 <ul>{this.renderNotes()}</ul>
//                 <button onClick={this.changeNotes}>Change notes</button>
//             </>
//         )
//     }
// }
//
// export default Note;


// class Note extends Component {
//
//     state = {
//         notes: [
//             {id : 1 , text: "do homework"},
//             {id : 2 , text: "practice reactjs"},
//             {id : 3 , text: "writing code"},
//             {id : 4 , text: "megajs reactjs course"},
//             {id : 5 , text: "practice english"}
//         ]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map((note) => <li key={note.id}>{note.id}. text: {note.text}</li>)
//         }
//     }
//
//     changeNotes = () =>{
//         console.log(this)
//     }
//
//     render() {
//         return(
//             <>
//                 <ul>{this.renderNotes()}</ul>
//                 <button onClick={this.changeNotes}>Change notes</button>
//             </>
//         )
//     }
// }
//
// export default Note;


// class Note extends Component {
//
//     state = {
//         notes: [
//             {id : 1 , text: "do homework"},
//             {id : 2 , text: "practice reactjs"},
//             {id : 3 , text: "writing code"},
//             {id : 4 , text: "megajs reactjs course"},
//             {id : 5 , text: "practice english"}
//         ]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map((note) => <li key={note.id}>{note.id}. text: {note.text}</li>)
//         }
//     }
//
//     changeNotes = () =>{
//         console.log(this.state.notes);
//         this.state.notes = [
//             {id : 6 , text: "do homework"},
//             {id : 7 , text: "practice reactjs"},
//             {id : 8 , text: "writing code"},
//             {id : 9 , text: "megajs reactjs course"},
//             {id : 10 , text: "practice english"}
//         ];
//         console.log(this.state.notes);
//     };
//
//
//     render() {
//         return(
//             <>
//                 <ul>{this.renderNotes()}</ul>
//                 <button onClick={this.changeNotes}>Change notes</button>
//             </>
//         )
//     }
// }
//
// export default Note;



// class Note extends Component {
//
//     state = {
//         notes: [
//             {id : 1 , text: "do homework"},
//             {id : 2 , text: "practice reactjs"},
//             {id : 3 , text: "writing code"},
//             {id : 4 , text: "megajs reactjs course"},
//             {id : 5 , text: "practice english"}
//         ]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map((note) => <li key={note.id}>{note.id}. text: {note.text}</li>)
//         }
//     }
//
//     changeNotes = () =>{
//         console.log(this.state.notes);
//         this.setState({
//             notes : [
//                 {id : 6 , text: "do homework"},
//                 {id : 7 , text: "practice reactjs"},
//                 {id : 8 , text: "writing code"},
//                 {id : 9 , text: "megajs reactjs course"},
//                 {id : 10 , text: "practice english"}
//             ]
//         });
//         console.log(this.state.notes);
//     };
//
//
//     render() {
//         return(
//             <>
//                 <ul>{this.renderNotes()}</ul>
//                 <button onClick={this.changeNotes}>Change notes</button>
//             </>
//         )
//     }
// }
//
// export default Note;



// class Note extends Component {
//
//     state = {
//         notes: [
//             {id : 1 , text: "do homework"},
//             {id : 2 , text: "practice reactjs"},
//             {id : 3 , text: "writing code"},
//             {id : 4 , text: "megajs reactjs course"},
//             {id : 5 , text: "practice english"}
//         ]
//     };
//
//     renderNotes (){
//         if (this.state.notes.length === 0){
//             return <li>There is not any note</li>
//         }else{
//             return this.state.notes.map((note) => <li key={note.id}>{note.id}. text: {note.text}</li>)
//         }
//     }
//
//     changeNotes = (file) =>{
//         console.log(file);
//         this.setState({
//             notes : [
//                 {id : 6 , text: "do homework"},
//                 {id : 7 , text: "practice reactjs"},
//                 {id : 8 , text: "writing code"},
//                 {id : 9 , text: "megajs reactjs course"},
//                 {id : 10 , text: "practice english"}
//             ]
//         });
//
//     };
//
//     doChangeNotes = () =>{
//         this.changeNotes({id:1 , file:"note1"})
//     }
//
//
//     render() {
//         return(
//             <>
//                 <ul>{this.renderNotes()}</ul>
//                 <button onClick={this.doChangeNotes}>Change notes</button>
//             </>
//         )
//     }
// }
//
// export default Note;


class Note extends Component {

    state = {
        notes: [
            {id : 1 , text: "do homework"},
            {id : 2 , text: "practice reactjs"},
            {id : 3 , text: "writing code"},
            {id : 4 , text: "megajs reactjs course"},
            {id : 5 , text: "practice english"}
        ]
    };

    renderNotes (){
        if (this.state.notes.length === 0){
            return <li>There is not any note</li>
        }else{
            return this.state.notes.map((note) => <li key={note.id}>{note.id}. text: {note.text}</li>)
        }
    }

    changeNotes = (file) =>{
        console.log(file);
        this.setState({
            notes : [
                {id : 6 , text: "do homework"},
                {id : 7 , text: "practice reactjs"},
                {id : 8 , text: "writing code"},
                {id : 9 , text: "megajs reactjs course"},
                {id : 10 , text: "practice english"}
            ]
        });

    };


    render() {
        return(
            <>
                <ul>{this.renderNotes()}</ul>
                <button onClick = {() => {this.changeNotes({id:1 , file:"note1"})}}>Change notes</button>
            </>
        )
    }
}

export default Note;


