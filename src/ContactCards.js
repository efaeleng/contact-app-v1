import Flippy, { FrontSide, BackSide } from 'react-flippy';

const ContactCards = ({ contactList }) => {
  return (
    <>
      {contactList?.map((contact, index) => (
        <Flippy
          flipOnHover={true}
          flipOnClick={false}
          flipDirection="horizontal"
          style={{ height: '320px', boxShadow: 'none', padding: 'none' }}
        >
          <FrontSide
            style={{ height: '320px', boxShadow: 'none', padding: 'none' }}
          >
            <figure
              className=" bg-white text-white h-80 rounded-lg shadow-md "
              key={index}
            >
              <img
                alt="user"
                className="w-32 h-32  mx-auto mt-4"
                src={contact.avatar}
              />
              <figcaption className="text-center mt-5 p-5">
                <p className="text-gray-800 font-semibold text-xl mb-2">
                  {contact.first_name} {contact.last_name}
                </p>

                <p className="text-gray-500">
                  <span className="font-semibold text-pink-900">phone: </span>
                  {contact.phone_number}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-pink-900">city: </span>
                  {contact.address.city}
                </p>
              </figcaption>
            </figure>
          </FrontSide>
          <BackSide
            style={{ height: '320px', boxShadow: 'none', padding: 'none' }}
          >
            <figure
              className=" bg-white text-white h-80 rounded-lg shadow-md "
              key={index}
            >
              <figcaption className="text-center mt-4 p-5">
                <p className="text-gray-700 font-semibold text-xl mb-2 ">
                  {contact.first_name} {contact.last_name}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-pink-900">email: </span>
                  {contact.email}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-pink-900">phone: </span>
                  {contact.phone_number}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold text-pink-900">city: </span>
                  {contact.address.city}
                </p>
              </figcaption>
            </figure>
          </BackSide>
        </Flippy>
      ))}
    </>
  );
};

export default ContactCards;
