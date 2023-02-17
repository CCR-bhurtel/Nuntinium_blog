import React from 'react';
import AboutAuthor from '../../components/Author/AboutAuthor';
import BlogList from '../../components/Blog/BlogList';
import Featured from '../../components/Featured';
import NewFeatured from '../../components/Featured/NewFeatured';

function AuthorPage() {
    return (
        <div class="wraper md:flex md:w-[100vw] md:justify-center md:overflow-hidden">
            <div class="new md:w-[75%] md:overflow-hidden">
                <section class="section flex flex-col max-w-[100vw] px-3 py-[.5rem] md:items-center md:mb-[-2rem]">
                    <AboutAuthor />
                </section>
                <section class="section-5 relative p-2 pb-[2rem] mt-4">
                    <NewFeatured />
                </section>
                <section class="section-4 flex flex-col max-w-[100vw] px-3 md:items-center">
                    <BlogList />
                </section>
            </div>
        </div>
    );
}

export default AuthorPage;
