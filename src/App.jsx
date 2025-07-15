import React, { useState, useEffect } from "react";
import { Home } from "@/components/ui/Home";
import { Nav } from "@/components/ui/Nav";
import { Icon } from "@/components/ui/Icon";
import { Skills } from "@/components/ui/Skills";
import { Projects } from "@/components/ui/Projects";
import { About } from "@/components/ui/About";
import { Contact } from "@/components/ui/Contact";
import { Meteors } from "@/components/magicui/meteors";

import {
    AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";


function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000); 
    return () => clearTimeout(timer);
  }, []);


// Loader content (Terminal-style)
if (loading) {
  return (
    <div
     
      className="flex items-center justify-center h-[100vh] bg-black text-white px-6"
    >
      <Terminal className="text-green-400 text-sm bg-black leading-relaxed font-mono max-w-2xl w-full"
     >
        <TypingAnimation delay={80}>
          npm run dev
        </TypingAnimation>
        <AnimatedSpan delay={1200}>
          Starting dev server...{"\n"}
          &gt; Local: http://localhost:3000{"\n"}
        </AnimatedSpan>

        <br />
        <TypingAnimation delay={1200}>
          pnpm dlx shadcn@latest init
        </TypingAnimation>
        <AnimatedSpan delay={2500}>
          ✔ Installing terminal component...{"\n"}
        </AnimatedSpan>
        <br />
        <TypingAnimation delay={2800}>
          echo 'Initializing Mr. Pawan Portfolio...'
        </TypingAnimation>
        <AnimatedSpan delay={4200}>
          Initializing Mr. Pawan Portfolio...
        </AnimatedSpan>

        <br />
        <TypingAnimation delay={5000}>
          Portfolio ready 🚀
        </TypingAnimation>
        <AnimatedSpan delay={5500}>
          🎯 Portfolio loaded successfully{"\n"}
          🔥 Ready to showcase amazing work!
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}


  // Main app content
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900">
      {/* Background Meteors */}
      <div className="absolute inset-0 z-0">
        <Meteors />
      </div>

      {/* Main portfolio content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <Home />
        <Icon />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <footer className="mt-15">
          <div className="text-center text-gray-400 py-4">
            &copy; {new Date().getFullYear()} Mr.Pawan. All rights reserved.
          </div>
        </footer>
      </div>

      {/* Fixed Bottom Navigation */}
      <Nav />
    </div>
  );
}

export default App;
