import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
const GraphBox = (props) => {
    return (
    
        <div className="Graph">
            <Grid className='g-main' container spacing={1.5} columns={3}>
                <Grid className='g-container' container item spacing={0} xs={1} >
                    
                </Grid>
                <Grid className='g-container' container item spacing={0} md={5} >
                    <Stack>
                        <h3 className="g-heading">App Usage Graph</h3>
                        <img className="g-img" src={require(`../images/Line_graph.png`)} alt="" />
                    </Stack>
                </Grid>
                <Grid className='g-container' container item spacing={0} md={2} >
                    
                </Grid>
                <Grid className='new' container item spacing={0}  md={3} >
                    <Stack direction= "column" spacing={0} justifyContent="space-between">
                        <div className="s-stat"><p>Total Users         2000  :</p> <p style={{color: '#4b4' }}>+25%</p></div>
                        <div className="s-stat"><p>New Users           500   </p>  </div>
                        <div className="s-stat"><p>Total Income        1000  :</p> <p style={{color: '#4b4' }}>+70%</p></div>
                        <div className="s-stat"><p>Total Expenses      299   :</p>  <p style={{color: '#d44' }}v>+10%</p></div>
                        <div className="s-stat"><p>Deleted Accounts    15    :</p>   <p style={{color: '#d44' }}>+3</p></div>
                        <div className="s-stat"><p>Banned Accounts     9     :</p>    <p style={{ color: '#d44' }}>+2</p></div>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default GraphBox