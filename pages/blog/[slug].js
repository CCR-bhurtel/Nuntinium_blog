import React from 'react';
import AboutAuthor from '../../components/Author/AboutAuthor';

function BlogPage() {
    return (
        <>
            <div class="image max-w-[100vw] h-[25rem] mx-5 my-3 md:h-[35rem]"></div>
            <div class="wrp flex flex-col md:items-center">
                <section class="section-3 flex flex-col gap-3 w-[100vw] md:w-[70vw]">
                    <span class="text-4xl font-bold text-center leading-[3.5rem] m-3">
                        The World’s Most Dangerous Technology Ever Made.
                    </span>
                    <span class="flex flex-col gap-3 text-center text-gray-500">
                        <p>Ralph Hawkins . May 7, 2019 (10 mins read)</p>
                        <p>#technology #tech #career</p>
                    </span>
                    <span class="flex flex-col gap-6 m-5 text-xl">
                        <p>
                            Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. Aliquip consectetur
                            labore consectetur dolor exercitation est minim quis. Magna non irure qui ex est laborum
                            nulla excepteur qui. Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur
                            proident ex commodo irure est.
                        </p>
                        <p>
                            Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat
                            incididunt commodo et mollit aliqua non aute. Enim dolor eiusmod aliqua amet ipsum in enim
                            eiusmod. Quis exercitation sit velit duis.
                        </p>
                        <p>
                            Est Lorem labore consectetur minim sit eu eiusmod mollit velit. Consectetur voluptate ex
                            amet id eiusmod laborum irure. Aliquip ad qui id exercitation irure amet commodo nisi quis.
                            Occaecat minim incididunt eiusmod nostrud veniam quis culpa. Nisi ipsum et consequat id
                            deserunt excepteur. Cillum non pariatur culpa ut occaecat laboris eu. Ullamco ad Lorem et
                            elit laboris eu qui irure nulla qui culpa et. Cupidatat sunt ipsum proident aute
                            exercitation do tempor aliqua cupidatat quis non exercitation. Adipisicing do minim dolore
                            nulla mollit. Adipisicing incididunt irure ipsum et in esse ipsum elit tempor.
                        </p>
                        <p>
                            Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor qui ea ad quis. Enim
                            fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat.
                            Voluptate labore sunt duis eu deserunt. Occaecat do ut ut labore cillum enim dolore ad enim
                            enim id. Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt
                            occaecat. Laborum incididunt commodo ullamco proident quis.
                        </p>
                    </span>
                    <AboutAuthor />
                </section>
            </div>
        </>
    );
}

export default BlogPage;
