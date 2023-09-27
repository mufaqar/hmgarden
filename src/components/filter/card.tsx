

import ServiceCard from '../card/service.card';

function Card() {
  // Create an array of service data objects
  const serviceDataArray = [
    {
      title: 'Tree Surgery',
      image: '/images/Mask group.png',
    },
    {
      title: 'Garden Clearance',
      image: '/images/Mask group2.png',
    },
    {
      title: 'Garden Maintenance',
      image: '/images/Mask group1.png',
    },
    {
      title: 'Lawn Mowing',
      image: '/images/Lawn Mowing medium.png',
    },
    {
      title: 'Planting',
      image: '/images/Planting medium.png',
    },
    {
      title: 'Weeds Control',
      image: '/images/weeds control.png',
    },
  ];

  return (
    <div className='container mx-auto mt-14 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-5 px-4  lg:w-[1100px] w-full'>
      {serviceDataArray.map((serviceData, index) => (
        <ServiceCard key={index} data={serviceData} />
      ))}
      {/* Other content */}
    </div>
  );
}

export default Card;

