import { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Badge,
  Flex,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import ricamado from "../../assets/Images/ricamado(3).png";
import exportIcon from "../../assets/Images/export.png";
import projLum from "../../assets/Images/projLum.png";
import hngIntern from "../../assets/Images/hngIntern.png";
import todoApp from "../../assets/Images/todoApp.png";
import decoration from "../../assets/Images/decoration.png";
import finTrack from "../../assets/Images/finTrack.png";
import oldPort from "../../assets/Images/oldPort.png";
import resume from "../../../src/oluwasegunAdeniyiResume.pdf";
import weather from "../../../src/assets/Images/weather.png";
import blogPost from "../../../src/assets/Images/blogPost.png";
import pigGame from "../../../src/assets/Images/pig-game.png";
import reconXi from "../../../src/assets/Images/reconxi-home.webp";
import myPortfolio from "../../../src/assets/Images/myPortfolio(3).png";
import matepair from "../../../src/assets/Images/matepair.png";
import ctg from "../../../src/assets/Images/ctg.png";

import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const Experience = () => {
  const [seeMoreProjects, setSeeMoreProjects] = useState(false);

  const handleSeeMoreProjects = () => {
    setSeeMoreProjects(!seeMoreProjects);
  };

  const ExperienceItem = ({
    image,
    title,
    company,
    date,
    description,
    employmentType,
    badges,
    link,
  }) => (
    <Box
      as="a"
      href={link}
      target="_self"
      rel="noopener noreferrer"
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textDecoration: "none",
      }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        mb="32px"
        align="start"
        gap="16px"
      >
        {/* Image and Badges */}
        <Box flexShrink={0} width={{ base: "100%", lg: "300px" }}>
          <Image
            src={image}
            alt={company}
            boxSize="100%"
            objectFit="cover"
            borderRadius="8px"
          />
          <Flex
            mt={4}
            justifyContent={{ base: "center", lg: "flex-start" }}
            wrap="wrap"
            gap="8px"
          >
            {badges.map((badge, index) => (
              <Badge
                key={index}
                colorScheme={badge.colorScheme}
                borderRadius={badge.borderRadius}
              >
                {badge.label}
              </Badge>
            ))}
          </Flex>
        </Box>
        {/* Details */}
        <Box flex="1">
          <Flex align="center" justifyContent="space-between" mb="8px">
            <Text fontWeight="400">
              {title} · {company}
            </Text>
            <Image src={exportIcon} alt="Export" />
          </Flex>

          <Flex align="baseline" gap="8px" mb="8px">
            <Text fontSize="sm" color="gray.400">
              {employmentType ? `${employmentType} · ${date}` : date}
            </Text>
          </Flex>
          <Text color="#8A8A8A" mb="8px">
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );

  //  adding proptypes
  ExperienceItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        colorScheme: PropTypes.string.isRequired,
        borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ).isRequired,
    link: PropTypes.string.isRequired,
    employmentType: PropTypes.string,
  };

  return (
    // experience
    <Box borderRadius="8px" padding="16px">
      <Heading size="md" mb="16px" fontWeight={"regular"} color={"#333333"}>
        Experience
      </Heading>

      {/* Ricamado */}
      <ExperienceItem
        image={ricamado}
        title="UI/UX Designer | Frontend Developer"
        company="Ricamado Unique Limited"
        date="March 2024 - Present"
        employmentType={"Contract"}
        description="Spearheaded user-centric interface design, boosting user engagement by 20% through intuitive property search and listing interfaces. Conducted user research with 50+ participants, leading to 5 key UX improvements that increased average session duration by 30%."
        badges={[
          { label: "Figma", colorScheme: "gray", borderRadius: "full" },
          { label: "User Research", colorScheme: "gray", borderRadius: "full" },
          { label: "next.js", colorScheme: "gray", borderRadius: "full" },
          { label: "tailwind css", colorScheme: "gray", borderRadius: "full" },
          {
            label: "User Interface",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://www.ricamado.com.ng"
      />
      <Divider mb={"32px"} />

      {/* reconXi */}
      <ExperienceItem
        image={reconXi}
        title="Frontend Developer"
        company="ReconXi"
        date="Jan 2025 - April 2025"
        employmentType={"Contract"}
        description="ReconXi is built to take the effort out of financial reconciliation. Whether you're managing bank statements, company ledgers, or school accounts, our AI identifies and matches transactions quickly and accurately."
        badges={[
          { label: "Next.js", colorScheme: "gray", borderRadius: "full" },
          { label: "Radix UI", colorScheme: "gray", borderRadius: "full" },
          { label: "shadcn/ui", colorScheme: "gray", borderRadius: "full" },
          { label: "tailwind css", colorScheme: "gray", borderRadius: "full" },
          { label: "react.js", colorScheme: "gray", borderRadius: "full" },
          { label: "framer motion", colorScheme: "gray", borderRadius: "full" },
          { label: "lucide", colorScheme: "gray", borderRadius: "full" },
          {
            label: "Redux",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://reconxi.com"
      />
      <Divider mb={"32px"} />

      {/* mate pair - Flexisaf */}
      <ExperienceItem
        image={matepair}
        title="UI/UX Designer"
        company="Flexisaf"
        employmentType={"Intern"}
        date="Sept 2024 - Dec 2024"
        description="Applied design thinking principles to create user-centered web and mobile experiences during a 3-month intensive internship and completed a final project: MatePair, a mobile-first app that helps users find ideal rooms and roommates, including full UX flow, wireframes, and high-fidelity mockups.

"
        badges={[
          { label: "User Interface", colorScheme: "gray" },
          { label: "User Experience", colorScheme: "gray" },
          { label: "Figma", colorScheme: "gray" },
        ]}
        link="https://dribbble.com/shots/25315195-onboarding/"
      />
      <Divider mb={"32px"} />

      {/* Sidmach */}
      <ExperienceItem
        image={projLum}
        title="Frontend Developer"
        company="Sidmach Technologies"
        employmentType={"Intern"}
        date="Oct 2023 - July 2024"
        description="Collaborated with the developers to build responsive UI components using react.js."
        badges={[
          { label: "Chakra UI", colorScheme: "gray", borderRadius: "full" },
          { label: "React.js", colorScheme: "gray", borderRadius: "full" },
          {
            label: "Redux",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://sidmach.com/"
      />
      <Divider mb={"32px"} />

      {/* HNG */}
      <ExperienceItem
        image={hngIntern}
        title="Frontend Developer"
        company="HNG"
        employmentType={"Intern"}
        date="March 2024 "
        description="HNG Internship is a fast-paced bootcamp for learning digital skills. Converted 15+ design mock-ups into fully functional, responsive web interfaces."
        badges={[
          {
            label: "React.js",
            colorScheme: "gray",
            borderRadius: "full",
          },
          { label: "Next.js", colorScheme: "gray", borderRadius: "full" },
          {
            label: "Redux",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://hng.tech/internship"
      />

      <Button
        mt={4}
        variant="outline"
        gap={2}
        href={resume}
        as={"a"}
        fontWeight={"regular"}
      >
        See Résumé
        <Image src={exportIcon} alt="resume" />
      </Button>

      <Divider my="32px" />
      <Box id="projects" pt={{ base: 8, md: 8 }}>
        {/* This will be inside the Experience component */}
        {/* personal projects */}
        <Heading
          size="md"
          mb="16px"
          fontWeight={"regular"}
          color={"#333333"}
          id="projects"
        >
          Personal Projects
        </Heading>
      </Box>

      {/* Todo App */}
      <ExperienceItem
        image={todoApp}
        title="Frontend Development"
        company="Todo App"
        date="Jan 2024 "
        description="Todo apps are common, but many users still struggle with task management and productivity. I focused on creating a more effective and user-friendly todo app."
        badges={[
          { label: "React.js", colorScheme: "gray", borderRadius: "full" },
          { label: "Chakra UI", colorScheme: "gray", borderRadius: "full" },
          {
            label: "Firebase",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://todosnoteapp.netlify.app/"
      />

      <Divider mb={"32px"} />

      {/* Decoration */}
      <ExperienceItem
        image={decoration}
        title="UI/UX Designer"
        company="Decoration: Curated Contemporary Furniture"
        date="March 2024 "
        description="Decoration is a sleek, user-centric e-commerce platform specializing in modern furniture and home decor. This project showcases a clean, minimalist design that puts the focus on beautifully crafted furniture pieces."
        badges={[
          { label: "Figma", colorScheme: "gray", borderRadius: "full" },
          { label: "User Research", colorScheme: "gray", borderRadius: "full" },
          {
            label: "User Interface",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://dribbble.com/shots/25229776-modern-furniture-decoration?new_shot_upload=true"
      />
      <Divider mb={"32px"} />

      {/* conference ticket generator */}
      <ExperienceItem
        image={ctg}
        title="Frontend Developer"
        company="Conference Ticket Generator"
        date="March 2025"
        description="Conference Ticket Generator is a tool designed to automate the creation of personalized tickets for conference events. It allows organizers to input attendee details, generate unique QR codes or barcodes, and provide digital or printable tickets. The system can be customized for different event types, enabling easy tracking and management of attendees while streamlining the check-in process."
        badges={[
          { label: "Tailwind CSS", colorScheme: "gray", borderRadius: "full" },
          { label: "React.js", colorScheme: "gray", borderRadius: "full" },
          {
            label: "Next.js",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://conference-ticket-generator-sigma-eight.vercel.app/"
      />
      <Divider mb={"32px"} />

      {/* oluwasegun adeniyi */}
      <ExperienceItem
        image={myPortfolio}
        title="UI/UX Designer"
        company="My Portfolio"
        date="Jan 2024"
        description="My portfolio highlights my keen eye for clean designs, focused on creating intuitive, user-centered digital experiences. From wireframes to high-fidelity prototypes, it showcases my approach to solving design problems with clarity, usability, and aesthetic balance."
        badges={[
          {
            label: "user interface",
            colorScheme: "gray",
            borderRadius: "full",
          },
          {
            label: "user experience",
            colorScheme: "gray",
            borderRadius: "full",
          },
          {
            label: "figma",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://dribbble.com/shots/25348353-portfolio"
      />
      <Divider mb={"32px"} />

      {/* FinTrack */}
      <ExperienceItem
        image={finTrack}
        title="Frontend Development | UI/UX Designer"
        company="FinTrack: Your personal finance companion"
        date="April 2024 "
        description="FinTrack is a user-friendly budget application designed to help individuals take control of their finances. This app offers a comprehensive suite of features to track income, expenses, and savings goals, all within an intuitive interface."
        badges={[
          { label: "Chakra UI", colorScheme: "gray" },
          { label: "React.js", colorScheme: "gray" },
          { label: "User Experience", colorScheme: "gray" },
        ]}
        link="https://fintrackerapp.netlify.app/"
      />
      <Divider mb={"32px"} />

      {/* Blog */}
      <ExperienceItem
        image={blogPost}
        title="Frontend Development"
        company="Blog management"
        date="Dec 2024"
        description="Streamline Your Stories – Effortless Blog Management Made Simple!"
        badges={[
          { label: "Tailwind CSS", colorScheme: "gray" },
          { label: "React.js", colorScheme: "gray" },
          { label: "Firebase", colorScheme: "gray" },
        ]}
        link="https://blog-management-blond-one.vercel.app/"
      />
      {/* <Divider mb={"32px"} /> */}

      {/* View more button */}
      <Button
        mt={4}
        variant="outline"
        gap={2}
        onClick={handleSeeMoreProjects}
        as={"a"}
        fontWeight={"regular"}
      >
        {/* See More Projects */}
        {seeMoreProjects ? "See Less Projects" : "See More Projects"}
        {seeMoreProjects ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
      </Button>
      <Divider my={"32px"} />

      {seeMoreProjects && (
        <>
          {/* Weather App */}
          <ExperienceItem
            image={weather}
            title="Frontend Development"
            company="Weather App"
            date="Dec 2024 "
            description="Your Personal Weather Guide – Stay Ahead, Rain or Shine!"
            badges={[
              { label: "React.js", colorScheme: "gray", borderRadius: "full" },
              {
                label: "Tailwind CSS",
                colorScheme: "gray",
                borderRadius: "full",
              },
              {
                label: "Firebase",
                colorScheme: "gray",
                borderRadius: "full",
              },
            ]}
            link="https://weather-forecast-info-app.netlify.app/"
          />

          <Divider mb={"32px"} />

          {/* Old Portfolio */}
          <ExperienceItem
            image={oldPort}
            title="Frontend Development · UI/UX Designer"
            company="Old Portfolio"
            date="March 2024"
            description="My earlier portfolio served as a solid foundation, showcasing my initial projects and skill growth, focusing on UI/UX design and frontend development."
            badges={[
              { label: "Figma", colorScheme: "gray", borderRadius: "full" },
              { label: "Chakra UI", colorScheme: "gray", borderRadius: "full" },
              {
                label: "React.js",
                colorScheme: "gray",
                borderRadius: "full",
              },
            ]}
            link="https://sgttwportfolio.netlify.app/"
          />

          <Divider mb={"32px  "} />

          {/* pig game */}
          <ExperienceItem
            image={pigGame}
            title="Frontend Development  "
            company="Pig Game"
            date="Nov 2023"
            description="Pig Game is a simple dice game where players take turns rolling a die as many times as they wish, adding the roll to a turn total. If a player rolls a 1, they lose all points for that turn and it's the next player's turn. A player can choose to 'hold' to add the turn total to their overall score. The first player to reach a target score (usually 100) wins."
            badges={[
              { label: "HTML", colorScheme: "gray", borderRadius: "full" },
              { label: "CSS", colorScheme: "gray", borderRadius: "full" },
              {
                label: "JavaScript",
                colorScheme: "gray",
                borderRadius: "full",
              },
            ]}
            link="https://pig-game-dun-zeta.vercel.app/"
          />

          <Divider m={"32px 0 0 0"} />
        </>
      )}
    </Box>
  );
};

export default Experience;
