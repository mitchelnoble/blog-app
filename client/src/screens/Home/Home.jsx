import React from 'react';
import './Home.css';
import AddCard from '../AddCard/AddCard';
import PostDetail from '../PostDetail/PostDetail';


const Home = () => {
  
  return (
    <Layout>
      
      <Route exact path='/' component={Home}/>
      <Route path='/add-cards' component={AddCard}/>
      <Route path='/post-detail/:id' component={PostDetail}/>

    </Layout>
  )
  }

export default Home;
