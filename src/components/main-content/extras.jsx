// import React from "react";
// import {
//   Box,
//   Text,
//   Heading,
//   Badge,
//   Flex,
//   Image,
//   Button,
//   Divider,
// } from "@chakra-ui/react";
// import ricamado from "../../assets/Images/ricamado.png";
// import projLum from "../../assets/Images/projLum.png";
// import hngIntern from "../../assets/Images/hngIntern.png";
// import todoApp from "../../assets/Images/todoApp.png";
// import decoration from "../../assets/Images/decoration.png";
// import finTrack from "../../assets/Images/finTrack.png";
// import oldPort from "../../assets/Images/oldPort.png";
// import exportIcon from "../../assets/Images/export.png";

// const Experience = () => {
//   return (
// <Box borderRadius={"8px"}>
//   <Heading size="md" padding={"10px"}>
//     Experience
//   </Heading>
//   {/* ricamado */}
//   <Flex mt={4} align="start">
//     <Image
//       src={ricamado}
//       boxSize="100px"
//       objectFit="cover"
//       mr={4}
//       width={"300px"}
//       height={"200px"}
//     />
//     <Box mt={"-moz-initial"}>
//       <Flex gap={4} align={"center"}>
//         <Text fontWeight="bold">
//           UI/UX Designer · Ricamado Unique Limited
//         </Text>
//         <Image src={exportIcon} alt="export" />
//       </Flex>
//       <Flex align={"baseline"} gap={"16px"}>
//         <Text>Ricamado</Text>
//         <Text fontSize="sm" color="gray.500">
//           March 2024 - Present
//         </Text>
//       </Flex>
//       <Text mt={2} color="gray.600">
//         Spearheaded user-centric interface design, boosting user engagement
//         by 20% through intuitive property search and listing interfaces.
//         Conducted user research with 50+ participants, leading to 5 key UX
//         improvements that increased average session duration by 30%.
//       </Text>
//     </Box>
//   </Flex>
//   <Flex mt={8} align="start">
//     <Flex direction="row" align="start">
//       <Badge colorScheme="purple" mr={2}>
//         Figma
//       </Badge>
//       <Badge colorScheme="teal" mr={2}>
//         User Research
//       </Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Flex>
//   <Divider my={"32px"} />

//   {/* sidmach */}
//   <Flex
//     mt={4}
//     align="start"
//     _hover={{ bg: "#f5f5f5", borderRadius: "8px" }}
//   >
//     <Image
//       src={projLum}
//       boxSize="100px"
//       objectFit="cover"
//       mr={4}
//       width={"300px"}
//       height={"200px"}
//     />
//     <Box mt={"-moz-initial"}>
//       <Flex gap={4} align={"center"}>
//         <Text fontWeight="bold">
//           Frontend Developer · Sidmach Technologies
//         </Text>
//         <Image src={exportIcon} alt="export" />
//       </Flex>

//       <Flex align={"center"} gap={"16px"}>
//         <Text>Project Luminate</Text>
//         <Text fontSize="sm" color="gray.500">
//           Oct 2023 - July 2024
//         </Text>
//       </Flex>
//       <Text mt={2} color="gray.600">
//         Collaborated with the developers to build responsive UI components
//         using react.js
//       </Text>
//     </Box>
//   </Flex>
//   <Flex mt={8} align="start">
//     <Flex direction="row" align="start">
//       <Badge colorScheme="purple" mr={2}>
//         Figma
//       </Badge>
//       <Badge colorScheme="teal" mr={2}>
//         User Research
//       </Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Flex>
//   <Divider my={"32px"} />

//   {/* hng */}
//   <Flex mt={4} align="start">
//     <Image
//       src={hngIntern}
//       boxSize="100px"
//       objectFit="cover"
//       mr={4}
//       width={"300px"}
//       height={"200px"}
//     />
//     <Box mt={"-moz-initial"}>
//       <Flex gap={4} align={"center"}>
//         <Text fontWeight="bold">Frontend Developer · HNG</Text>
//         <Image src={exportIcon} alt="export" />
//       </Flex>

//       <Flex align={"center"} gap={"16px"}>
//         <Text>Intern</Text>
//         <Text fontSize="sm" color="gray.500">
//           March 2024 - Present
//         </Text>
//       </Flex>
//       <Text mt={2} color="gray.600">
//         HNG Internship is a fast-paced bootcamp for learning digital skills
//         Converted 15+ design mock-ups into fully functional, responsive web
//         interfaces
//       </Text>
//     </Box>
//   </Flex>
//   <Flex mt={8} align="start">
//     <Flex direction="row" align="start">
//       <Badge colorScheme="purple" mr={2}>
//         Figma
//       </Badge>
//       <Badge colorScheme="teal" mr={2}>
//         User Research
//       </Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Flex>
//   <Flex mt={4}>
//     <Button
//       borderRadius="8px"
//       colorScheme="gray"
//       mb="4px"
//       mt="16px"
//       rightIcon={<Image src={exportIcon} />}
//       variant="outline"
//     >
//       See Résumé
//     </Button>
//   </Flex>
//   <Divider my={"32px"} />

//   {/* personal projects */}
//   <Heading size="md" padding={"10px"}>
//     Personal projects
//   </Heading>
//   {/* todo app */}
//   <Flex mt={4} align="start">
//     <Image
//       src={todoApp}
//       boxSize="100px"
//       objectFit="cover"
//       mr={4}
//       width={"300px"}
//       height={"200px"}
//     />
//     <Box mt={"-moz-initial"}>
//       <Flex gap={4} align={"center"}>
//         <Text fontWeight="bold">Frontend Development</Text>
//         <Image src={exportIcon} alt="export" />
//       </Flex>
//       <Flex align={"baseline"} gap={"16px"}>
//         <Text>Todo App</Text>
//         <Text fontSize="sm" color="gray.500">
//           March 2024 - Present
//         </Text>
//       </Flex>
//       <Text mt={2} color="gray.600">
//         Todo apps are common, but many users still struggle with task
//         management and productivity. I focused on creating a more effective
//         and user-friendly todo app.
//       </Text>
//     </Box>
//   </Flex>
//   <Flex mt={8} align="start">
//     <Flex direction="row" align="start">
//       <Badge colorScheme="purple" mr={2}>
//         Figma
//       </Badge>
//       <Badge colorScheme="teal" mr={2}>
//         User Research
//       </Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Flex>
//   <Divider my={"32px"} />

//   {/* decoration */}
//   <Flex mt={4} align="start">
//     <Image
//       src={decoration}
//       boxSize="100px"
//       objectFit="cover"
//       mr={4}
//       width={"300px"}
//       height={"200px"}
//     />
//     <Box mt={"-moz-initial"}>
//       <Flex gap={4} align={"center"}>
//         <Text fontWeight="bold">UI/UX Designer</Text>
//         <Image src={exportIcon} alt="export" />
//       </Flex>

