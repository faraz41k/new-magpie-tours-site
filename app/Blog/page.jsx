import BlogCard from "@/components/BlogCard";
import { getBlogPosts } from "@/sanity/sanity/sanity-utils";








const Blog = async ()=> {
  
 const Posts = await getBlogPosts() 
  const data  = Posts
  console.log(Posts);
  

  
  return (
    <div className=' self-stretch  flex flex-col mb-6'>
      {/* hero */}
      <div className=" ">
      <div className="hero min-h-[600px] sm:h-[350px] w-full bg-cover bg-center relative" style={{backgroundImage: 'url(/trek.jpg)'}}>
        <div className="hero-overlay  bg-opacity-60 py-5"></div>
          <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
              <div className="min-w-[400px] mx-auto  flex flex-col justify-center items-center py-16  text-center">
                <h3 className="font-poppins font-bold text-33xl">Our Blog</h3>
                
                <p className="font-poppins text-[20px]">Read Whats Happening here.</p>
              </div>
                
            </div>
          </div>
        </div>
      </div>  

      {/* mid */}
  <div className="max-container my-8 flex flex-col gap-6 py-10">

          

         {/*bottom  */}

          <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-mini-5 text-gray-700 font-body-regular-600">
            <div className="flex-1 shrink-0 flex flex-row flex-wrap items-start justify-center gap-[16px]">
              {
                data.map((post,ind)=>(
                  <BlogCard
                  name={post.title}
                  image={post.postimage1}
                  author={post.author}
                  url={post.url}
                  key={ind}
                  slug = {post.slug}
                  
                />
                ))
              }
              
              
              
            </div>
          </div>
      
    </div>    
    </div>
  );
};

export default Blog;
