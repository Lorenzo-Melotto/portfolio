import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>The content that you are looking for can't be found :/</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    );
}

export default NotFound;