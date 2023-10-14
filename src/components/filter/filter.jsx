import React, { useEffect, useState } from 'react';
import { ServiceCard } from '../imports';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

function FilterComp({ allServices, allTypes, allTypesWithChildren }) {
  const [ServicesList, setServicesList] = useState();
  const [type, setType] = useState('Gardening');
  const [cServices, setCServices] = useState();
  const { query } = useRouter();

  const handleTabs = (category) => {
    const filtedData = allServices.filter(
      (item) => item?.terms?.nodes[0].name === category
    );
    const childWithService = allTypesWithChildren.find(
      (c) => c.name === category
    );
    setCServices(childWithService);
    setServicesList(filtedData);
    setType(category);
  };

  useEffect(() => {
    const filtedData = allServices.filter(
      (item) => item.terms.nodes[0].name === type
    );
    setServicesList(filtedData);
  }, [type]);

  const handleSubServices = (subServiceName) => {
    const filtedData = allServices.filter(
      (item) => item?.terms?.nodes[0].name === subServiceName
    );
    setServicesList(filtedData);
    setCServices();
  };

  useEffect(() => {
    if (query.type === 'Waste Removal') {
      setType('Waste Removal');
    } else if (query.type === 'Gardening') {
      setType('Gardening');
    } else if (query.type === 'Landscaping') {
      setType('Landscaping');
    } else if (query.type === 'Fencing') {
      setType('Fencing');
    } else if (query.type === 'Tiling and Painting') {
      setType('Tiling and Painting');
    } else if (query.type === 'Pressure Washing') {
      setType('Pressure Washing');
    }
  }, [query]);

  return (
    <div className="bg-black py-10 w-full h-auto mt-10 pb-20 text-white ">
      <div className="container mx-auto flex  justify-center gap-2 sm:gap-6 items-center md:gap-16 text-center px-4">
        {allTypes?.map((c, i) => (
          <div
            className="flex flex-col items-center cursor-pointer"
            key={i}
            onClick={() => handleTabs(c.name)}
          >
            <img
              src={c?.servicesTypeInfo?.icon?.mediaItemUrl}
              alt=""
              className={`sm:w-14 sm:h-14 w-8 mb-2 h-8 ${
                c.name === 'Fencing' && 'invert sm:!w-16'
              }`}
            />
            <h4 className="text-xs sm:text-base">{c.name}</h4>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 px-3 container mx-auto lg:grid-cols-3 gap-10 mt-16 ">
        {ServicesList?.map((service, idx) => {
          return <ServiceCard data={service} key={idx} type={type} />;
        })}
      </div>
      {type === 'Pressure Washing' && (
        <div className="flex items-center justify-center mt-20 w-full">
          {' '}
          <Link
            href="https://professionalpowerwashing.co.uk"
            target="_blank"
            className="bg-white hover:scale-105 p-2 px-7 text-black"
          >
            Check availability and prices
          </Link>{' '}
        </div>
      )}
    </div>
  );
}

export default FilterComp;
