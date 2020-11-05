import React, { Component } from 'react';
import './App.css';
import { ItemInput } from "./components/item-input/itemInput.component.jsx";
import { ItemsContainer } from "./components/items-container/itemsContainer.component.jsx";
import { SubmitButton } from "./components/submit-button/submitButton.component.jsx";
import { ClearButtonElement } from "./components/clear-button/clear-button.component.jsx";

class App extends Component {

    constructor() {
        super();

        this.state = {
            itemInput: '',
            items: [],
            anyItemsAppear: false,
        }
    }

    inputChange = e => {
        this.setState({ itemInput: e.target.value })
    }

    addItem = () => {
        const { itemInput, items } = this.state;

        if (itemInput === '') {
            return
        } else {
            const newItem = {
                name: itemInput,
                checked: false,
            };

            this.setState({
                items: [
                    ...items,
                    newItem
                ],
                anyItemsAppear: true
            });
        }
    }

    deleteItem = (e) => {
        let deletedItems = this.state.items;
        const itemToDelete = e.target.getAttribute('id');
        deletedItems.splice(itemToDelete, 1);

        if (deletedItems === undefined || deletedItems.length === 0) {
            this.setState({
                anyItemsAppear: false
            })
        } else {
            this.setState({
                items: deletedItems
            })
        }
    }

    itemDone = () => {
        // let itemsDone = [];

    }

    clearAllItems = () => {
        let clearedItems = this.state.items;
        clearedItems = [];
        this.setState({
            items: clearedItems,
            anyItemsAppear: false
        })
    }

    onItemChecked(item, isChecked) {
        const items = this.state.items.map(x => {
            if (x === item) {
                return {
                    ...item,
                    checked: isChecked
                }
            } else {
                return x;
            }
        });

        this.setState({
            items
        });
    }

    render() {

        let clearButton = null;

        if (this.state.anyItemsAppear === true) {
            clearButton = (
                <ClearButtonElement click={this.clearAllItems}>Clear</ClearButtonElement>
            )
        }

        return (
            <div className="App">
                <ItemInput type='text' onChange={this.inputChange} placeholder='enter something to do' value={this.state.itemInput} />
                <SubmitButton onClick={this.addItem}>Add Item</SubmitButton>
                <ItemsContainer
                    items={this.state.items}
                    itemChecked={(item, isChecked) => this.onItemChecked(item, isChecked)}
                    deleteItem={this.deleteItem}
                    status={this.state.itemStatus}>
                </ItemsContainer>
                {clearButton}
            </div>
        );
    }
}

export default App;
