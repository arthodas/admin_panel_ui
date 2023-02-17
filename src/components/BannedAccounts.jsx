import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import SubMenu from "./SubMenu"
import Avatar from '@mui/material/Avatar';

const BannedAccounts = (props) => {
    return (
        <div className='List    '>
            <Grid className='g-main' container spacing={1.5} columns={3}>
                <Grid className='g-container' container item spacing={0} xs={1} >
                    
                </Grid>
                <Grid className='g-container' container item spacing={0} md={5} >
                    <Stack>
                        <h2 className="g-heading">Banned Accounts</h2>
                        
                    </Stack>
                </Grid>
                <Grid className='g-container' container item spacing={0} md={2} >
                    
                </Grid>
                <Grid className='new' container item spacing={0}  md={5} >
                    <Stack direction= "column" spacing={0} justifyContent="space-between">
                        <div className="l-stat">
                            <p><Avatar sx={{ bgcolor : "light-gray", width : 30, height : 30  }} />
                            anthony_john</p> 
                        </div>
                        <div className="l-stat">
                            <p><Avatar sx={{ bgcolor : "light-gray", width : 30, height : 30  }} />
                            markthegreat</p>
                        </div>
                        <div className="l-stat">
                            <p><Avatar sx={{ bgcolor : "light-gray", width : 30, height : 30  }} />
                            akshay_the_boss</p>
                        </div>
                        <div className="l-stat">
                            <p><Avatar sx={{ bgcolor : "light-gray", width : 30, height : 30  }} />
                            i_am_mean</p>
                        </div>
                        <div className="l-stat">
                            <p><Avatar sx={{ bgcolor : "light-gray", width : 30, height : 30  }} />
                            HWisNotGood</p>
                        </div>
                        <div className="l-stat">
                            <p><Avatar sx={{ bgcolor : "light-gray",  width : 30, height : 30 }} />
                            this_is_a_troll_account</p>
                        </div>
                    </Stack> 
                </Grid>
            </Grid>
        </div>
    )

}

export default BannedAccounts