function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-universe">Universe: {props.universe}</p>
                <p className="card-alterego">Альтер эго: {props.alterego}</p>
                <p className="card-occupation">Род деятельности: {props.occupation}</p>
                <p className="card-friends">Друзья: {props.friends}</p>
                <p className="card-superpowers">Суперсилы: {props.superpowers}</p>
                <img className="card-img" src={props.url} alt={props.name}/>
            </div>
        </div>
    );
}

export default Card;