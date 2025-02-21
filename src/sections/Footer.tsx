'use client';
import MyLogoImage from "@/assets/logo.svg";
import MyXLogo from "@/assets/social-x.svg";
import MyYoutubeLogo from "@/assets/social-youtube.svg";
import MyInstagramLogo from "@/assets/social-instagram.svg";
export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex gap-2 items-center lg:flex-1">
            <MyLogoImage className="w-6 h-6" />

            <div className="font-medium ">AI SEO 2025 SaaS</div>
          </div>

          <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition "
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition "
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition "
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition "
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition "
            >
              ChangeLog
            </a>
          </nav>

          <div className="flex lg:flex-1 gap-5 items-center lg:justify-end">
            <MyXLogo className="text-white/40 cursor-pointer hover:text-white transition" />
            <MyYoutubeLogo className="text-white/40 cursor-pointer hover:text-white transition" />
            <MyInstagramLogo className="text-white/40 cursor-pointer hover:text-white transition" />
          </div>
          
        </div>
      </div>
    </footer>
  );
};
