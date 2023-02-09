const InfoBox = (props) => {
    return (
    
        <div className="info">
            <div className="textBox">
                <div className="text bold">{`${props.title} \n\n\n`}</div>
                <div className="text" style={{color: props.color}} >{`${props.percentage}% ${props.change}`}</div>
            </div>

            <div className="right">
                <img className="info-icon" src={require(`../images/${props.image}.png`)} alt=""/>
            </div>
        </div>
    )
}

export default InfoBox