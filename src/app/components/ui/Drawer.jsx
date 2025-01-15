// "use client"

// import MyButton from "../Button"
// import {
//   DrawerActionTrigger,
//   DrawerBackdrop,
//   DrawerBody,
//   DrawerCloseTrigger,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerRoot,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@chakra-ui/react"
// import { useState } from "react"

// const Drawer = () => {
//   const [open, setOpen] = useState(false)

//   return (
//     <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
//       <DrawerBackdrop />
//       <DrawerTrigger asChild>
//         <MyButton text={'Drawer'} />
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader>
//           <DrawerTitle>Drawer Title</DrawerTitle>
//         </DrawerHeader>
//         <DrawerBody>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </DrawerBody>
//         <DrawerFooter>
//           <DrawerActionTrigger asChild>
//             <MyButton text={'Cancel'} />
//           </DrawerActionTrigger>
//             <MyButton text={'Save'} />
//         </DrawerFooter>
//         <DrawerCloseTrigger />
//       </DrawerContent>
//     </DrawerRoot>
//   )
// }

// export default Drawer
