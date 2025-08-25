import { Mail } from "lucide-react";
import { registeredApps } from "../../constant/registered_apps";
import useAppStore from "../../stores/app.store";
import WindowTitlebar from "../window_titlebar";
import BlankWindow from "./blank_window";
import parse from "html-react-parser";
import { siGithub, siInstagram } from "simple-icons";

const About = () => {
  const app = registeredApps.about;
  const { setToBackground, kill } = useAppStore();

  return (
    <BlankWindow
      appId="about"
      type="tabs"
      titlebar={
        <WindowTitlebar
          icon={app.icon}
          title={app.name}
          action={{
            minimize: {
              enabled: true,
              onClick: () => setToBackground(app.id),
            },
            close: {
              enabled: true,
              onClick: () => kill(app.id),
            },
          }}
        />
      }
      children={[
        {
          id: 0,
          label: "Dev",
          content: (
            <div className="flex w-full flex-col items-center gap-4">
              <div className="flex flex-col gap-2">
                <img
                  src="/copland.gif"
                  alt="Copland Logo"
                  className="float-left m-2 w-40 invert"
                />
                <p className="mx-auto bg-amber-200">whoami</p>
              </div>
              <p className="text-center">
                Hello, my name is{" "}
                <span className="font-semibold">Ananda Steven Firdaus</span>
              </p>
              <p>
                I’m a{" "}
                <span className="text-amber-200 underline">web developer</span>{" "}
                who loves exploring diverse technical and design approaches.
              </p>
              <p>
                {" "}
                I'm currently work with modern stacks like{" "}
                <span className="text-amber-200 underline">React</span>,{" "}
                <span className="text-amber-200 underline">TypeScript</span>,{" "}
                <span className="text-amber-200 underline">TailwindCSS</span>,{" "}
                <span className="text-amber-200 underline">TanStack</span>, and
                frequently use libraries like{" "}
                <span className="text-amber-200 underline">Zustand</span> for
                flexible state management. On the backend side, i've developed
                REST API app with{" "}
                <span className="text-amber-200 underline">Express.js</span> and{" "}
                <span className="text-amber-200 underline">Go</span>.
              </p>
              <p>
                Outside of tech stack i'm mentioned above, I'd love to learn
                anything i come across and even dive deeper into it if I really
                like it.
              </p>
            </div>
          ),
        },
        {
          id: 1,
          label: "Cup of Tea",
          content: (
            <div className="flex w-full flex-col items-center gap-4">
              <h1 className="bg-amber-200 text-center">
                "here's a small cup of stories"
              </h1>
              <div>
                <h1 className="text-xl font-semibold">Tech</h1>
                <img
                  src="/pywal.gif"
                  alt="Linux Pywal"
                  className="float-left mr-4 mb-1 h-[140px]"
                />
                <p className="text-justify">
                  I'm really into tech stuff, especially messing around with
                  Linux. I enjoy exploring different distros, setting up
                  minimalist desktop with window managers like; dwm, i3wm,
                  bspwm, hyprland, you name it. And playing around with
                  open-source tools — half the time it’s just for fun, the other
                  half it’s me going down a rabbit hole of curiosity.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Hobbies</h1>
                <img
                  src="/osu.gif"
                  alt="osu!mania Gameplay"
                  className="float-right mb-1 ml-4 h-[140px]"
                />
                <p className="text-justify">
                  I’m also love games and music. I love RPGs (especially in the
                  Megaten franchise like SMT, Devil Summoner, Persona, etc), and
                  rhythm games like osu!. Music-wise, I’m all over the place:
                  metal, EDM, and even chill ambient stuff depending on the
                  mood. I also play the guitar now and then — it’s a nice way to
                  unwind and just enjoy the moment.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          label: "Contact",
          content: (
            <div className="flex w-full flex-col gap-4">
              <h1 className="text-center">
                I’m open to full-time opportunities as well as freelance
                projects. Feel free to reach out via email or social media.
              </h1>
              <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-2">
                  <Mail />
                  <p>stevenfirdaus2327@gmail.com</p>
                </div>
                <div
                  className="flex items-center gap-2 hover:cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/freikugel0", "_blank")
                  }
                >
                  <div className="size-5">{parse(siGithub.svg)}</div>
                  <p>freikugel0</p>
                </div>
                <div
                  className="flex items-center gap-2 hover:cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/freikugel0/",
                      "_blank",
                    )
                  }
                >
                  <div className="size-5">{parse(siInstagram.svg)}</div>
                  <p>freikugel0</p>
                </div>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
};

export default About;