//       <Flex align={"baseline"} gap={"16px"}>
//         <Text>Decoration: Curated Contemporary Furniture</Text>
//         <Text fontSize="sm" color="gray.500">
//           March 2024 - Present
//         </Text>
//       </Flex>
//       <Text mt={2} color="gray.600">
//         Decoration is a sleek, user-centric e-commerce platform specializing
//         in modern furniture and home decor. This project showcases a clean,
//         minimalist design that puts the focus on beautifully crafted
//         furniture pieces
//       </Text>
//     </Box>
//   </Flex>
//   <Flex mt={8} align="start">
//     <Flex direction="row" align="start">
//       <Badge colorScheme="purple" mr={2}>
//         Figma
//       </Badge>
//       <Badge colorScheme="teal" mr={2}>
//         User Research
//       </Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Flex>
//   <Divider my={"32px"} />

//   {/* finTrack */}
//   <Flex mt={4} align="start">
//     <Image
//       src={finTrack}
//       boxSize="100px"
//       objectFit="cover"
//       mr={4}
//       width={"300px"}
//       height={"200px"}
//     />
//     <Box mt={"-moz-initial"}>
//       <Flex gap={4} align={"center"}>
//         <Text fontWeight="bold">Frontend Development · UI/UX Designer</Text>

//         <Image src={exportIcon} alt="export" />
//       </Flex>

//       <Flex align={"baseline"} gap={"16px"}>
//         <Text>FinTrack: Your personal finance companion</Text>
//         <Text fontSize="sm" color="gray.500">
//           March 2024 - Present
//         </Text>
//       </Flex>
//       <Text mt={2} color="gray.600">
//         FinTrack is a user-friendly budget application designed to help
//         individuals take control of their finances. This app offers a
//         comprehensive suite of features to track income, expenses, and
//         savings goals, all within an intuitive interface
//       </Text>
//     </Box>
//   </Flex>
//   <Flex mt={8} align="start">
//     <Flex direction="row" align="start">
//       <Badge colorScheme="purple" mr={2}>
//         Figma
//       </Badge>
//       <Badge colorScheme="teal" mr={2}>
//         User Research
//       </Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Flex>
//   <Divider my={"32px"} />

//   {/* old portfolio */}
//   <Flex mt={4} align="start">
//     <Image
//       src={oldPort}
//       boxSize="100px"
//       objectFit="cover"
//       mr={4}
//       width={"300px"}
//       height={"200px"}
//     />
//     <Box mt={"-moz-initial"}>
//       <Flex gap={4} align={"center"}>
//         <Text fontWeight="bold">Frontend Development · UI/UX Designer</Text>
//         <Image src={exportIcon} alt="export" />
//       </Flex>

//       <Flex align={"center"} gap={"16px"}>
//         <Text>Old Portfolio </Text>
//         <Text fontSize="sm" color="gray.500">
//           March 2024 - Present
//         </Text>
//       </Flex>
//       <Text mt={2} color="gray.600">
//         My earlier portfolio served as a solid foundation, showcasing my
//         initial projects and skill growth, focusing on UI/UX design and
//         frontend development.
//       </Text>
//     </Box>
//   </Flex>
//   <Flex mt={8} align="start">
//     <Flex direction="row" align="start">
//       <Badge colorScheme= "gray" mr={2} borderRadius={"full"}>
//         Figma
//       </Badge>
//       <Badge colorScheme="teal" mr={2}>
//         User Research
//       </Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Flex>
//   <Flex mt={4}>
//     <Button
//       borderRadius="8px"
//       colorScheme="gray"
//       mb="4px"
//       mt="16px"
//       rightIcon={<Image src={exportIcon} />}
//       variant="outline"
//     >
//       View more project
//     </Button>
//   </Flex>
//   <Divider my={"32px"} />

//   {/* pig game */}
//   <Flex mt={4} align="start">
//     <Image
//       src={hngIntern}
//       boxSize="100px"
//       objectFit="cover"
//       mr={4}
//       width={"300px"}
//       height={"200px"}
//     />
//     <Box mt={"-moz-initial"}>
//       <Flex gap={4} align={"center"}>
//         <Text fontWeight="bold">Frontend Development</Text>
//         <Image src={exportIcon} alt="export" />
//       </Flex>

//       <Flex align={"center"} gap={"16px"}>
//         <Text>Pig game</Text>
//         <Text fontSize="sm" color="gray.500">
//           March 2024 - Present
//         </Text>
//       </Flex>
//       <Text mt={2} color="gray.600">
//         Pig Game is an interactive two-player dice game built entirely with
//         vanilla JavaScript, HTML, and CSS. This project showcases front-end
//         development skills and the ability to implement complex game logic
//       </Text>
//     </Box>
//   </Flex>
//   <Flex mt={8} align="start">
//     <Flex direction="row" align="start">
//       <Badge colorScheme="purple" mr={2}>
//         Figma
//       </Badge>
//       <Badge colorScheme="teal" mr={2}>
//         User Research
//       </Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Flex>

//   <Divider my={"32px"} />
// </Box>
//   );
// };

// export default Experience;
// inside --------- chat res
// <Flex
//   direction={{ base: "column", md: "column" }}
//   mb="32px"
//   align="start"
//   gap="16px"
//   padding={"10px"}
// >
//   <Divider />
//   {/* Heading */}
//   <Heading size="md">Experience</Heading>

//   {/* ricamado */}
//   {/* Image */}

//   <Box>
//     <Image
//       src={ricamado}
//       alt="Ricamado"
//       boxSize={{ base: "100%", md: "300px" }}
//       objectFit="cover"
//       borderRadius="8px"
//     />

//     {/* Badges Under Image */}
//     <Flex
//       mt={4}
//       justifyContent={{ base: "center", md: "flex-start" }}
//       wrap="wrap"
//       gap="8px"
//     >
//       <Badge colorScheme="purple">Figma</Badge>
//       <Badge colorScheme="teal">User Research</Badge>
//       <Badge colorScheme="orange">User Interface</Badge>
//     </Flex>
//   </Box>

//   {/* Details */}
//   <Box>
//     <Flex align="center" justifyContent="space-between" mb="8px">
//       <Text fontWeight="bold">
//         UI/UX Designer · Ricamado Unique Limited
//       </Text>
//       <Image src={exportIcon} alt="Export" />
//     </Flex>
//     <Flex align="baseline" gap="8px" mb="8px">
//       <Text fontSize="sm" color="gray.500">
//         March 2024 - Present
//       </Text>
//     </Flex>
//     <Text color="gray.600" mb="8px">
//       Spearheaded user-centric interface design, boosting user engagement by
//       20% through intuitive property search and listing interfaces.
//       Conducted user research with 50+ participants, leading to 5 key UX
//       improvements that increased average session duration by 30%.
//     </Text>
//   </Box>
//   <Divider my={"32px"} />
// </Flex>
// -----------------chat res

