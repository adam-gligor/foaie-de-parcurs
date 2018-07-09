import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import About from './scenes/about/Index';
import Home from './scenes/home/Index';
import Report from './scenes/report/Index';

export const routes = <Layout>
    <Route exact={true} path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/report' component={Report} />
</Layout>;
