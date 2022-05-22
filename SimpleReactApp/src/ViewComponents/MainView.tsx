import * as React from 'react';
import Button from '@material-ui/core/Button';
import { observer } from "mobx-react";
import { useStores } from '../UseStores';
import { AppBar, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from 'react-nice-avatar'

const MainView = observer(() => {
    const { leaderBoardStore } = useStores();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        UTI Usage Leader Board
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Table style={{ marginTop: 60 }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={2}>Member</TableCell>
                        <TableCell align="left">Success Ratio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leaderBoardStore.leaderBoardMembers.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                <Avatar style={{ width: '4rem', height: '4rem' }} {...row.avatarConfig} />
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.successRatio}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* <Grid container>
                {leaderBoardStore.leaderBoardMembers.map((row) => (
                        <><Grid item>
                        <Avatar style={{ width: '4rem', height: '4rem' }} {...row.avatarConfig} />
                    </Grid><Grid item>
                            {row.name}
                        </Grid><Grid item>
                            {row.successRatio}
                        </Grid></>
                    ))}
            </Grid> */}

                {/* {leaderBoardStore.leaderBoardMembers.map((row) => (
                    <span>
                        <div>
                        <Avatar className="w-32 h-32" {...row.avatarConfig} />
                    </div>
                    <div>
                            {row.name}
                        </div>
                        <div>
                            {row.successRatio}
                        </div>
                    </span>
                    ))}             */}
        </div>
    );
});

// class MainView extends React.Component {

//     render() {
//         var props = this.props;
//         return (
//             <div>
//                 Hello!
//                 <Button variant='contained' color='primary' >My button 2!</Button>
//             </div>
//         );
//     }
// }

export default MainView;