// import React from "react";
// import {
//   Box,
//   Text,
//   Heading,
//   Badge,
//   Flex,
//   Image,
//   Button,
//   Divider,
// } from "@chakra-ui/react";
// import ricamado from "../../assets/Images/ricamado.png";
// import exportIcon from "../../assets/Images/export.png";
// import projLum from "../../assets/Images/projLum.png";
// import hngIntern from "../../assets/Images/hngIntern.png";
// import todoApp from "../../assets/Images/todoApp.png";
// import decoration from "../../assets/Images/decoration.png";
// import finTrack from "../../assets/Images/finTrack.png";
// import oldPort from "../../assets/Images/oldPort.png";

// const Experience = () => {
//   return (
//     <Box borderRadius={"8px"} direction={{ base: "column", md: "row" }}>
//       <Heading size="md" padding={"10px"}>
//         Experience
//       </Heading>
//       {/* ricamado */}
//       <Flex mt={4} align="start">
//         {/* image with badge */}
//         <Box>
//           <Image
//             src={ricamado}
//             boxSize="100px"
//             objectFit="cover"
//             mr={4}
//             width={"300px"}
//             height={"200px"}
//           />
//           <Flex mt={8} align="start">
//             <Badge colorScheme="purple" mr={2}>
//               Figma
//             </Badge>
//             <Badge colorScheme="teal" mr={2}>
//               User Research
//             </Badge>
//             <Badge colorScheme="orange">User Interface</Badge>
//           </Flex>
//         </Box>
//         {/* details */}
//         <Box mt={"-moz-initial"} direction={{ base: "column", md: "row" }}>
//           <Flex gap={4} align={"center"}>
//             <Text fontWeight="bold">
//               UI/UX Designer · Ricamado Unique Limited
//             </Text>
//             <Image src={exportIcon} alt="export" />
//           </Flex>
//           <Flex align={"baseline"} gap={"16px"}>
//             <Text>Ricamado</Text>
//             <Text fontSize="sm" color="gray.500">
//               March 2024 - Present
//             </Text>
//           </Flex>
//           <Text mt={2} color="gray.600">
//             Spearheaded user-centric interface design, boosting user engagement
//             by 20% through intuitive property search and listing interfaces.
//             Conducted user research with 50+ participants, leading to 5 key UX
//             improvements that increased average session duration by 30%.
//           </Text>
//         </Box>
//       </Flex>
//       <Divider my={"32px"} />

//       {/* sidmach */}
//       <Flex
//         mt={4}
//         align="start"
//         _hover={{ bg: "#f5f5f5", borderRadius: "8px" }}
//       >
//         <Image
//           src={projLum}
//           boxSize="100px"
//           objectFit="cover"
//           mr={4}
//           width={"300px"}
//           height={"200px"}
//         />
//         <Box mt={"-moz-initial"}>
//           <Flex gap={4} align={"center"}>
//             <Text fontWeight="bold">
//               Frontend Developer · Sidmach Technologies
//             </Text>
//             <Image src={exportIcon} alt="export" />
//           </Flex>

//           <Flex align={"center"} gap={"16px"}>
//             <Text>Project Luminate</Text>
//             <Text fontSize="sm" color="gray.500">
//               Oct 2023 - July 2024
//             </Text>
//           </Flex>
//           <Text mt={2} color="gray.600">
//             Collaborated with the developers to build responsive UI components
//             using react.js
//           </Text>
//         </Box>
//       </Flex>
//       <Flex mt={8} align="start">
//         <Flex direction="row" align="start">
//           <Badge colorScheme="purple" mr={2}>
//             Figma
//           </Badge>
//           <Badge colorScheme="teal" mr={2}>
//             User Research
//           </Badge>
//           <Badge colorScheme="orange">User Interface</Badge>
//         </Flex>
//       </Flex>
//       <Divider my={"32px"} />

//       {/* hng */}
//       <Flex mt={4} align="start">
//         <Image
//           src={hngIntern}
//           boxSize="100px"
//           objectFit="cover"
//           mr={4}
//           width={"300px"}
//           height={"200px"}
//         />
//         <Box mt={"-moz-initial"}>
//           <Flex gap={4} align={"center"}>
//             <Text fontWeight="bold">Frontend Developer · HNG</Text>
//             <Image src={exportIcon} alt="export" />
//           </Flex>

//           <Flex align={"center"} gap={"16px"}>
//             <Text>Intern</Text>
//             <Text fontSize="sm" color="gray.500">
//               March 2024 - Present
//             </Text>
//           </Flex>
//           <Text mt={2} color="gray.600">
//             HNG Internship is a fast-paced bootcamp for learning digital skills
//             Converted 15+ design mock-ups into fully functional, responsive web
//             interfaces
//           </Text>
//         </Box>
//       </Flex>
//       <Flex mt={8} align="start">
//         <Flex direction="row" align="start">
//           <Badge colorScheme="purple" mr={2}>
//             Figma
//           </Badge>
//           <Badge colorScheme="teal" mr={2}>
//             User Research
//           </Badge>
//           <Badge colorScheme="orange">User Interface</Badge>
//         </Flex>
//       </Flex>
//       <Flex mt={4}>
//         <Button
//           borderRadius="8px"
//           colorScheme="gray"
//           mb="4px"
//           mt="16px"
//           rightIcon={<Image src={exportIcon} />}
//           variant="outline"
//         >
//           See Résumé
//         </Button>
//       </Flex>
//       <Divider my={"32px"} />

//       {/* personal projects */}
//       <Heading size="md" padding={"10px"}>
//         Personal projects
//       </Heading>
//       {/* todo app */}
//       <Flex mt={4} align="start">
//         <Image
//           src={todoApp}
//           boxSize="100px"
//           objectFit="cover"
//           mr={4}
//           width={"300px"}
//           height={"200px"}
//         />
//         <Box mt={"-moz-initial"}>
//           <Flex gap={4} align={"center"}>
//             <Text fontWeight="bold">Frontend Development</Text>
//             <Image src={exportIcon} alt="export" />
//           </Flex>
//           <Flex align={"baseline"} gap={"16px"}>
//             <Text>Todo App</Text>
//             <Text fontSize="sm" color="gray.500">
//               March 2024 - Present
//             </Text>
//           </Flex>
//           <Text mt={2} color="gray.600">
//             Todo apps are common, but many users still struggle with task
//             management and productivity. I focused on creating a more effective
//             and user-friendly todo app.
//           </Text>
//         </Box>
//       </Flex>
//       <Flex mt={8} align="start">
//         <Flex direction="row" align="start">
//           <Badge colorScheme="purple" mr={2}>
//             Figma
//           </Badge>
//           <Badge colorScheme="teal" mr={2}>
//             User Research
//           </Badge>
//           <Badge colorScheme="orange">User Interface</Badge>
//         </Flex>
//       </Flex>
//       <Divider my={"32px"} />

