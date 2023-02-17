import Script from 'next/script';
import BlogList from '../components/Blog/BlogList';
import BlogListWithTags from '../components/Blog/BlogListWithTags';
import NewFeatured from '../components/Featured/NewFeatured';
import HomeHero from '../components/Hero';
export default function Home() {
    return (
        <div>
            <HomeHero />
            <div>
                <section class="section-3 flex flex-col max-w-[100vw] px-2 my-[1rem] md:my-[2rem] items-center">
                    <samp class="flex justify-center text-2xl mb-[.2rem] md:text-4xl md:mb-[.5rem]">
                        Editor’s Picks
                    </samp>
                    <div class="w-[8rem] md:w-[13rem] h-[5px] bg-black rounded-sm"></div>
                </section>
                <BlogList displayFeatured={true} />
                <NewFeatured />
                <BlogListWithTags />
            </div>
            <Script src="https://kit.fontawesome.com/b704955f26.js" crossorigin="anonymous" />
        </div>
    );
}
