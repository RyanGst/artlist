import React from "react";

// import { Container } from './styles';

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-900 pin-b">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
<<<<<<< HEAD
          © 2021 Desenvolvido por alunos da Fatec Ourinhos —
=======
          © 2021 Desenvolvido por alunos da Fatec Ourinhos — <br/>
>>>>>>> changes
          <a
            href="https://github.com/RyanGst"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ryangst
          </a>
<<<<<<< HEAD
=======
          {" "}
          <a
            href="https://github.com/pedro-afk"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @pedrogiamarco
          </a>
          {" "}
          <a
            href="https://github.com/Nic-Dev-97"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @nicolasbonfim
          </a>
          {" "}
          <a
            href="https://github.com/Artspessoto"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @arthur_spessoto
          </a>
          {" "}
          <a
            href="https://github.com/Szznorlax"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Szznorlax
          </a>

>>>>>>> changes
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/groups/FATECOURINHOS/"
            className="text-gray-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/explore/locations/249599446/brazil/ourinhos/fatec-ourinhos/"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
