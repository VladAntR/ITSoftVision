'use client';
import {menu, TMenuItem} from '@/src/services/menu';
import {useEffect, useState} from 'react';
import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigation = (
    <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
      <ul className={styles.list_nav}>
        {menu.map((menuItem: TMenuItem) => (
          <li key={menuItem.id}>
            <Link href={menuItem.link}>{menuItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      html.style.overflowY = 'hidden';
      body.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = '';
      body.style.overflowY = '';
    }
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${isOpen ? styles.open : ''} `}>
      <div className={styles.logo_burger}>
        <img src="/logo.svg" alt="iTSoftVision" />
        <div
          className={`${styles.burger_wrapper} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen((prevState: boolean) => !prevState)}>
          <span className={styles.text_burger__mobile}>Close</span>
          <div className={styles.burger}></div>
        </div>
      </div>
      <div className={`${styles.nav_wrapper} ${isOpen ? styles.active : ''}`}>
        {navigation}
      </div>
    </header>
  );
};

export default Header;
