import Vote from "@/components/Vote";
import FacebookIcon from "@/icons/FacebookIcon";
import FacebookMessengerIcon from "@/icons/FacebookMessengerIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 p-4 text-white sm:px-14 lg:px-20">
      <div className="mt-4 flex flex-col items-center justify-center space-y-8 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-4">
        <Vote />
        <p className="text-center text-4xl font-light capitalize italic sm:w-3/5 sm:text-5xl lg:text-6xl">
          Committed to our district for the long term!
        </p>
      </div>

      <hr className="my-8 opacity-25" />

      <div className="flex justify-between pb-4 font-light">
        <p className="text-sm">
          © {year} Friends of Jason Morris.
          <br />
          All rights reserved.
        </p>
        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/JasonMorris4KPS-103854908123702"
            target="blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon altText="Connect with JasonMorris4KPS on Facebook" />
          </a>

          <a href="http://m.me/103854908123702" target="blank" rel="noopener noreferrer">
            <FacebookMessengerIcon altText="Connect with JasonMorris4KPS on Messenger" />
          </a>
        </div>
      </div>
    </footer>
  );
}
