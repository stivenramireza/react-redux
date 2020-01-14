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
        const oldDate = new Date(date);
        const newDate = oldDate.toString().split(" ");
        const finalDate = newDate[1] + " " + (parseInt(newDate[2]) + 1)  + ", " + newDate[3];
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
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    { this.renderDish(this.props.selectedDish) }
                </div>
                <div className="col-12 col-md-5 m-1">
                    { this.renderComments(comments) }
                </div>
            </div>
        )
    }
}

export default DishDetail;