import { Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {
  IMAGE_URL_02,
  PROJECT_02,
  PROJECT_03,
  PROJECT_04,
} from "../../constants/links";

export default function ProjecsPage() {
  const projects = [
    {
      name: "fernandobelotto.dev",
      description: "The source code of this website",
      imageUrl: IMAGE_URL_02,
      link: "https://github.com/fernandobelotto/fernandobelotto.dev",
      tags: ["typescript", "gatsby", "chakra-ui"],
    },
    {
      name: "Lets Kanban",
      description: "Fullstack todo board with React and NestJS",
      imageUrl: PROJECT_04,
      link: "https://github.com/fernandobelotto/kanban",
      tags: ["react", "typescript", "nestjs", "chakra-ui"],
    },
    {
      name: "Chakra Volume Controller",
      description: "Volume Button made with Chakra UI",
      link: "https://github.com/fernandobelotto/chakra-volume-component",
      tags: ["react", "typescript", "chakra-ui"],
      imageUrl: "https://images.unsplash.com/photo-1586867026374-e1a81a2189a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
    },
    {
      name: "Chakra Slider Controlled",
      description: "Slider created with Chakra UI",
      link: "https://github.com/fernandobelotto/chakra-slider-component",
      tags: ["react", "typescript", "chakra-ui"],
      imageUrl: 'https://images.unsplash.com/photo-1526239187794-f8c27c7872ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80'
    },
    {
      name: "Yup Documentation",
      description: "documentation for the yup js library",
      imageUrl: PROJECT_02,
      link: "https://yup-docs.vercel.app/",
      tags: ["react", "typescript", "docussaurus"],
    },
    {
      name: "Nodejs Template",
      description: "express based project for quick api's",
      imageUrl: PROJECT_03,
      link: "https://github.com/fernandobelotto/node_express_template",
      tags: ["express", "sequelize", "mysql"],
    },
    {
      name: "React Audio",
      description: "react project to play with the audio api",
      imageUrl: `https://images.unsplash.com/photo-1618609377864-68609b857e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80`,
      link: "https://github.com/fernandobelotto/react_audio",
      tags: ["react", "web audio api", "chakra-ui"],
    },
    {
      name: "Project Creator",
      description: "project command generator",
      imageUrl: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`,
      link: "http://project-creator.vercel.app",
      tags: ["react", "chakra-ui"],
    },
    {
      name: "React Styling",
      description: "differents ways of styling",
      imageUrl: `https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`,
      link: "https://react-styling-one.vercel.app",
      tags: ["react"],
    },
    {
      name: "Request Gun",
      description: "Nojde js project to test api performance",
      imageUrl: `https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,

      link: "https://github.com/fernandobelotto/request_gun",
      tags: ["typescript", "nodejs"],
    },
  ];

  const { t } = useTranslation();

  return (
    <>
      <Layout pageTitle={t("Projects")} subTitle={t("Open source projects")}>
        <SimpleGrid columns={3} spacing="5" minChildWidth={300}>
          {projects.map((project) => {
            return (
              <Link
                href={project.link}
                isExternal
                style={{ textDecoration: "none" }}
              >
                <ProjectCard {...project} />
              </Link>
            );
          })}
        </SimpleGrid>
      </Layout>
    </>
  );
}
