import styles from './nav-item.module.css'
import PropTypes from 'prop-types';

function NavItem({ children, text }) {
    return (
        <div className={styles.navlink}>
            {children}
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default NavItem

NavItem.propTypes = {
    children: PropTypes.element,
    text: PropTypes.string.isRequired
  }