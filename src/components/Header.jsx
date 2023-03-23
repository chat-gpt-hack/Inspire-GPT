import PropTypes from "prop-types"

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className='title'>{title}</h1>
      <h2>Get inspired</h2>
    </header>
  )
}

Header.defaultProps = {
  title: "Inspire Bot 3000",
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
