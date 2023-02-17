import React, { useState } from 'react';
import Featured from '../Featured';

function HomeHero() {
    const [blog, setBlog] = useState({
        title: ' World’s Most Dangerous Technology Ever Made.',
        author: 'Ralph Hawkins',
        dateCreated: 'May 7, 2019',
        meta: '10 mins read',
        content: ` Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea
        minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
        Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.`,
    });
    return (
        <section class="section-2 relative px-2">
            <div class="image max-w-[100vw] h-[25rem] md:h-[35rem]"></div>
            <Featured blog={blog} />
        </section>
    );
}

export default HomeHero;
