import BlogElement from "../blog_components/blogelement"

function Blog() {
    return (
        <div>
            <div className="blog-title items-center h-auto">
                <h1 className="text-green-700 text-7xl text-center mt-20"> Explore Recent Threads </h1>
            </div>
            <div>
                <h3 className="blog-title text-2xl mt-16">
                    <BlogElement />
                    <BlogElement />
                    <BlogElement />
                    <BlogElement />
                </h3>
            </div>
            <div className="blog-butt flex justify-center">
                <a href='/createpost'><button className="w-64 mt-12 h-16 text-white cursor-pointer outline-none 
                border-none text-xl text-center font-bold transition-all 
                duration-300 ease-linear relative bg-[#216b12] 
                rounded-[40px] hover:bg-[#268d2a]">
                    + Create a New Thread
                </button></a>
            </div>
            <div className="h-14"></div>
        </div>
    );
}

export default Blog;