import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { Button } from '.';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">

      <div className=" w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className="dark:text-white text-nft-nft-black-1 font-semibold text-lg ml-1">CryptoKet</p>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">
            Get the latest news
          </p>
          <div className="flexBetween md:w-full minmd:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:nft-black-2 border-nft-gray-2 rounded-md" >
            s
          </div>
        </div>
      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">

          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">CryptoKet, Inc. All rights reserved</p>
          <div className="flex flex-row sm-mt-4">
            {[images.instagram, images.twitter, images.telegram, images.discord].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={index}>
                <Image
                  src={image}
                  objectFit="contain"
                  width={24}
                  height={24}
                  alt="social"
                  className={theme === 'light' && 'filter invert'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
