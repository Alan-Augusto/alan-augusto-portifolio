'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardFooter, CardContent } from '@/components/ui/card';
import { posts } from '@/data/blog/blog.data';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const BlogPage = () => {
    const router = useRouter();
    const { toast } = useToast()

    const handleShare = async (url: string) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Confira este post!',
                    url,
                });
                toast({
                    title: 'Sucesso',
                    description: 'Post compartilhado com sucesso',
                });
            } catch (error) {
                toast({
                    title: 'Erro',
                    description: 'Erro ao compartilhar',
                });
                console.error('Erro ao compartilhar:', error);
            }
        } else {
            navigator.clipboard.writeText(url);
            toast({
                title: 'URL copiada',
                description: 'URL copiada para a área de transferência',
            });
        }
    };
    
    return (
        <div>
            <main className="flex flex-col items-center p-0 w-full gap-5">
                <Header />
                <div className='mt-10 pt-10 text-center'>
                    <h2 className='text-3xl font-bold'>
                        Veja um pouco do que eu ando falando por aí na internet!
                    </h2>
                    <p className='text-lg'>
                        Aqui você encontra todos os meus &quot;artigos&quot;. Seja de tecnologia, inovação, desabafo, etc.
                    </p>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {posts.map((post) => (
                        <Card key={post.id} className="shadow-lg flex flex-col h-full">
                            <CardHeader>
                                <h2>{post.title}</h2>
                            </CardHeader>
                            <CardContent>
                                <p>{post.content}</p>
                            </CardContent>
                            <CardFooter className='gap-2'>
                                <Button variant={"outline"} onClick={() => handleShare(`${window.location.origin}/blog/${post.file}`)}>Compartilhe</Button>
                                <Button onClick={() => router.push(`/blog/${post.file}`)}>Leia</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPage;
