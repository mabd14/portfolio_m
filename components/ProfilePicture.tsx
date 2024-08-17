import Image from 'next/image';
import mahamed_profile from '../public/images/mahamed_profile.png'


const ProfilePicture = () => (
  <Image className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:scale-110 rounded-xl"
    src={mahamed_profile} // Route of the image file
    height={500} // Desired size with correct aspect ratio
    width={500} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default ProfilePicture