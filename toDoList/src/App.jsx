import React, {Component} from 'react';

class TextBox extends Component{

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    return (
      <input type="text" value={this.props.textValue} name="textValue" onChange={this.handleChange} placeholder='Add ToDo' className={this.props.className} />
    );
  }
}

class CheckBox extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    return (
      <input
        type="checkbox"
        name="checkValue"
        checked={this.props.checkValue}
        value=""
        onChange={this.handleChange}
      />
    );
  }
}


class List extends Component {
  render(){
    return (
      <ul className="list-ul">
        {this.props.items.map((item, index) => {
          return (
            <div key={index}>
              <CheckBox checkValue={item.done} onInputChange={() => this.props.onCompletionToggle(index)} />
              <ListItem value={item.value} key={index} className={item.done && 'completed'} />
              { !item.done && <Button value='Edit' onClick={() => this.props.onEdit(index)} /> }
              <Button value='Delete' onClick={() => this.props.onDelete(index)} />
            </div>
          );
        })}
      </ul>
    );
  }
}

class ListItem extends Component {
  render(){
    return (
      <li className={this.props.className}>{this.props.value}</li>
    );
  }
}

class Button extends Component {
  render(){
    return (
      <button type="button" onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      highlightTextBox: false,
      todos: [{
        value: 'rails',
        done: false,
      }],
      actionButtonText: 'Add',
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const targetName = target.name;
    const targetType = target.type;

    const targetValue = target.type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [targetName]: targetValue,
    })
  }

  getExistingItems = () => {
    return this.state.todos.map(todo => todo.value);
  }

  isItemEmpty = (itemText) => itemText == null || itemText.trim() == ''

  isItemAlreadyExists = (itemText) => {
    const existingItems = this.getExistingItems();
    const processedExistingItems = existingItems.map((item) => item.toLowerCase());
    return (processedExistingItems.indexOf(itemText.trim().toLowerCase()) !== -1);
  }

  handleItemSubmit = () => {
    const inputToDoText = this.state.textValue;

    if(this.isItemEmpty(inputToDoText)){
      alert('Cannot add empty item');
      this.setState({
        highlightTextBox: true,
      });
    } else if(this.isItemAlreadyExists(inputToDoText)){
      alert('Item is already present in list');
      return;
    } else{
      const todos = this.state.todos;
      todos.push({
        value: inputToDoText,
        done: false,
      });

      this.setState({
        todos: todos,
        textValue: '',
        actionButtonText: 'Add',
        highlightTextBox: false,
      });
    }
  }

  handleDeleteItem = (itemIndex) => {
    const todos = this.state.todos;
    todos.splice(itemIndex, 1);

    this.setState({
      todos
    });
  }

  handleEditItem = (itemIndex) => {
    const todos = this.state.todos;
    const textToBeDisplayed = (todos.splice(itemIndex, 1)[0]).value;

    this.setState({
      todos,
      textValue: textToBeDisplayed,
      actionButtonText: 'Update',
    });
  }

  toggleCompletion = (itemIndex) => {
    const todos = this.state.todos;
    const selectedToDo = todos.splice(itemIndex, 1)[0];
    selectedToDo.done = !selectedToDo.done;

    todos.splice(itemIndex, 0, selectedToDo);
    this.setState({
      todos,
    });
  }

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <TextBox textValue={this.state.textValue} onInputChange={this.handleInputChange} className={this.state.highlightTextBox && 'highlight'} />
        <Button value={this.state.actionButtonText} onClick={this.handleItemSubmit} />
        <List items={this.state.todos} onDelete={this.handleDeleteItem} onEdit={this.handleEditItem} onCompletionToggle={this.toggleCompletion} />
      </div>
    );
  }
}
export default ToDoList;
