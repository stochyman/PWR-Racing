"use client";

import { AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Avatar from "../../Avatar";
import { useCallback, useState, useRef, useEffect } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import SocialIcons from "./SocialIcons";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current &&
      !(menuRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleMenuItemClick = useCallback(
    (path: string) => {
      router.push(path);
      setIsOpen(false);
    },
    [router]
  );

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-4">
        <div className="md:flex hidden items-center gap-4">
          <div className="social-responsive flex items-center gap-4 ml-4">
            <SocialIcons
              href="https://www.facebook.com"
              icon={FaFacebookF}
              ariaLabel="Facebook"
            />
            <SocialIcons
              href="https://www.instagram.com"
              icon={FaInstagram}
              ariaLabel="Instagram"
            />
            <SocialIcons
              href="https://www.linkedin.com"
              icon={FaLinkedinIn}
              ariaLabel="LinkedIn"
            />
            <SocialIcons
              href="https://www.youtube.com"
              icon={FaYoutube}
              ariaLabel="YouTube"
            />
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
          hover:bg-customRed"
        >
          <AiOutlineMenu />
          <div className="hidden">
            <Avatar></Avatar>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md  bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => handleMenuItemClick(`/`)} label="Home" />
            <MenuItem
              onClick={() => handleMenuItemClick(`/bolid`)}
              label="Bolid"
            />
            <MenuItem
              onClick={() => handleMenuItemClick(`/team`)}
              label="Zespoł"
            />
            <MenuItem
              onClick={() => handleMenuItemClick(`/about`)}
              label="O nas"
            />
            <MenuItem
              onClick={() => handleMenuItemClick(`/partners`)}
              label="Partnerzy"
            />
            <MenuItem
              onClick={() => handleMenuItemClick(`/news`)}
              label="Aktualności"
            />
            <MenuItem
              onClick={() => handleMenuItemClick(`/kontakt`)}
              label="Kontakt"
            />
            <div className="w-full h-[1px] bg-black"></div>
            <div className="social-responsive flex items-center gap-4 my-2 mx-3 ">
              <SocialIcons
                black
                href="https://www.facebook.com"
                icon={FaFacebookF}
                ariaLabel="Facebook"
              />
              <SocialIcons
                black
                href="https://www.instagram.com"
                icon={FaInstagram}
                ariaLabel="Instagram"
              />
              <SocialIcons
                black
                href="https://www.linkedin.com"
                icon={FaLinkedinIn}
                ariaLabel="LinkedIn"
              />
              <SocialIcons
                black
                href="https://www.youtube.com"
                icon={FaYoutube}
                ariaLabel="YouTube"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
