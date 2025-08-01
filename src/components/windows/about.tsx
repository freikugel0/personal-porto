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
            <div className="w-full flex flex-col items-center gap-4">
              <div className="flex flex-col gap-2">
                <img
                  src="/copland.gif"
                  className="invert w-40 float-left m-2"
                />
                <p className="bg-amber-200 mx-auto">whoami</p>
              </div>
              <p className="text-center">
                Hello, my name is{" "}
                <span className="font-semibold">Ananda Steven Firdaus</span>
              </p>
              <p>
                I’m a{" "}
                <span className="underline text-amber-200">web developer</span>{" "}
                who loves exploring diverse technical and design approaches.
              </p>
              <p>
                {" "}
                I'm currently work with modern stacks like{" "}
                <span className="underline text-amber-200">React</span>,{" "}
                <span className="underline text-amber-200">TypeScript</span>,{" "}
                <span className="underline text-amber-200">TailwindCSS</span>,{" "}
                <span className="underline text-amber-200">TanStack</span>, and
                frequently use libraries like{" "}
                <span className="underline text-amber-200">Zustand</span> for
                flexible state management. On the backend side, i've developed
                REST API app with{" "}
                <span className="underline text-amber-200">Express.js</span> and{" "}
                <span className="underline text-amber-200">Go</span>.
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
            <div className="w-full flex flex-col items-center gap-4">
              <h1 className="text-center bg-amber-200">
                "here's a small cup of stories"
              </h1>
              <div>
                <h1 className="text-xl font-semibold">Tech</h1>
                <img
                  src="/pywal.gif"
                  className="float-left h-[140px] mr-4 mb-1"
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
                  className="float-right h-[140px] ml-4 mb-1"
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
            <div className="w-full flex flex-col gap-4">
              <h1 className="text-center">
                I’m open to full-time opportunities as well as freelance
                projects. Feel free to reach out via email or social media.
              </h1>
              <div className="flex flex-col items-end gap-4">
                <div className="flex gap-2 items-center">
                  <Mail />
                  <p>stevenfirdaus2327@gmail.com</p>
                </div>
                <div
                  className="flex gap-2 items-center hover:cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/freikugel0", "_blank")
                  }
                >
                  <div className="size-5">{parse(siGithub.svg)}</div>
                  <p>freikugel0</p>
                </div>
                <div
                  className="flex gap-2 items-center hover:cursor-pointer"
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
