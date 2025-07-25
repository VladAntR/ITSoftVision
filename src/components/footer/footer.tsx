import {menu, TMenuItem} from '@/src/services/menu';
import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_nav__wrapper}>
        <Image
          src="/logo.svg"
          alt="itsoftvision"
          width={116}
          height={30}
          className={styles.logo}
        />
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
