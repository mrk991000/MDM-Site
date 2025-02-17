import { TelegramIcon } from "../assets/icons/TelegramIcon";
import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import dashboard from "../assets/images/logo.png";

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10 lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            {/* Left section with logo */}
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                   <img
              src={dashboard.src}
              />
                </div>
                
              </div>

              <div className="w-24 mx-auto lg:mx-0 mt-4">
                <a
                  className="inline-block w-9 h-9 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="https://discord.gg/cyXwEgY3"
                  aria-label="Discord"
                >
                  <DiscordIcon  />
                </a>
                <a
                  className="inline-block w-9 h-9 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://telegram.me/moderndownloadmanager"
                  aria-label="Telegram"
                >
                  <TelegramIcon  />
                </a>
              </div>
            </div>

            
          
          </div>
        </div>
      </div>
    </footer>
  );
};
