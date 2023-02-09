import Grid  from '@mui/material/Grid';
import GraphBox from './GraphBox';
import InfoBox from './InfoBox';
import ChartBox from './ChartBox';

const Homebody = () => {
    return (
        <div className="homebody">
            <div className='info-box-container'>
                <InfoBox title="New Users" percentage="30" change="Increase" image="people" color="#4b4" />
                <InfoBox title="Likes" percentage="15" change="Increase" image="likes" color="#4b4"/>
                <InfoBox title="Posts" percentage="5" change="Decrease" image="posts" color="#d44"/>
                <InfoBox title="Satisfaction" percentage="20" change="Increase" image="satisfaction" color="#4b4"/>
            </div>

            <GraphBox />

            <div className="chart-box-container">
                <ChartBox title="Chart" image="chart" />
                <ChartBox title="Chart" image="chart2" />
                <ChartBox title="Chart" image="vertical-bar-chart-2" />
            </div>
        </div>
    )
}

export default Homebody