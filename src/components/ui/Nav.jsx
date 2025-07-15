import React from 'react'
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home, LinkedinIcon, GithubIcon, TwitterIcon, MailIcon} from "lucide-react";

function Nav() {
  return (
    <div className="fixed bottom-12 w-full flex justify-center text-white z-50">
      <Dock className="gap-8">
        <DockIcon>
          <a href="#home" className="block">
            <Home className="w-8 h-8" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://github.com/Ramraj110" target="_blank" rel="noopener noreferrer" className="block">
            <GithubIcon className="w-8 h-8" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://x.com/PawanRajaryan2" target="_blank" rel="noopener noreferrer" className="block">
            <TwitterIcon className="w-8 h-8" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="mailto:pawansham578@gmail.com" className="block">
            <MailIcon className="w-8 h-8" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://www.linkedin.com/in/pawan-kumar-b1427a244/" target="_blank" rel="noopener noreferrer" className="block">
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  )
}
export { Nav }