import Image from "next/image";
import React from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const ProjectCard = ({ title, description, imageSrc }: ProjectCardProps) => {
  return (
    <div>
      <Image src="/images/profile.JPG" width={50} height={50} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
