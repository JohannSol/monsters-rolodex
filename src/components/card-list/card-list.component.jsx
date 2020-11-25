import React, { Component } from 'react'
import Card from './card.component'
import './card-list.styles.css'

export class CardList extends Component {
    render() {
        return (
            <div className = "card-list">
                {this.props.monsters.map(item => <Card key={item.id} monster = {item}/> )}
            </div>
        )
    }
}

export default CardList;