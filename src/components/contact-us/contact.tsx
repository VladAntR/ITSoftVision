'use client';
import {TitleSection} from '@/src/common/title/title';
import {FormEvent, useState} from 'react';
import styles from './contact.module.scss';

const ContactUs = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          phone,
          email,
          subject,
          description,
        }),
        headers: {'Content-Type': 'application/json'},
      });
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <article className={styles.contact}>
      {/* ... your title, text and form, same as before ... */}
      <section className={styles.contact_form}>
        <div className={styles.contact_us_title}>
          <TitleSection title="Contact Form" />
        </div>
        <form onSubmit={onSubmit} className={styles.contact_form__wrapper}>
          <input
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
          <input
            value={phone}
            placeholder="Phone"
            onChange={e => setPhone(e.target.value)}
          />
          <input
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            value={subject}
            placeholder="Subject"
            onChange={e => setSubject(e.target.value)}
          />
          <textarea
            value={description}
            placeholder="Description"
            onChange={e => setDescription(e.target.value)}
          />
          <button type="submit" className={styles.contact_form__btn}>
            Send
          </button>
        </form>
        {status && <p>{status}</p>}
      </section>
    </article>
  );
};

export default ContactUs;
