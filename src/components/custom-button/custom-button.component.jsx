import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {/** children is the property of the inner tags, from where it is called. */}
    {children}
  </button>
);

export default CustomButton;
