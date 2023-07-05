import React from 'react'
import './card.css'

const Card = ({getData}) => {
    
  return (
    <>
    <section className='cardSection'>
    {
        getData.map((elemt,index)=>{
            return(
<div className="cardContainer" key={elemt.id}>


<p className='cardNum'>{index+1}</p>
<p className='cardCategiry'>{elemt.category}</p>
<h1 className='cardTittle'>{elemt.name}</h1>
<p className='cardDiscription'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptate commodi blanditiis dolorum modi deleniti quibusdam iusto! Totam vero </p>
<img className='cardImg' src={elemt.image} alt="product" />
<div className='cardBtnDiv'>
    <p className='cradPrice'> {elemt.price}</p>
    <button className='cardBtn'>Order now</button>
    </div>

</div>
            )
        })
    }
    </section>
      
    </>
  )
}

export default Card
