"use client";

// Data
import { projectsData } from "@/data/projects-data";

// Components
import { Grid, Heading } from "@radix-ui/themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Projects = () => {
  return (
    <div className="h-full container max-w-7xl mx-auto pt-24 sm:pt-28 md:pt-36 lg:pt-38 pb-8 px-4 font-main font-bold">
      <Heading as="h1" size="8" weight="bold">
        My Projects
      </Heading>
      <Grid
        columns={{ initial: "1", sm: "2", md: "3" }}
        gap="8"
        width="100%"
        className="px-4 pt-8 md:px-6 lg:px-8 lg:py-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex justify-items-center items-center">
            <Card className="w-full h-full flex flex-col bg-zinc-700/80 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 hover:bg-zinc-800/60 hover:border-green-500/20 hover:translate-y-[-4px] hover:shadow-xl">
              <CardHeader className="flex-shrink-0">
                <Lens
                  zoomFactor={2}
                  lensSize={150}
                  isStatic={false}
                  ariaLabel="Zoom Area">
                  <Image
                    className="rounded-lg"
                    alt={project.title}
                    src={
                      "https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    width={500}
                    height={500}
                    unoptimized={true}
                  />
                </Lens>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col h-44 md:h-38 overflow-hidden">
                <CardTitle className="text-md md:text-lg font-semibold text-white mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-300 leading-6">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 justify-between items-start">
                <div className="flex flex-wrap gap-2 items-center justify-items-center">
                  {project.technologies.map((tech) => (
                    <div
                      className="bg-zinc-600 p-1 rounded-full"
                      key={tech}>
                      <Avatar className="flex items-center justify-center">
                        <AvatarImage
                          src={`https://cdn.simpleicons.org/${tech}/${tech}`}
                          alt={tech}
                          className="h-7"
                        />
                      </Avatar>
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-between gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline">
                    View on GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline">
                      Live Demo
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Grid>
    </div>
  );
};
export default Projects;