//       {/* decoration */}
//       <Flex mt={4} align="start">
//         <Image
//           src={decoration}
//           boxSize="100px"
//           objectFit="cover"
//           mr={4}
//           width={"300px"}
//           height={"200px"}
//         />
//         <Box mt={"-moz-initial"}>
//           <Flex gap={4} align={"center"}>
//             <Text fontWeight="bold">UI/UX Designer</Text>
//             <Image src={exportIcon} alt="export" />
//           </Flex>

//           <Flex align={"baseline"} gap={"16px"}>
//             <Text>Decoration: Curated Contemporary Furniture</Text>
//             <Text fontSize="sm" color="gray.500">
//               March 2024 - Present
//             </Text>
//           </Flex>
//           <Text mt={2} color="gray.600">
//             Decoration is a sleek, user-centric e-commerce platform specializing
//             in modern furniture and home decor. This project showcases a clean,
//             minimalist design that puts the focus on beautifully crafted
//             furniture pieces
//           </Text>
//         </Box>
//       </Flex>
//       <Flex mt={8} align="start">
//         <Flex direction="row" align="start">
//           <Badge colorScheme="purple" mr={2}>
//             Figma
//           </Badge>
//           <Badge colorScheme="teal" mr={2}>
//             User Research
//           </Badge>
//           <Badge colorScheme="orange">User Interface</Badge>
//         </Flex>
//       </Flex>
//       <Divider my={"32px"} />

//       {/* finTrack */}
//       <Flex mt={4} align="start">
//         <Image
//           src={finTrack}
//           boxSize="100px"
//           objectFit="cover"
//           mr={4}
//           width={"300px"}
//           height={"200px"}
//         />
//         <Box mt={"-moz-initial"}>
//           <Flex gap={4} align={"center"}>
//             <Text fontWeight="bold">Frontend Development · UI/UX Designer</Text>

//             <Image src={exportIcon} alt="export" />
//           </Flex>

//           <Flex align={"baseline"} gap={"16px"}>
//             <Text>FinTrack: Your personal finance companion</Text>
//             <Text fontSize="sm" color="gray.500">
//               March 2024 - Present
//             </Text>
//           </Flex>
//           <Text mt={2} color="gray.600">
//             FinTrack is a user-friendly budget application designed to help
//             individuals take control of their finances. This app offers a
//             comprehensive suite of features to track income, expenses, and
//             savings goals, all within an intuitive interface
//           </Text>
//         </Box>
//       </Flex>
//       <Flex mt={8} align="start">
//         <Flex direction="row" align="start">
//           <Badge colorScheme="purple" mr={2}>
//             Figma
//           </Badge>
//           <Badge colorScheme="teal" mr={2}>
//             User Research
//           </Badge>
//           <Badge colorScheme="orange">User Interface</Badge>
//         </Flex>
//       </Flex>
//       <Divider my={"32px"} />

//       {/* old portfolio */}
//       <Flex mt={4} align="start">
//         <Image
//           src={oldPort}
//           boxSize="100px"
//           objectFit="cover"
//           mr={4}
//           width={"300px"}
//           height={"200px"}
//         />
//         <Box mt={"-moz-initial"}>
//           <Flex gap={4} align={"center"}>
//             <Text fontWeight="bold">Frontend Development · UI/UX Designer</Text>
//             <Image src={exportIcon} alt="export" />
//           </Flex>

//           <Flex align={"center"} gap={"16px"}>
//             <Text>Old Portfolio </Text>
//             <Text fontSize="sm" color="gray.500">
//               March 2024 - Present
//             </Text>
//           </Flex>
//           <Text mt={2} color="gray.600">
//             My earlier portfolio served as a solid foundation, showcasing my
//             initial projects and skill growth, focusing on UI/UX design and
//             frontend development.
//           </Text>
//         </Box>
//       </Flex>
//       <Flex mt={8} align="start">
//         <Flex direction="row" align="start">
//           <Badge colorScheme="gray" mr={2} borderRadius={"full"}>
//             Figma
//           </Badge>
//           <Badge colorScheme="teal" mr={2}>
//             User Research
//           </Badge>
//           <Badge colorScheme="orange">User Interface</Badge>
//         </Flex>
//       </Flex>
//       <Flex mt={4}>
//         <Button
//           borderRadius="8px"
//           colorScheme="gray"
//           mb="4px"
//           mt="16px"
//           rightIcon={<Image src={exportIcon} />}
//           variant="outline"
//         >
//           View more project
//         </Button>
//       </Flex>
//       <Divider my={"32px"} />

//       {/* pig game */}
//       <Flex mt={4} align="start">
//         <Image
//           src={hngIntern}
//           boxSize="100px"
//           objectFit="cover"
//           mr={4}
//           width={"300px"}
//           height={"200px"}
//         />
//         <Box mt={"-moz-initial"}>
//           <Flex gap={4} align={"center"}>
//             <Text fontWeight="bold">Frontend Development</Text>
//             <Image src={exportIcon} alt="export" />
//           </Flex>

//           <Flex align={"center"} gap={"16px"}>
//             <Text>Pig game</Text>
//             <Text fontSize="sm" color="gray.500">
//               March 2024 - Present
//             </Text>
//           </Flex>
//           <Text mt={2} color="gray.600">
//             Pig Game is an interactive two-player dice game built entirely with
//             vanilla JavaScript, HTML, and CSS. This project showcases front-end
//             development skills and the ability to implement complex game logic
//           </Text>
//         </Box>
//       </Flex>
//       <Flex mt={8} align="start">
//         <Flex direction="row" align="start">
//           <Badge colorScheme="purple" mr={2}>
//             Figma
//           </Badge>
//           <Badge colorScheme="teal" mr={2}>
//             User Research
//           </Badge>
//           <Badge colorScheme="orange">User Interface</Badge>
//         </Flex>
//       </Flex>

//       <Divider my={"32px"} />
//     </Box>
//   );
// };

// export default Experience;

// --------contact/ get in touch
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";

// import {
//   Box,
//   Input,
//   Textarea,
//   FormLabel,
//   FormControl,
//   InputGroup,
//   Image,
//   Text,
//   Button,
//   FormErrorMessage,
//   Heading,
//   InputLeftElement,
//   Divider,
//   useToast,
//   InputRightElement,
// } from "@chakra-ui/react";
// import user from "../../assets/Images/user.png";
// import sms from "../../assets/Images/sms.png";
// import smsTracking from "../../assets/Images/sms-tracking.png";
// import exportIcon from "../../assets/Images/export.png";

// const GetInTouch = () => {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [message, setMessage] = useState("");
//   // const toast = useToast();

