import IssueList from "./IssueList";
import IssueReport from "./IssueReport";
import IssueEdit from "./IssueEdit";
import About from "./About";
import NotFound from "./NotFound";

const routes = [
    {path: '/issues', component: IssueList},
    {path: '/edit/:id', component: IssueEdit},
    {path: '/report', component: IssueReport},
    {path: '/about', component: About},
    {path: '*', component: NotFound},
];

export default routes;