import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from '../components/MenuComponent';
import DishDetail from '../components/DishdetailComponent';
import Header from '../components/HeaderComponent';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId){
        this.setState({
            selectedDish: dishId
        })
    }

    render(){
        return(
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={ (dishId) => this.onDishSelect(   ) } />
                <DishDetail selectedDish={this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        )
    }
}

export default Main;