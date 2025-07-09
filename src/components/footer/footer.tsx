import {menu, TMenuItem} from '@/src/services/menu';
import styles from './footer.module.scss';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_nav__wrapper}>
        <img src="/logo.svg" alt="iTSoftVision" className={styles.logo} />
        <nav className={styles.nav_wrapper}>
          <ul>
            {menu.map((menuItem: TMenuItem) => (
              <li key={menuItem.id}>
                <Link href={menuItem.link}>{menuItem.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className={styles.copyright}>© 2025 Dreamy Inc. All rights reserved</p>
    </footer>
  );
};

export default Footer;
