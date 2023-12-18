export default function FeatCard(props) {
    return(
        <div>
            <article className="feat-card">
                <div className="icon">{props.icon}</div>    
                <h2 className="title">{props.title}</h2>
                <p className="text">{props.text}</p>
            </article>
        </div>
    )
}