import { Container, Header } from '@/components/imports';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import mainImage from '../../../public/images/contact.png';
import { IoIosArrowDown } from 'react-icons/io';
import { useForm, Controller } from 'react-hook-form';
import { servicePoint } from '@/const/formPoints';

const ContactUs = () => {
  const [services, setServices] = useState('');
  const [servicesPoint, setServicesPoint] = useState('');
  const [selectedServicesPoint, setSelectedServicesPoint] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('Choose an image')

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const inputFile = watch('file');

  const onSubmit = async (data) => {
    setLoading(true);
    data.servicesType = selectedServicesPoint;
    const file = data.file[0]

    const CLOUDINARY_CLOUD_NAME = "drokpzsz7"
    const UPLOAD_PRESET = "siqj1van"

    const Imgdata = new FormData();
    Imgdata.append("file", file);
    Imgdata.append(
      "upload_preset",
      UPLOAD_PRESET
    );
    Imgdata.append("cloud_name", CLOUDINARY_CLOUD_NAME);
    Imgdata.append("folder", "HMGarden");
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: Imgdata,
        }
      );
      const res = await response.json();
      data.file = {
        url: res.url,
        name: `${res.original_filename}.${res.format}`
      }
      SendMail()
    } catch (error) {
      console.log("🚀 ~ file: UploadImage.tsx:32 ~ handleImageChange ~ error:", error)
    }


    function SendMail(){
      fetch('/api/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
          alert('Message Successfully send.!');
          reset();
          setSelectedServicesPoint([]);
          setServicesPoint([]);
          setLoading(false);
        }
      });
    }
  };

  useEffect(() => {
    if (services in servicePoint) {
      const landscapingServices = servicePoint[services];
      setServicesPoint(landscapingServices);
    } else {
      console.log('Landscaping not found in the servicePoint object.');
    }
  }, [services]);

  const handleValueChange = (e) => {
    const isExist = selectedServicesPoint.find((i) => i === e.target.value);
    if (isExist) {
      const removeItemFromArray = selectedServicesPoint.filter(
        (i) => i !== e.target.value
      );
      return setSelectedServicesPoint(removeItemFromArray);
    }
    setSelectedServicesPoint([...selectedServicesPoint, e.target.value]);
  };

  return (
    <>
      <Header white />
      <main
        className="relative -mt-[58px] w-full bg-no-repeat bg-center bg-cover py-28"
        style={{ backgroundImage: `url(${mainImage.src})` }}
      >
        {/* overlay  */}
        <div className="absolute inset-0 bg-black/50" />
        <Container className="flex flex-col justify-center text-white h-full z-10 relative items-center">
          <h6 className="uppercase font-medium text-2xl max-w-[600px] md:text-4xl text-center">
            book a service for your home, office or garden.
          </h6>
          <p className="max-w-[900px] mt-4 text-center md:text-lg font-light">
            in less then 30 mints
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid bg-black/60 md:grid-cols-2 w-full lg:px-20 mt-10 py-16 rounded-3xl gap-3 md:gap-12"
          >
            <div>
              <div className="flex flex-col mt-3">
                <label className="capitalize text-sm">
                  What kind of property is it?
                </label>
                <div className="grid grid-cols gap-3">
                  <select
                    {...register('property_type')}
                    className="p-2 mt-1 appearance-none text-black placeholder:text-gray-400 rounded-sm px-4 _select w-full font-light  outline-none"
                  >
                    <option value="residential">Residential</option>
                    <option value="public">Public</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <label className="capitalize text-sm">
                  What Kind of services do you need? *
                </label>
                <div className="relative">
                  <select
                    {...register('services', { required: true })}
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    className="p-2 mt-1 appearance-none rounded-sm px-4 _select w-full font-light text-black placeholder:text-gray-400 outline-none"
                  >
                    <option value="" disabled>
                      OUR SERVICES
                    </option>
                    <option value="Gardening">Gardening</option>
                    <option value="Landscaping">Landscaping</option>
                    <option value="Fencing">Fencing</option>
                    <option value="Waste Removal">Waste Removal</option>
                    <option value="Tiling or Painting">
                      Tiling or Painting
                    </option>
                    <option value="Pressure Washing">Pressure Washing</option>

                  </select>
                  <IoIosArrowDown className="text-2xl absolute right-3 top-[13px] text-black" />
                </div>
              </div>

              {servicesPoint.length > 0 && (
                <div className="flex flex-wrap my-4 gap-4">
                  {servicesPoint.map((item, id) => (
                    <div className="flex items-center mr-4" key={id}>
                      <input
                        id={item}
                        type="checkbox"
                        name={item}
                        value={item}
                        onChange={(e) => handleValueChange(e)}
                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label for={item} className="capitalize pl-2 text-sm">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-col mt-3">
                <label className="capitalize text-sm">
                  How is the access to the Garden/Property?
                </label>
                <div className="grid grid-cols gap-3">
                  <select
                    {...register('property_access')}
                    className="p-2 mt-1 appearance-none rounded-sm px-4 _select w-full font-light text-black placeholder:text-gray-400 outline-none"
                  >
                    <option value="External Access">External Access</option>
                    <option value="Through House">Through House</option>
                    <option value="Through Garage">Through Garage</option>
                  </select>
                </div>
              </div>

              <div className="mt-3">
                <label className="capitalize text-sm">
                  When would you like the work to begin?
                </label>
                <div className="relative">
                  <select
                    {...register('workToBegin')}
                    className="p-2 mt-1 appearance-none rounded-sm px-4 _select w-full font-light text-black placeholder:text-gray-400 outline-none"
                  >
                    <option value="I am Flexible">I am Flexible</option>
                    <option value="As Soon as Possible">
                      As Soon as Possible
                    </option>
                    <option value="In the next few days">
                      In the next few days
                    </option>
                    <option value="In the next few weeks">
                      In the next few weeks
                    </option>
                  </select>
                  <IoIosArrowDown className="text-2xl absolute right-3 top-[13px] text-black" />
                </div>
              </div>
              <div className="mt-3">
                <label className="capitalize text-sm ">
                  Please describe the job you would like to be done in a few
                  words.{' '} *
                </label>
                <textarea
                  {...register('describe_job', { required: true })}
                  className="p-2 h-[60px] mt-1 rounded-sm px-4 w-full placeholder:font-light text-gray-600 outline-none"
                  rows={6}
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <div className="w-full mb-6">
                <div className="flex flex-col mt-3">
                  <label className="capitalize text-sm">
                    First and Last Name
                  </label>
                  <input
                    type="text"
                    {...register('full_name', { required: true })}
                    className="p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label className="capitalize text-sm">Mobile No</label>
                  <input
                    type="text"
                    {...register('mobile', { required: true })}
                    className="p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none"
                    placeholder="Enter your Mobile Number"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label className="capitalize text-sm">E-mail</label>
                  <input
                    type="text"
                    {...register('email', { required: true })}
                    className="p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none"
                    placeholder="Enter your E-mail"
                  />
                </div>
                <div className="mt-3">
                  <label className="capitalize text-sm">
                    Job address ( Nr, Street, Post Code){' '}
                  </label>
                  <input
                    type="text"
                    {...register('address', { required: true })}
                    className="p-2 mt-1 rounded-sm px-4 w-full placeholder:font-light text-gray-600 outline-none"
                    placeholder="Enter Nr, Street"
                  />
                </div>

                <div className="mt-3">
                  <label className="capitalize text-sm">
                    pictures to give us a better idea{' '}
                  </label>
                  <div className="flex items-center justify-center mt-1">
                    <label className="relative bg-white rounded-sm hover:shadow-lg p-2 px-4 w-full cursor-pointer">
                      <span className="font-light text-black placeholder:text-gray-400">
                        { inputFile?.length > 0 ? inputFile[0]?.name : fileName}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        {...register('file')}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </label>
                  </div>
                  <p className="text-end text-xs mt-1 font-light w-full">
                    Optional
                  </p>
                </div>
              </div>
              {loading ? (
                <input
                  type="button"
                  className={`border hover:bg-black mt-10 md:mt-0 cursor-pointer hover:text-white p-1.5 px-8 border-white bg-white text-black `}
                  value="Email Sending..."
                />
              ) : (
                <input
                  type="submit"
                  className={`border hover:bg-black mt-10 md:mt-0 cursor-pointer hover:text-white p-1.5 px-8 border-white bg-white text-black `}
                  value={`Submit`}
                />
              )}
            </div>
          </form>
        </Container>
      </main>
    </>
  );
};

export default ContactUs;
