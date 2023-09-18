import PropTypes from 'prop-types'
const Link = ({ route }) => {
    // const {path, name} = route;
    return (
        <div>
            <li className="mr-10 text-white text-black text-start px-67 hover:bg-yellow-500">
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};
Link.propType={
    route:PropTypes.object
}

export default Link;