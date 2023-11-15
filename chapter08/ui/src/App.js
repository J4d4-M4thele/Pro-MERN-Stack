import graphQLFetch from "./graphQL.Fetch";
import IssueList from "./IssueList";

IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired,
};

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));