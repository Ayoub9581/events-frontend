import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from './../styles/Layout.module.css';
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: ' DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other music events',
  keywords: 'music, dj ,events',
};

export default Layout;
