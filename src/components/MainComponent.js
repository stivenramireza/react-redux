import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Menu from '../components/MenuComponent';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import Home from '../components/HomeComponent';
import Contact from '../components/ContactComponent';
import DishDetail from '../components/DishdetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    }

    render(){
        const HomePage = () => {
            return(
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = ({match}) => {
            return (
                <DishDetail 
                    selectedDish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
                />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;