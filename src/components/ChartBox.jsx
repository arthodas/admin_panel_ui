const ChartBox = (props) => {
    return (
    
        <div className="chart">
            <div className="textBox">
                <div className="text bold">{`${props.title} \n\n\n`}</div>
            </div>

            <div className="right">
                <img className="chartimg" src={require(`../images/${props.image}.png`)} alt=""/>
            </div>
        </div>
    )
}

export default ChartBox