import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button ,Burger } from '@mantine/core';
import { IconHexagonLetterS , IconX } from '@tabler/icons-react'
import { links } from './Header';


function SideBar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      {/* <Drawer className='md:hidden' position='right' opened={opened} size={"50vw"} onClose={close} title= <IconHexagonLetterS size={60} stroke={1.25}/>  overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} closeButtonProps={{ icon: <IconX size={50} stroke={2} /> }} > */}
        
      <Drawer.Root className='md:hidden !-z-10' position='right' opened={opened} size={"50vw"} onClose={toggle}>
        <Drawer.Overlay className='!-z-0' style={{ backgroundOpacity: 0.5, blur: 4 }} />
        <Drawer.Content className='!-z-0' bg="#0A192f">
          <Drawer.Header  bg="#0A192f">
            {/* <Drawer.Title><IconHexagonLetterS color='#64FFDA' size={60} stroke={1.25}/></Drawer.Title> */}
            {/* <Drawer.CloseButton className='hover:!bg-bgColor' icon= <IconX size={50} color='#64FFDA' stroke={2.9} /> /> */}
          </Drawer.Header>
          <Drawer.Body className='text-white mt-20 flex flex-col items-center  gap-4' >Nav Links 

            {
              links.map((link:any, index:number) => {
                return <a href={`#${link}`} key={index} className='text-textColor hover:text-primaryColor ' > {link} </a>
              })
            }

          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>


      {/* </Drawer> */}

      {/* <Button className='md:!hidden' onClick={open}>Open Drawer</Button> */}

      <Burger className='md:!hidden !z-10' size='lg' color='#64FFDA' opened={opened} onClick={toggle} aria-label="Toggle navigation" />
    </>
  );
}

export default SideBar;