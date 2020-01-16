import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg top src={ dish.image } alt={ dish.name } />
                    <CardBody>
                        <CardTitle>{ dish.name }</CardTitle>
                        <CardText>{ dish.description }</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return(
                <div></div>
            )
        }   
    }

    getComments(dish) {
        if(dish != null) {
            return dish.comments;
        }
    }

    convertDate(date) {
        const oldDate = new Date(Date.parse(date));
        const newDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
        const finalDate = newDate.format(oldDate);
        return finalDate;
    }

    renderComments(comments){
        if(comments != null){
            const items = comments.map((item) => {
                return(
                    <ul key={ item.id } className="list-unstyled">
                        <li>{ item.comment }</li>
                        <br />
                        <li>-- { item.author } , { this.convertDate(item.date) }</li>
                    </ul>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    { items }
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }
    
    render(){
        const comments = this.getComments(this.props.selectedDish);
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-md-5 mt-1 mb-1">
                        { this.renderDish(this.props.selectedDish) }
                    </div>
                    <div className="col-12 col-md-5 mt-1 mb-1">
                        { this.renderComments(comments) }
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;