// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import { Newsletter } from "../components/Newsletter";
// import { Profile } from "../components/Profile";
// import { client } from "../lib/client";
// import { format } from "date-fns";

// export const Homeblog = () => {
//     const [stories, setStories] = useState([]);
//     useEffect(() => {
//         client
//           .fetch(
//             `*[_type == "post"] {
//             title,
//             slug,
//             body,
//             publishedAt,
//             mainImage {
//               asset -> {
//                 _id,
//                 url
//               },
//               alt,
//             },
//             "name":author->name,

//           }| order(publishedAt desc)`
//           )
//           .then((data) =>{

//               setStories(data)
//               console.log(data)

//             } )
//             .catch(console.error);

//       },[])


//     return (
//         <>
//            {!stories ? <h2>Loading...</h2>: {stories[0] && <Link to={`/blog/${stories[0].slug.current}`}>
//                 <section className="max-w-7wl mx-auto my-20 px-5">
//                 <article className="relative">

//                     <img src="https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-96 w-full object-cover rounded-2xl" alt="scene" />
//                     <div className="absolute bottom-8 left-8">
//                         <h1 className="h-96 w-full lg:text-5xl mb-6 text-white">{stories[0].title}</h1>
//                         <p className="text-slate-100 mb-8 md:w-1/2">{stories[0].body[0].children[0].text}</p>
//                         <button className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto">Read More</button>
//                     </div>

//                 </article>
//             </section>
//             </Link>}}
//             <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto-px-5 mb-10">
//                 <article className=" border border-slate-400 rounded-lg overflow-hidden hover:bg-slate transition-all duration-200">
//                     <img src="https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ok" />

//                     <div className="p-4">
//                         <p className="text-sm">By Gaurav Chaudhary &middot; 02 October 2022</p>
//                         <h2 className="text-xl mb-2">Document Title</h2>
//                         <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero recusandae, dolorem incidunt quo facere autem, totam asperiores, ducimus explicabo natus. Doloremque, ut eveniet? Accusantium placeat natus esse mollitia voluptatibus.</p>
//                     </div>
//                 </article>
//                 <article className=" border border-slate-400 rounded-lg overflow-hidden hover:bg-slate transition-all duration-200">
//                     <img src="https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ok" />

//                     <div className="p-4">
//                         <p className="text-sm">By Gaurav Chaudhary &middot; 02 October 2022</p>
//                         <h2 className="text-xl mb-2">Document Title</h2>
//                         <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero recusandae, dolorem incidunt quo facere autem, totam asperiores, ducimus explicabo natus. Doloremque, ut eveniet? Accusantium placeat natus esse mollitia voluptatibus.</p>
//                     </div>
//                 </article>
//             </section>
//             <div className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end">

//                 <button className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto">Read all blog post</button>
//             </div>
//             <Newsletter />
//             <Profile />

//         </>
//     );
// };

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { Profile } from "../components/Profile";
import { client } from "../lib/client";
import { format } from "date-fns";

export const Homeblog = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "post"] {
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
        }| order(publishedAt desc)`
            )
            .then((data) => {
                setStories(data.slice(0,3));
               
            })
            .catch(console.error);
    }, []);

    return (
        <>
            {!stories.length ? (
                <h2>Loading...</h2>
            ) : (
                <Link to={`/blog/${stories[0].slug.current}`}>
                    <section className="max-w-7xl mx-auto my-20 px-5">
                        <article className="relative">
                            {stories[0].mainImage && <img
                                src={stories[0].mainImage.asset.url}
                                className="h-96 w-full object-cover rounded-2xl"
                                alt={stories[0].mainImage.alt}
                            />}
                            <div className="absolute bottom-8 left-8">
                                <h1 className="h-96 w-full lg:text-5xl mb-6 text-white capitalize">
                                    {stories[0].title}
                                </h1>
                                <p className="text-slate-100 mb-8 md:w-1/2">
                                    {`${stories[0].body[0].children[0].text.substring(0, 200)}...`}
                                </p>
                                <Link to={`/blog/${stories[0].slug.current}`} className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto">
                                    Read More
                                </Link>
                            </div>
                        </article>
                    </section>
                </Link>
            )}
            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10">
                {stories.map((story) => (
                    <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
                        <article

                            className="border border-slate-400 rounded-lg overflow-hidden hover:bg-slate transition-all duration-200"
                        >
                            {story.mainImage && (
                                <img
                                    src={story.mainImage.asset.url}
                                    alt={story.mainImage.alt}
                                    loading="lazy"
                                />
                            )}


                            <div className="p-4">
                                <p className="text-sm">
                                    By {story.name} &middot;
                                    {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                                </p>
                                <h2 className="text-xl mb-2">{story.title}</h2>
                                <p className="text-sm leading-relaxed">
                                    {/* {`${story.body[0].children[0].text.substring(0, 200)}...`} */}
                                    {`${story.body[0].children[0].text.substring(0, 200)}...`}
                                </p>
                            </div>
                        </article>
                    </Link>

                ))}

            </section>
            <div className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end">
                <Link to="/blog" className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto">
                    Read all blog posts
                </Link>
            </div>
            <Newsletter />
            <Profile />
        </>
    );
};
