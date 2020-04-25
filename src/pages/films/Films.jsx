import React from 'react'
import News from './news/News'
import Genres from './genre/Genres'

const Films = (props) => {
 return (
     <div className="container">
         <News state={props.state}/>
         <Genres state={props.state}/>
     </div>
 )
};

export default Films;