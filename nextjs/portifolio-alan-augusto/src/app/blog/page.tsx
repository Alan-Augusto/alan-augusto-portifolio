import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardFooter, CardContent } from '@/components/ui/card';
import { posts } from '@/data/blog/blog.data';
import { FC } from 'react';

const BlogPage: FC = () => {

    return (
        <div>
        <main className="flex flex-col items-center p-0 w-full">
          <Header/>
          <div className='mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <h1>Blog</h1>
                {posts.map((post) => (
                    <Card key={post.id} className="shadow-lg flex flex-col h-full">
                        <CardHeader>
                            <h2>{post.title}</h2>
                        </CardHeader>
                        <CardContent>
                            <p>{post.content}</p>
                        </CardContent>
                        <CardFooter>
                            <Button>Read More</Button>
                        </CardFooter>
                    </Card>
                ))}

          </div>

        </main>
        <Footer/>
      </div>

    );
};

export default BlogPage;