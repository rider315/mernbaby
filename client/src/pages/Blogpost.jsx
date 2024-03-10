import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/client";
import {PortableText} from "@portabletext/react";
import { Profile } from "../components/Profile";

export const Blogpost = () => {
    const [blogpost, setBlogpost] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        client
            .fetch(
                `*[slug.current == "${slug}"] {
          title,
          slug,
          body,
          publishedAt,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt,
          },
          "name":author->name
        } `
            )
            .then((data) => {
                setBlogpost(data[0]);

            })
            .catch(console.error);
    }, [slug]);


    useEffect(()=>{
        document.title=`Reading | ${blogpost.title}`
    },[blogpost.title])
    return (
       <>
            {blogpost && <section>
                {blogpost.mainImage && <img src={blogpost.mainImage.asset.url} alt={blogpost.mainImage.alt} />}
                <h1>{blogpost.title}</h1>
                <p className="text-sm">
                    By {blogpost.name} {blogpost.publishedAt && <>
                        &middot;
                    {format(new Date(blogpost.publishedAt), "dd MMMM yyyy")}</>}
                </p>
                <PortableText value={blogpost.body}/>
            </section>}
            <div className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end">
                <Link to="/blog" className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto">
                    Read all blog posts
                </Link>
            </div>
            <Profile/>
           
        </>

    )

}

// import { useState, useEffect } from "react"

// import client from "../client"
// import BlockContent from "@sanity/block-content-to-react"

// export const Blogpost=()=> {
//   const [singlePost, setSinglePost] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const { slug } = useParams()

//   useEffect(() => {
//     client
//       .fetch(
//         `*[slug.current == "${slug}"] {
//         title,
//         body,
//         mainImage {
//           asset -> {
//             _id,
//             url
//           },
//           alt
//         }
//       }`
//       )
//       .then((data) => setSinglePost(data[0]))
//     setIsLoading(false)
//   }, [slug])

//   return (
//     <>
//       {isLoading ? (
//         <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
//           Loading...
//         </h1>
//       ) : (
//         <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
//           <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-8xl text-center mt-5">
//             {singlePost.title}
//           </h1>
//           {singlePost.mainImage && singlePost.mainImage.asset && (
//             <img
//               src={singlePost.mainImage.asset.url}
//               alt={singlePost.title}
//               title={singlePost.title}
//               className="blog__image rounded-t"
//             />
//           )}
//           <p>By Thomas Sankara</p>

//           <div className="block__content">
//             <BlockContent
//               blocks={singlePost.body}
//               projectId="2hp9gld0"
//               dataset="production"
//             />
//           </div>

//           <button>
//             <Link
//               to="/blog"
//               className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
//             >
//               Read more articles
//             </Link>
//           </button>
//         </section>
//       )}
//     </>
//   )
// }

