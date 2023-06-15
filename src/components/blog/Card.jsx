import React from "react"
import "./blog.css"
import { JOBS, blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Card = () => {
  return (
    <>
      <section className='blog'>
        <h3 className="heading1" style={{ padding: "30px", paddingTop: 0, fontSize: "30px" }}>News Feed</h3>
        <div className='container grid3'>
          {blog.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="heading1" style={{ padding: "30px", paddingTop: "30px", fontSize: "30px" }}>Upcoming Events</h3>
        <div className='container grid3' >
          {blog.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="heading1" style={{ padding: "30px", paddingTop: "30px", fontSize: "30px" }}>Job Updates</h3>
        <div className='container grid3' >
          {JOBS.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
