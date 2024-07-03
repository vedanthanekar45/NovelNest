function Blog() {
    return (
        <div>
            <div className="blog-title items-center h-auto">
                <h1 className="text-green-700 text-7xl text-center mt-20"> Explore Blog Posts </h1>
            </div>
            <div className="blog-tile">
                <h3 className="blog-title text-2xl mt-20 text-center">
                    There are currently no blog posts to show. Get started by adding one!
                </h3>
            </div>
            <div className="blog-butt flex justify-center">
                <button className="w-48 mt-12 h-16 text-white cursor-pointer outline-none 
                border-none text-base text-center font-bold transition-all 
                duration-300 ease-linear relative bg-[#216b12] 
                rounded-[40px] hover:bg-[#268d2a]">
                    Add a new blog post
                </button>
            </div>
            <div className="h-14"></div>
        </div>
    );
}

export default Blog;