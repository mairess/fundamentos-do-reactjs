import './styles.css'

type Cardprops = {
    name: string;
    time: string;
}

export function Card(props: Cardprops){
    return(
        <div className='card'>
            <strong> {props.name} </strong>
            <small>{props.time}</small>
        </div>
    )
}