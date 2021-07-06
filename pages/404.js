import Link from 'next/link';
import Layout from './../components/Layout';
import styles from '../styles/404.module.css';
const NotFoundPage = () => {
  return (
    <Layout title="page not found">
      <div className={styles.error}>
        <h1>404</h1>
        <h1>Sorry there is nothing here</h1>
        <Link href="/"> Go Back home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
