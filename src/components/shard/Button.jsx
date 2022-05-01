import PropTypes from "prop-types";

function Button({ children, version, type, isDesabled }) {
  return (
    <button type={type} className={`btn ${version}`} disabled={isDesabled}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  children: "Submit",
  type: "button",
  version: "btn-primary",
  isDesabled: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDesabled: PropTypes.bool,
};

export default Button;
