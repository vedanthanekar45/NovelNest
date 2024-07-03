function Blog() {
    return (
        <div>
            <div className="blog-title items-center h-auto">
                <h1 className="text-green-700 text-7xl text-center mt-20"> Explore Blog Posts </h1>
            </div>
            <div className="blog-tile">
                <h3 className="blog-title text-green-700 text-3xl mt-16 text-center">
                    There are currently no blog posts to show. Get started by adding one!
                </h3>
            </div>
            <div className="blog-butt flex justify-center">
                <button className="w-64 h-16 mt-10 mb- text-xl text-white text-center border-none 
                rounded-[30px] flex items-center justify-center gap-2 bg-transparent cursor-pointer 
                relative bg-gradient-to-r bg-[#11a90e] transition-all duration-300 
                tracking-[1.4px] hover:scale-95 hover:duration-300 before:content-[''] before:absolute 
                before:w-[80%] before:h-[30%] before:bg-gradient-to-r before:blur-[10px] before:bottom-[-3px] before:z-[-1] before:duration-300 
                hover:before:bottom-[-1px] hover:before:blur-[5px] hover:before:duration-300">
                    Add a new blog post
                </button>
            </div>
            <div className="h-14"></div>
        </div>
    );
}

export default Blog;