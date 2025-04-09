import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InstagramSection = () => {
  const instagramPosts = [
    {
      id: 'post1',
      image: '/images/instagram-1.jpeg',
      username: 'bdanielle1285',
      caption: "My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!"
    },
    {
      id: 'post2',
      image: '/images/instagram-2.jpeg',
      username: 'lilpepthekelpie',
      caption: "I'm helping out #masterchef #bestboy"
    },
    {
      id: 'post3',
      image: '/images/instagram-3.jpeg',
      username: 'mandi14eid',
      caption: "Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!"
    },
    {
      id: 'post4',
      image: '/images/instagram-4.jpeg',
      username: 'our_lovely_stride',
      caption: "We had a cooking class yesterday and we had such an amazing time. They had such a great time working as a team and I can't wait for our weekly cooking class"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-hf">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          Cook it. Love it. Tag it #NomNomBoxPics
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Follow us on Instagram @nomnombox
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src={post.image}
                  alt={`Instagram post by ${post.username}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#323623] mb-2">{post.username}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 py-12 bg-background rounded-lg text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Enjoy hassle-free home-cooked meals with NomNomBox
          </h2>
          <p className="text-center text-gray-800 mb-8 max-w-xl mx-auto">
            Get delicious Indian recipes delivered right to your door
          </p>
          <Link href="/plans" className="btn-primary">
            Get Pricing & Plans
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
