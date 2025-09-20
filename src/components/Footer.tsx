import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="flex justify-center pb-4 max-md:px-5 max-md:pt-8">
      <div className="bg-white px-5 py-2 rounded-lg flex justify-between flex-wrap max-md:gap-2 max-md:justify-center max-md:text-sm w-full max-w-4xl items-center shadow-md">
        <p className="text-gray-800 font-medium">
          &copy; 2025 CutLink. Creado por Busid.
        </p>
        <ul className="flex gap-4 items-center text-sm">
          <li>
            <a
              href="https://github.com/Busid1"
              target="_blank"
              className="hover:underline"
            >
              <FontAwesomeIcon icon={faGithub} className="size-5 max-md:size-4 text-black" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/busid/"
              target="_blank"
              className="hover:underline"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="size-5 max-md:size-4 text-blue-600"
              />
            </a>
          </li>
          <li>
            <a
              href="https://busid.netlify.app/"
              target="_blank"
              className="hover:underline"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="size-5 max-md:size-4 text-gray-700"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
