import { categories } from "../../backend/db/categories";


const Landing = () => {
    return <div className="landing-screen flex">
        <div className="hero-div">
            <img src={'https://urlty.co/dOP'} alt="" className="hero-img" />
             <a href="/" className="primary-btn btn explore-btn"> Explore </a>
        </div>
        <h1 className="category-heading"> Shop category wise here.... </h1>
        <div className="category-div">
            
        {
            categories.map( category =>{
                return(
                <div class="card-img-section">
                    <img src={category.image} alt="" className="category-img" />
                    <div className="category-title-div"> <h1 className="category-title">{category.categoryName} </h1> </div>
                </div>
                )                  
            })
        }
        </div>
    </div>
}
export default Landing ;