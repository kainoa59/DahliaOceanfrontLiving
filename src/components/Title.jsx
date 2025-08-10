import PropTypes from 'prop-types';

const Title = ({ title, subtitle }) => (
    <h1 className="home-title">
        {title} <br />
        <small>{subtitle}</small>
    </h1>
);

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string, // Optional prop
};

export default Title;
45