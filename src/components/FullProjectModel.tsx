import { Badge, Button, Indicator, Modal, Image, Group ,Text, ScrollArea} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function FullProjectModel(props: any) {
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Modal.Root
        size={"70%"}
        opened={props.opened}
        onClose={props.close}
        className="font-mono"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Modal.Overlay />
        <Modal.Content className="!rounded-3xl ">
          <Modal.Header className="!border-2 !border-primaryColor !border-b-0 !rounded-tl-3xl !rounded-tr-3xl !bg-bgColor">
            <Modal.Title data-autofocus className="text-white !text-4xl !font-bold flex justify-center items-center gap-7">
              {props.title}{" "}

              {/* {
                props.live ? (<Badge variant="outline" size="lg" color="blue" rightSection={ <Indicator className="px-1 " color="red" size={6} processing></Indicator>}>
                  Live{" "}</Badge>
              ) : (
                <Badge variant="outline" color="gray" rightSection={ <Indicator className="px-1" color="green" size={6} processing ></Indicator> } >
                  Coming Soon{" "} </Badge>
              )} */}

            </Modal.Title>
            <Modal.CloseButton
              size="md"
              iconSize={30}
              className="!bg-bgColor !text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </Modal.Header>
          <Modal.Body className="!bg-bgColor !border-2 !border-primaryColor !border-t-0 !rounded-bl-3xl !rounded-br-3xl pt-4">
            Modal content

            <Image
          className=' !shadow-[0_0_5px_0_#64FFDA] '
          src={props.image}
          height={5}
          alt="Norway"
          radius="xl"
        />

    <Group mt="md" mb="md">
      {
          props.technologies.map((tech:any ,index:number)=>{
              return <Badge key={index} size='xl' variant='outline' color="pink" >{tech}</Badge>
          })
      }
      </Group>

      <Text className='!text-justify !text-white' size="lg" c="dimmed">
        {props.desc}
      </Text>


      <Group mt="md" mb="md" justify="center">
        <a href={props.github} target="_blank" className="!w-[48%]" >
          <Button  variant='outline' color="blue" fullWidth mt="xs" radius="md">
          View Code
        </Button>
        </a>
      
        <a href={props.github} target="_blank" className="!w-[48%]" >
          <Button  variant='filled' color="blue" fullWidth mt="xs" radius="md">
          View Live
        </Button>
        </a>
      

      </Group>

          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      {/* <Button onClick={open}>Open modal</Button> */}
    </div>
  );
}

export default FullProjectModel;
