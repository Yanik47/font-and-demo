import React from 'react';

function Work({ work }) {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center w-full md:w-3/5 bg-white shadow-lg rounded-lg h-full mr-5a ml-1">
            <div className="flex-grow flex flex-col justify-between w-full h-full md:w-1/3 p-4 pb-2 md:p-4 md:pl-6">
                <p className="pt-0 pb-16 text-left font-semibold text-xl">
                    {work.title}
                </p>
                <p className="pt-0 md:pb-5 text-left text-lg">
                    {work.description}
                </p>
            </div>
            <div className="flex-grow w-full h-full md:w-2/3 p-2 md:p-10">
                <p className="font-bold text-xl mb-2">Partners</p>
                <div className="grid grid-cols-2">
                    {work.partners.map((partner) => (
                        <div key={partner.WorkID} className="flex flex-col bg-blue-100 p-2 m-2 md:m-3 md:p-3 md:py-5 rounded-lg shadow-lg items-center hover:motion-scale-out-[1.15] motion-duration-[0.88s]/scale">
                            <img src={partner.Logo} alt={`Logo of ${partner.WorkID}`} className="w-24 h-24 object-contain p-4" />
                            <p className='font-semibold'>
                                {partner.Name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;
