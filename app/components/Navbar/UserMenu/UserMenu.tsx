'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Avatar from '../../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import SocialIcons from './SocialIcons';
import DoubleButton from '../../SecondaryButton';

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [])
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-4">
        <div className="md:flex hidden items-center gap-4">
          <div className="social-responsive flex items-center gap-4 ml-4">
            <SocialIcons href="https://www.facebook.com" icon={FaFacebookF} ariaLabel="Facebook" />
            <SocialIcons href="https://www.instagram.com" icon={FaInstagram} ariaLabel="Instagram" />
            <SocialIcons href="https://www.linkedin.com" icon={FaLinkedinIn} ariaLabel="LinkedIn" />
            <SocialIcons href="https://www.youtube.com" icon={FaYoutube} ariaLabel="YouTube" />
          </div>
        </div>
        <div
          onClick={toggleOpen}
          className=" userMenu-responsive
            p-2 ml-8
            border-[1px]
            border-white
            text-white
            hidden
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            duration-300
          hover:border-customRed
          hover:bg-customRed">
            <AiOutlineMenu/>
            <div className='hidden'>
              <Avatar></Avatar>
            </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-1/3 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={loginModal.onOpen}
                label='Login'
              />
              <MenuItem
                onClick={registerModal.onOpen}
                label='Sign Up'
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;