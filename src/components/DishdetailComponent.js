import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function getComments(dish) {
        if(dish != null) {
            return dish.comments;
        }
    }

    function convertDate(date) {
        const oldDate = new Date(Date.parse(date));
        const newDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
        const finalDate = newDate.format(oldDate);
        return finalDate;
    }

    const RenderDish = ({dish}) => {
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

    const RenderComments = ({comments}) => {
        if(comments != null){
            const items = comments.map((item) => {
                return(
                    <ul key={ item.id } className="list-unstyled">
                        <li>{ item.comment }</li>
                        <br />
                        <li>-- { item.author } , { convertDate(item.date) }</li>
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
    
    const DishDetail = (props) => {
        const comments = getComments(props.selectedDish);
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-md-5 mt-1 mb-1">
                        <RenderDish dish={props.selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 mt-1 mb-1">
                        <RenderComments comments={comments} />
                    </div>
                </div>
            </div>
        )
    }

export default DishDetail;