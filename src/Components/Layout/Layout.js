import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.module.css';

const Layout = (props) => (
    <Auxi>
        <div>toolbar, sidedrawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxi>
)

export default Layout;