//   // useEffect(() => {
//   //   emailjs.init("adeniyisegun025@gmail.com");
//   // }, []);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   // try{
//   //   const response =  await fetch("http://formspree.io/f/mkgwngb",{
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({
//   //       name:name,
//   //       email:email,
//   //       message: message,
//   //     })
//   //   })

//   // }

//   return (
//     <Box as="form" onSubmit={handleSubmit(onSubmit)} p={"10px"}>
//       <Heading size="md">Get In Touch</Heading>
//       <Text fontWeight="400">Love to hear from you</Text>

//       <FormControl isInvalid={errors.name} isRequired mt={8}>
//         <FormLabel>Name</FormLabel>
//         <InputGroup>
//           <InputLeftElement>{<Image src={user} />}</InputLeftElement>
//           <Input
//             {...register("name", { required: "Name is required" })}
//             placeholder="| Enter your name"
//             bg={"#F5F5F5"}
//           />
//         </InputGroup>
//         <FormErrorMessage>
//           {errors.name && errors.name.message}
//         </FormErrorMessage>
//       </FormControl>

//       <FormControl mt={4} isInvalid={errors.email} isRequired>
//         <FormLabel>Email</FormLabel>
//         <InputGroup>
//           <InputLeftElement>{<Image src={sms} />}</InputLeftElement>

//           <Input
//             {...register("email", {
//               required: "Email is required",
//               pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//             })}
//             placeholder="| Enter your email"
//             bg={"#F5F5F5"}
//           />
//         </InputGroup>
//         <FormErrorMessage>
//           {errors.email && errors.email.message}
//         </FormErrorMessage>
//       </FormControl>

//       <FormControl mt={4} isInvalid={errors.message} isRequired>
//         <FormLabel>Message</FormLabel>
//         <InputGroup>
//           <InputLeftElement>{<Image src={smsTracking} />}</InputLeftElement>

//           <Textarea
//             {...register("message", { required: "Message is required" })}
//             placeholder="| Enter your message"
//             bg={"#F5F5F5"}
//             pl={10}
//           />
//         </InputGroup>
//         <FormErrorMessage>
//           {errors.message && errors.message.message}
//         </FormErrorMessage>
//       </FormControl>

//       <Button mt={4} type="submit" colorScheme="blackAlpha" w={"full"} gap={4} alignItems={"center"}>
//         Send Message
//         <Image src={exportIcon}  />
//       </Button>

//       <Divider my={"32px"} color={"orange"} stroke={8} />
//     </Box>
//   );
// };

// export default GetInTouch;

// ------------chat res
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import {
//   Box,
//   Input,
//   Textarea,
//   FormLabel,
//   FormControl,
//   InputGroup,
//   Image,
//   Text,
//   Button,
//   FormErrorMessage,
//   Heading,
//   InputLeftElement,
//   Divider,
//   useToast,
// } from "@chakra-ui/react";
// import user from "../../assets/Images/user.png";
// import sms from "../../assets/Images/sms.png";
// import smsTracking from "../../assets/Images/sms-tracking.png";
// import exportIcon from "../../assets/Images/export.png";

// const GetInTouch = () => {
//   const toast = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   // const onSubmit = (data) => {
//   //   console.log(data);
//   //   // Add your form submission logic here (e.g., API call)
//   // };
//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       const response = await fetch("https://formspree.io/f/mzzbvrdg", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         setSubmitSuccess(true);
//         toast({
//           title: "Message sent successfully!",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//         });
//         reset();
//       } else {
//         throw new Error("Failed to send message");
//       }
//     } catch (error) {
//       toast({
//         title: "Error sending message",
//         description: "Please try again later",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Box
//       as="form"
//       onSubmit={handleSubmit(onSubmit)}
//       p={4}
//       maxW="600px"
//       mx="auto" // Centers the form horizontally
//     >
//       <Heading size="md" mb={2} textAlign="center">
//         Get In Touch
//       </Heading>
//       <Text fontWeight="400" textAlign="center" mb={8}>
//         Love to hear from you
//       </Text>

//       {/* Name Field */}
//       <FormControl isInvalid={errors.name} isRequired mb={4}>
//         <FormLabel>Name</FormLabel>
//         <InputGroup>
//           <InputLeftElement>
//             <Image src={user} alt="user icon" />
//           </InputLeftElement>
//           <Input
//             {...register("name", { required: "Name is required" })}
//             placeholder="Enter your name"
//             bg="#F5F5F5"
//           />
//         </InputGroup>
//         <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//       </FormControl>

//       {/* Email Field */}
//       <FormControl isInvalid={errors.email} isRequired mb={4}>
//         <FormLabel>Email</FormLabel>
//         <InputGroup>
//           <InputLeftElement>
//             <Image src={sms} alt="email icon" />
//           </InputLeftElement>
//           <Input
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                 message: "Invalid email address",
//               },
//             })}
//             placeholder="Enter your email"
//             bg="#F5F5F5"
//           />
//         </InputGroup>
//         <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//       </FormControl>

//       {/* Message Field */}
//       <FormControl isInvalid={errors.message} isRequired mb={6}>
//         <FormLabel>Message</FormLabel>
//         <InputGroup>
//           <InputLeftElement>
//             <Image src={smsTracking} alt="message icon" />
//           </InputLeftElement>
//           <Textarea
//             {...register("message", { required: "Message is required" })}
//             placeholder="Enter your message"
//             bg="#F5F5F5"
//             pl="10"
//           />
//         </InputGroup>
//         <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
//       </FormControl>

//       {/* Submit Button */}
//       <Button
//         type="submit"
//         colorScheme="teal"
//         w="full"
//         isLoading={isSubmitting}
//         rightIcon={<Image src={exportIcon} alt="submit icon" />}
//       >
//         Send Message
//       </Button>

//       <Divider my={8} />
//     </Box>
//   );
// };

// export default GetInTouch;

// --------------- still get in touch with clear

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   Box,
//   Input,
//   Textarea,
//   FormLabel,
//   FormControl,
//   InputGroup,
//   Image,
//   Text,
//   Button,
//   FormErrorMessage,
//   Heading,
//   InputLeftElement,
//   Divider,
//   useToast,
// } from "@chakra-ui/react";

// import user from "../../assets/Images/user.png";
// import sms from "../../assets/Images/sms.png";
// import smsTracking from "../../assets/Images/sms-tracking.png";
// import exportIcon from "../../assets/Images/export.png";

// const GetInTouch = () => {
//   const toast = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       const response = await fetch("https://formspree.io/f/mzzbvrdg", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         setSubmitSuccess(true);
//         toast({
//           title: "Message sent successfully!",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//         });
//         reset();
//       } else {
//         throw new Error("Failed to send message");
//       }
//     } catch (error) {
//       toast({
//         title: "Error sending message",
//         description: "Please try again later",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleClear = () => {
//     reset();
//   };

//   return (
//     <Box as="form" onSubmit={handleSubmit(onSubmit)} p={0}>
//       <Heading size="md">Get In Touch</Heading>
//       <Text fontWeight="400">Love to hear from you</Text>

//       <FormControl isInvalid={errors.name} isRequired mt={8}>
//         <FormLabel>Name</FormLabel>
//         <InputGroup>
//           <InputLeftElement>{<Image src={user} />}</InputLeftElement>
//           <Input
//             {...register("name", { required: "Name is required" })}
//             placeholder="| Enter your name"
//             bg={"#F5F5F5"}
//           />
//         </InputGroup>
//         <FormErrorMessage>
//           {errors.name && errors.name.message}
//         </FormErrorMessage>
//       </FormControl>

//       <FormControl mt={4} isInvalid={errors.email} isRequired>
//         <FormLabel>Email</FormLabel>
//         <InputGroup>
//           <InputLeftElement>{<Image src={sms} />}</InputLeftElement>
//           <Input
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                 message: "Invalid email address",
//               },
//             })}
//             placeholder="| Enter your email"
//             bg={"#F5F5F5"}
//           />
//         </InputGroup>
//         <FormErrorMessage>
//           {errors.email && errors.email.message}
//         </FormErrorMessage>
//       </FormControl>

//       <FormControl mt={4} isInvalid={errors.message} isRequired>
//         <FormLabel>Message</FormLabel>
//         <InputGroup>
//           <InputLeftElement>{<Image src={smsTracking} />}</InputLeftElement>
//           <Textarea
//             {...register("message", { required: "Message is required" })}
//             placeholder="| Enter your message"
//             bg={"#F5F5F5"}
//             pl={10}
//           />
//         </InputGroup>
//         <FormErrorMessage>
//           {errors.message && errors.message.message}
//         </FormErrorMessage>
//       </FormControl>

//       <Button
//         mt={4}
//         type="submit"
//         colorScheme="blackAlpha"
//         w="full"
//         gap={4}
//         alignItems="center"
//         isLoading={isSubmitting}
//         loadingText="Sending..."
//       >
//         Send Message
//         <Image src={exportIcon} alt="send icon" />
//       </Button>

//       <Button
//         mt={4}
//         type="button"
//         colorScheme="red"
//         w="full"
//         gap={4}
//         alignItems="center"
//         onClick={handleClear}
//       >
//         Clear
//       </Button>

//       <Divider my="32px" color="orange" />
//     </Box>
//   );
// };

// --------------footer
// import React from "react";
// import {
//   Flex,
//   Link,
//   IconButton,
//   Box,
//   Image,
//   Text,
//   VStack,
//   Divider,
// } from "@chakra-ui/react";
// import sgLogo from "../../assets/Images/sgLogo.png";
// import githubIcon from "../../assets/Images/mdi_github.png";
// import dribbleIcon from "../../assets/Images/icon-park-outline_dribble.png";
// import linkedlnIcon from "../../assets/Images/hugeicons_linkedin-01.png";
// import xIcon from "../../assets/Images/akar-icons_x-fill.png";
// import mailIcon from "../../assets/Images/iconoir_mail.png";
// import whatsappIcon from "../../assets/Images/whatsapp.png";

// const Footer = () => {
//   return (
//     <Box>
//       <Flex justifyContent={"center"} gap={2}>
//         <span>·</span>
//         <Link href="#experience" mx={"2px"}>
//           Experience
//         </Link>

//         <span>·</span>
//         <Link href="#about" mx={"2px"}>
//           About
//         </Link>
//         <span>·</span>

//         <Link href="#projects" mx={"2px"}>
//           Projects
//         </Link>
//       </Flex>

//       <Flex justifyContent={"space-between"} mt={8}>
//         <Flex>
//           <Image src={sgLogo} />
//         </Flex>
//         <Flex>
//           <IconButton
//             icon={<Image src={githubIcon} />}
//             variant={"ghost"}
//             aria-label="Dribble"
//           />
//           <IconButton
//             icon={<Image src={dribbleIcon} />}
//             variant={"ghost"}
//             aria-label="Dribble"
//           />
//           <IconButton
//             icon={<Image src={linkedlnIcon} />}
//             variant={"ghost"}
//             aria-label="Dribble"
//           />
//           <IconButton
//             icon={<Image src={xIcon} />}
//             variant={"ghost"}
//             aria-label="Dribble"
//           />
//           <IconButton
//             icon={<Image src={mailIcon} />}
//             variant={"ghost"}
//             aria-label="Dribble"

//           />
//           <IconButton
//             icon={<Image src={whatsappIcon} />}
//             variant={"ghost"}
//             aria-label="Dribble"
//           />
//         </Flex>
//       </Flex>
//       {/* <Divider mt={8} /> */}

//       <VStack>
//         <Text textAlign="center" fontSize="sm" mt="4">
//           © 2024 Oluwasegun Adeniyi. All rights reserved.
//         </Text>
//       </VStack>
//     </Box>
//   );
// };

// export default Footer;

// ----------------chat res
// import React from "react";
// import {
//   Flex,
//   Link,
//   IconButton,
//   Box,
//   Image,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import sgLogo from "../../assets/Images/sgLogo.png";
// import githubIcon from "../../assets/Images/mdi_github.png";
// import dribbleIcon from "../../assets/Images/icon-park-outline_dribble.png";
// import linkedlnIcon from "../../assets/Images/hugeicons_linkedin-01.png";
// import xIcon from "../../assets/Images/akar-icons_x-fill.png";
// import mailIcon from "../../assets/Images/iconoir_mail.png";
// import whatsappIcon from "../../assets/Images/whatsapp.png";

// const Footer = () => {
//   return (
//     <Box as="footer" p={4} bg="gray.50" mt={8}>
//       {/* Links */}
//       <Flex
//         justifyContent="center"
//         gap={4}
//         wrap="wrap"
//         fontSize="sm"
//         color="gray.600"
//         mb={4}
//       >
//         <Link href="#experience">Experience</Link>
//         <span>·</span>
//         <Link href="#about">About</Link>
//         <span>·</span>
//         <Link href="#projects">Projects</Link>
//       </Flex>

//       {/* Logo and Social Media */}
//       <Flex
//         justifyContent="space-between"
//         alignItems="center"
//         direction={{ base: "column", md: "row" }}
//         gap={4}
//         mt={8}
//       >
//         {/* Logo */}
//         <Box>
//           <Image src={sgLogo} alt="Logo"/>
//         </Box>

//         {/* Social Media Icons */}
//         <Flex gap={2}>
//           <IconButton
//             icon={<Image src={githubIcon} alt="GitHub" />}
//             variant="ghost"
//             aria-label="GitHub"
//           />
//           <IconButton
//             icon={<Image src={dribbleIcon} alt="Dribbble" />}
//             variant="ghost"
//             aria-label="Dribbble"
//           />
//           <IconButton
//             icon={<Image src={linkedlnIcon} alt="LinkedIn" />}
//             variant="ghost"
//             aria-label="LinkedIn"
//           />
//           <IconButton
//             icon={<Image src={xIcon} alt="X (Twitter)" />}
//             variant="ghost"
//             aria-label="X (Twitter)"
//           />
//           <IconButton
//             icon={<Image src={mailIcon} alt="Mail" />}
//             variant="ghost"
//             aria-label="Mail"
//           />
//           <IconButton
//             icon={<Image src={whatsappIcon} alt="WhatsApp" />}
//             variant="ghost"
//             aria-label="WhatsApp"
//           />
//         </Flex>
//       </Flex>

//       {/* Footer Text */}
//       <VStack mt={4}>
//         <Text fontSize="sm" color="gray.500" textAlign="center">
//           © 2024 Oluwasegun Adeniyi. All rights reserved.
//         </Text>
//       </VStack>
//     </Box>
//   );
// };

// export default Footer;

// ---------------main content
// import { Box } from "@chakra-ui/react";
// import About from "./About";
// import Experience from "./Experience";
// import GetInTouch from "./GetInTouch";
// import Footer from "./Footer";

// export const MainContent = () => {
//   return (
//     <Box m="16px 32px 32px 380px" p={5} width="auto">
//       <Box id="about" pt={{ base: 6, md: 6 }}>
//         <About />
//       </Box>
//       <Box id="experience" pt={{ base: 6, md: 6 }}>
//         <Experience />
//       </Box>
//       <Box id="getintouch" pt={{ base: 8, md: 8 }}>
//         <GetInTouch />
//       </Box>
//       <Box>
//         <Footer />
//       </Box>
//     </Box>
//   );
// };

// ----------chat res
// import { Box } from "@chakra-ui/react";
// import About from "./About";
// import Experience from "./Experience";
// import GetInTouch from "./GetInTouch";
// import Footer from "./Footer";

// export const MainContent = () => {
//   return (
//     <Box
//       // m={{ base: "16px", md: "16px", lg: "16px 32px 32px 380px" }}
//       // m={{ base: "16px", md: "16px", lg: "16px 32px 32px 380px" }}
//       m="16px 32px 32px 380px"
//       p={5}
//       width="auto"
//       ml={{ base: "0", lg: "380px" }}
//     >
//       {/* About Section */}
//       <Box id="about" pt={{ base: 6, md: 6 }}>
//         <About />
//       </Box>

//       {/* Experience Section */}
//       {/* <Box id="experience" pt={{ base: 6, md: 6 }}>
//         <Experience />
//       </Box> */}

//       {/* Get in Touch Section */}
//       {/* <Box id="getintouch" pt={{ base: 8, md: 8 }}>
//         <GetInTouch />
//       </Box> */}

//       {/* Footer */}
//       {/* <Box>
//         <Footer />
//       </Box> */}
//     </Box>
//   );
// };

// ---------------co pilot

// import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
// import profilePicture from "../../assets/Images/profilePicture.png";
// import exportIcon from "../../../dist/assets/export.png";
// import { Link as ScrollLink } from "react-scroll";
// // import { useNavigate } from "react-router-dom";
// // import About from "../main-content/About";
// export function Sidebar() {
//   // const navigate = useNavigate();

//   return (
//     <Flex
//       alignItems="center"
//       bg="#fff"
//       border="1px solid #E6E6E6"
//       borderRadius="8px"
//       direction="column"
//       height="calc(100vh - 72px)"
//       justifyContent="center"
//       left="64px"
//       mb="36px"
//       p={5}
//       position="fixed"
//       top="36px" // Adds space above the sidebar
//       width={{ base: "384px", md: "300px" }}
//       zIndex="1"
//     >
//       <Box>
//         <Image src={profilePicture} alt="profile picture" mb="4px" mt="16px" />
//       </Box>
//       <Box padding="4px 10px" mt="6px">
//         <Text fontWeight="400px" fontSize="24px" color="#333333">
//           Oluwasegun Adeniyi
//         </Text>
//       </Box>
//       <Box mt="20px" padding="4px 10px">
//         <Text
//           fontSize="24px"
//           color="#333333"
//           textAlign="center"
//           fontWeight="light"
//         >
//           UI/UX Designer <br /> Frontend Developer
//         </Text>
//       </Box>
//       {/* about */}
//       <ScrollLink to="about" smooth={true} duration={500}>
//         <Button
//           variant="outline"
//           mt="32px"
//           colorScheme="gray"
//           borderRadius="8px"
//           fontSize="14px"
//           rightIcon={<Image src={exportIcon} />}
//         >
//           About
//         </Button>
//       </ScrollLink>

//       {/* experience */}
//       <ScrollLink to="experience" smooth={true} duration={500}>
//         <Button
//           borderRadius="8px"
//           colorScheme="gray"
//           mt="16px"
//           rightIcon={<Image src={exportIcon} />}
//           variant="outline"
//         >
//           Experience
//         </Button>
//       </ScrollLink>

//       {/* get in touch */}
//       <ScrollLink to="getintouch" smooth={true} duration={500}>
//         <Button
//           borderRadius="8px"
//           colorScheme="gray"
//           mb="4px"
//           mt="16px"
//           rightIcon={<Image src={exportIcon} />}
//           variant="outline"
//         >
//           Get in Touch
//         </Button>
//       </ScrollLink>
//     </Flex>
//   );
// }

// ---------------------------responsive
// import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";

// import profilePicture from "../../assets/Images/profilePicture.png";
// import exportIcon from "../../../dist/assets/export.png";
// import { Link } from "react-scroll";

// export function Sidebar() {
//   const NavButton = ({ to, children }) => (
//     <Button
//       as={Link}
//       to={to}
//       spy={true}
//       smooth={true}
//       offset={-70}
//       duration={500}
//       variant="outline"
//       colorScheme="gray"
//       borderRadius="8px"
//       fontSize="14px"
//       mt="16px"
//       width="auto"
//       rightIcon={<Image src={exportIcon} />}
//       // onClick={onClose}
//     >
//       {children}
//     </Button>
//   );

//   const SidebarContent = () => (
//     <Flex direction="column" align="center" w="full">
//       <Box>
//         <Image src={profilePicture} alt="profile picture" mb="4px" mt="16px" />
//       </Box>
//       <Box padding="4px 10px" mt="6px">
//         <Text
//           fontWeight="400"
//           fontSize={{ base: "20px", md: "24px" }}
//           color="#333333"
//         >
//           Oluwasegun Adeniyi
//         </Text>
//       </Box>
//       <Box mt="20px" padding="4px 10px">
//         <Text
//           fontSize={{ base: "20px", md: "24px" }}
//           color="#333333"
//           textAlign="center"
//           fontWeight="light"
//         >
//           UI/UX Designer <br /> Frontend Developer
//         </Text>
//       </Box>

//       <NavButton to="about">About</NavButton>
//       <NavButton to="experience">Experience</NavButton>
//       <NavButton to="contact">Get in Touch</NavButton>
//     </Flex>
//   );

//   return (
//     <>
//       <Flex
//         display={{ base: "flex", md: "flex" }}
//         alignItems={{ base: "center" }}
//         bg="#fff"
//         border="1px solid #E6E6E6"
//         borderRadius="8px"
//         direction="column"
//         height="calc(100vh - 72px)"
//         left={{ lg: "64px", md: "32px", base: "64px" }}
//         justifyContent={{ base: "center" }}
//         mb="36px"
//         p={5}
//         position="fixed"
//         top="36px"
//         width={{ base: "300px", lg: "384px" }}
//         zIndex="1"
//       >
//         <SidebarContent />
//       </Flex>
//     </>
//   );
// }

// ---------------working
// import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";

// import profilePicture from "../../assets/Images/profilePicture.png";
// import exportIcon from "../../../dist/assets/export.png";
// import { Link } from "react-scroll";

// export function Sidebar() {
//   const NavButton = ({ to, children }) => (
//     <Button
//       as={Link}
//       to={to}
//       spy={true}
//       smooth={true}
//       offset={-70}
//       duration={500}
//       variant="outline"
//       colorScheme="gray"
//       borderRadius="8px"
//       fontSize="14px"
//       mt="16px"
//       width="auto"
//       rightIcon={<Image src={exportIcon} />}
//       // onClick={onClose}
//     >
//       {children}
//     </Button>
//   );

//   const SidebarContent = () => (
//     <Flex direction="column" align="center" w="full">
//       <Box>
//         <Image src={profilePicture} alt="profile picture" mb="4px" mt="16px" />
//       </Box>
//       <Box padding="4px 10px" mt="6px">
//         <Text
//           fontWeight="400"
//           fontSize={{ base: "20px", md: "24px" }}
//           color="#333333"
//         >
//           Oluwasegun Adeniyi
//         </Text>
//       </Box>
//       <Box mt="20px" padding="4px 10px">
//         <Text
//           fontSize={{ base: "20px", md: "24px" }}
//           color="#333333"
//           textAlign="center"
//           fontWeight="light"
//         >
//           UI/UX Designer <br /> Frontend Developer
//         </Text>
//       </Box>

//       <NavButton to="about">About</NavButton>
//       <NavButton to="experience">Experience</NavButton>
//       <NavButton to="contact">Get in Touch</NavButton>
//     </Flex>
//   );

//   return (
//     <Box
//       position="fixed"
//       top="36px"
//       left={{ base: "50%", md: "32px", lg: "64px" }}
//       transform={{ base: "translateX(-50%)", md: "none" }}
//       mb="36px"
//       zIndex="1"
//     >
//       <Flex
//         display={{ base: "flex", md: "flex" }}
//         alignItems={{ base: "center" }}
//         bg="#fff"
//         border="1px solid #E6E6E6"
//         borderRadius="8px"
//         direction="column"
//         height="calc(100vh - 72px)"
//         justifyContent={{ base: "center" }}
//         p={5}
//         width={{ base: "300px", lg: "384px" }}
//       >
//         <SidebarContent />
//       </Flex>
//     </Box>
//   );
// }

// ----------------chat responsive

// import { Box, Flex, Button, Text, Image, IconButton, useDisclosure } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import profilePicture from "../../assets/Images/profilePicture.png";
// import exportIcon from "../../../dist/assets/export.png";
// import { Link as ScrollLink } from "react-scroll";
// import {  Link} from "react-scroll";

// export function Sidebar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       {/* Hamburger Menu for Medium Screens */}
//       {/* <IconButton
//         aria-label="Open Sidebar"
//         icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//         display={{ base: "block", lg: "none" }}
//         position="fixed"
//         top="16px"
//         left="16px"
//         zIndex="2"
//         onClick={isOpen ? onClose : onOpen}
//       /> */}

//       {/* Sidebar Content */}
//       <Flex
//         alignItems="center"
//         bg="#fff"
//         border="1px solid #E6E6E6"
//         borderRadius="8px"
//         direction="column"
//         height={{ base: "auto", lg: "calc(100vh - 72px)" }}
//         justifyContent="center"
//         left={{ lg: "64px" }}
//         mb={{ base: "0", lg: "36px" }}
//         mt={{ base: "0", lg: "36px" }}
//         p={5}
//         position={{ base: "relative", lg: "fixed" }}
//         top={{ lg: "36px" }}
//         width={{ base: "100%", md:"300px" , lg: "300px" }}
//         zIndex="1"
//         overflow={{ base: "hidden", lg: "visible" }}
//         transition="width 0.3s ease"
//       >
//         {isOpen || window.innerWidth >= 992 ? (
//           <>
//             <Box>
//               <Image
//                 src={profilePicture}
//                 alt="profile picture"
//                 mb="4px"
//                 mt="16px"
//               />
//             </Box>
//             <Box padding="4px 10px" mt="6px">
//               <Text fontWeight="400px" fontSize="24px" color="#333333">
//                 Oluwasegun Adeniyi
//               </Text>
//             </Box>
//             <Box mt="20px" padding="4px 10px">
//               <Text
//                 fontSize="24px"
//                 color="#333333"
//                 textAlign="center"
//                 fontWeight="light"
//               >
//                 UI/UX Designer <br /> Frontend Developer
//               </Text>
//             </Box>
//             <ScrollLink to="about" smooth={true} duration={500}>
//               <Button
//                 variant="outline"
//                 mt="32px"
//                 colorScheme="gray"
//                 borderRadius="8px"
//                 fontSize="14px"
//                 rightIcon={<Image src={exportIcon} />}
//               >
//                 About
//               </Button>
//             </ScrollLink>
//             <ScrollLink to="experience" smooth={true} duration={500}>
//               <Button
//                 borderRadius="8px"
//                 colorScheme="gray"
//                 mt="16px"
//                 rightIcon={<Image src={exportIcon} />}
//                 variant="outline"
//               >
//                 Experience
//               </Button>
//             </ScrollLink>
//             <ScrollLink to="getintouch" smooth={true} duration={500}>
//               <Button
//                 borderRadius="8px"
//                 colorScheme="gray"
//                 mb="4px"
//                 mt="16px"
//                 rightIcon={<Image src={exportIcon} />}
//                 variant="outline"
//               >
//                 Get in Touch
//               </Button>
//             </ScrollLink>
//           </>
//         ) : null}
//       </Flex>
//     </>
//   );
// }

// ------------------------co pilot

// ----------------------------app.jsx

// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/main-content/About";
// import { Sidebar } from "./components/sidebar/Sidebar";
// import Experience from "./components/main-content/Experience";
// import { MainContent } from "./components/main-content/MainContent";
// import { Flex, Box, VStack } from "@chakra-ui/react";

// function App() {
//   return (
//     <Router future={{ v7_relativeSplatPath: true }}>
//       <Flex>
//         {/* left section: sidebar */}
//         <VStack>
//           <Sidebar />
//         </VStack>

//         {/* right section: main content */}
//         <VStack>
//           <Box
//             // flex="1" // Makes the main content take up remaining space
//             overflowY="auto" // Enables scrolling for the main content if needed
//           >
//             <MainContent />
//           </Box>
//         </VStack>
//       </Flex>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/experience" element={<Experience />} />
//       </Routes>
//     </Router>
//   );
// }
