import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItems = this.addItems.bind(this);
  }

  //handleinput
  handleInput(e) {
    this.setState({
      currentItem: e.target.value,
    });
  }
  //additems
  addItems = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    debugger;
    if (newItem) {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: "",
      });
    }
  };
  //clearitems
  clearItems = () => {
    const clear = [];
    this.setState({
      items: clear,
    });
  };

  //delete items
  deleteItems = (index) => {
    let del = this.state.items.splice(index, 1);
    this.setState({
      currentItem: del,
    });
    debugger;
    console.log(del);
  };
  //edit items
  editItems = (e, index) => {
    let msg = "";
    if (this.state.items.length > 0) {
      this.state.items.forEach((data, id) => {
        if (id === index) {
          msg = data;
          console.log(data);
          console.log(msg);
        }
      });
      this.state.items.splice(index, 1);
      this.setState({
        currentItem: msg,
      });
    }

    //debugger;
  };
  render() {
    debugger;
    const listOut = this.state.items.map((item, index) => {
      return (
        <div>
          <input type="checkbox" />
          <h4 style={{ display: "inline-block" }} key={index}>
            {item}
          </h4>
          <span onClick={this.deleteItems}>
            
            <a style={{ display: "inline-block" }} className="Todo-button">
              Delete
            </a>
          </span>
          <span
            onClick={() => {
              this.editItems( index);
            }}
          >
            <a style={{ display: "inline-block" }} className="Todo-button">
              Edit
            </a>
          </span>
        </div>
      );
    });
    console.log(listOut);

    return (
      <div className=" Todo-container">
        <form onSubmit={this.addItems}>
          <h2>Todo Tracker</h2>
          <input
            type="text"
            className="Todo-input"
            placeholder="Add item"
            value={this.state.currentItem}
            onChange={this.handleInput}
          />
          <button className="Todo-input" type="submit">
            Add{" "}
          </button>
          
        </form>
        <a className="Todo-button" onClick={this.clearItems}>
          {" "}
          Clear all
        </a>

        <h4 id="todo-list"> Your Todos:</h4>
        {listOut}
      </div>
    );
  }
}

export default Todos;
