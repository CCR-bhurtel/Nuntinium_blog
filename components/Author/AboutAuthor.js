import React from 'react';

function AboutAuthor() {
    return (
        <div class="profile flex flex-col justify-center items-center">
            <div class="mianwrappe flex flex-col md:flex-row md:px-[3rem] lg:md:px-[7.5rem] xl:lg:md:px-[10rem]">
                <div class="wraper flex flex-row justify-center">
                    <div class="image12 h-[10rem] w-[10rem] rounded-[50%] mb-2 mt-5"></div>
                </div>
                <div class="wraper flex flex-col justify-center items-center">
                    <span class="text-3xl bold">Arthur Black</span>
                    <span class="text-xs">@arthurblack</span>
                    <span class="px-5 my-2 text-center">
                        Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea.
                        Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt
                        quis.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AboutAuthor;
