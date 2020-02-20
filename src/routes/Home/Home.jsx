import React from 'react';
import { connect } from 'react-redux';
import styles from './Home.module.scss';
import ExpandingList from '../../components/ExpandingList/ExpandingList';

function Home({ data }) {
  return (
    <main className={styles.home}>
        <h1>Code Submission</h1>
        <ExpandingList data={data}/>
    </main>
  );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
    }
};

export default connect(mapStateToProps, null)(Home);