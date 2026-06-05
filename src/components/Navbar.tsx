import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 flex items-center px-12 bg-white/30 backdrop-blur-lg border-b border-border-main transition-all duration-300">
      <div className="w-full max-w-[1240px] mx-auto flex items-center">
        <Link href="/" className="flex items-center text-decoration-none mr-auto">
          <Image src="/logo.png" alt="Ideal Tax" width={140} height={32} className="h-8 w-auto" />
        </Link>
        <ul className="hidden lg:flex items-center gap-0.5 list-none mx-9">
          <li>
            <Link href="#" className="text-[14px] font-[450] text-text2 no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:text-text-main hover:bg-[rgba(11,25,44,0.05)]">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[14px] font-[450] text-text2 no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:text-text-main hover:bg-[rgba(11,25,44,0.05)]">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[14px] font-[450] text-text2 no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:text-text-main hover:bg-[rgba(11,25,44,0.05)]">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[14px] font-[450] text-text2 no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:text-text-main hover:bg-[rgba(11,25,44,0.05)]">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[14px] font-[450] text-text2 no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:text-text-main hover:bg-[rgba(11,25,44,0.05)]">
              Careers
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[14px] font-[450] text-text2 no-underline px-3 py-1.5 rounded-[7px] transition-colors hover:text-text-main hover:bg-[rgba(11,25,44,0.05)]">
              FAQs
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <a href="tel:+18775182860" className="hidden sm:inline-flex btn btn-ghost">
            (877) 518-2860
          </a>
          <Link href="#" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
