import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
  let items = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await items.json();
  return {
    props: {
      apiData: data,
    },
  };
};

export default function Home({ apiData }) {
  return (
    <>
      <div className={styles.container}>
        <h1>This is the home component</h1>
        <ul>
          {apiData.length &&
            apiData.map((user, id) => {
              return (
                <Link href={'/nested/' + user.id} key={id}>
                  <a key={id}>
                    <li key={id}>{user.username}</li>
                  </a>
                </Link>
              );
            })}
        </ul>
      </div>
    </>
  );
}
