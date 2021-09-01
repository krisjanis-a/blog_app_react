import './SinglePost.css';
import Sidebar from '../Sidebar/Sidebar';

const SinglePost = () => {
    return (
        <div className='single_post'>
            <div className="single_post_wrapper">
                <img src="https://images.unsplash.com/photo-1470165511815-34e78ff7a111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="" className="single_post_image" />
                <h1 className='single_post_title'>Lorem ipsum dolor sit
                    <div className="single_post_edit">
                        <i className="single_post_icon fas fa-edit"></i>
                        <i className="single_post_icon fas fa-trash-alt"></i>
                        </div>
                </h1>
                <div className="single_post_info">
                    <span className='single_post_author'>Author: <b>John</b></span>
                    <span className='single_post_date'>20 minutes ago</span>
                </div>
                <p className='single_post_description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit quod dolor ea reiciendis et animi odit sapiente voluptatum? Et possimus dolorem corrupti totam repellat perferendis ullam fugiat cum non quis. Error iusto inventore dignissimos. Facilis qui fugit, nihil ducimus, ea illum corporis rerum nostrum veritatis quam veniam quos assumenda cum! Ullam accusamus, provident beatae asperiores vel itaque alias velit fugiat soluta quo delectus, explicabo ab fuga consequuntur officia temporibus? Officiis mollitia numquam neque at repellendus esse saepe, quaerat officia quisquam totam sapiente, magni ea nesciunt, nam quis. Eius temporibus maiores cupiditate culpa beatae vitae, possimus nemo, deserunt necessitatibus animi soluta sequi? Omnis harum molestiae illo modi consequuntur odit atque blanditiis officia exercitationem laborum, incidunt totam perferendis nostrum iste, ipsum nesciunt ab doloremque reprehenderit sapiente, necessitatibus earum. Repellendus, minus, iusto reprehenderit explicabo placeat cumque eius veniam aspernatur dolorum tempore pariatur id omnis hic fuga necessitatibus, ratione autem suscipit sequi! Adipisci.</p>
            </div>
        </div>
    )
}

export default SinglePost
