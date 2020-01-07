import FirstPage from './components/first-page';
import SecondPage from './components/second-page';

const routes = [
    {
        path: '/',
        name: 'first',
        component: FirstPage,
    },

    {
        path: '/second',
        name: 'second',
        component: SecondPage,
    }

];

export default routes;
