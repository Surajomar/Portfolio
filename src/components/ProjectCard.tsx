import React from 'react'
import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModel from './FullProjectModel';

function ProjectCard(props:any) {

  const [opened, { open, close }] = useDisclosure(false);

    return (
    <>
      <Card onClick={open} className='!bg-bgColor !border-primaryColor !border-2 mb-14 cursor-pointer transition-all duration-500 ease-in-out hover:!shadow-[0_0_10px_1px_#64FFDA] hover:!scale-[1.03]' w="380px" shadow="lg" padding="lg" radius="lg" withBorder>
      <Card.Section className='p-3'>
        <Image
          className=' !shadow-[0_0_5px_0_#64FFDA] transition-all duration-300 ease-in-out  hover:!scale-[1.02]'
          src={props.image}
          height={160}
          alt="Norway"
          radius="xl"
        />
      </Card.Section>

      {/* <Group justify="space-between" mt="xs" mb="xs">
        <Text className='!text-2xl !font-bold !text-white' fw={500}>{props.title}</Text>
        {
          props.live ? <Badge variant='outline' color="blue" rightSection={<Indicator className='px-1' color="red" size={6} processing></Indicator>}>Live </Badge> : <Badge variant='outline' color="gray" rightSection={<Indicator className='px-1' color="green" size={6} processing></Indicator>}>Coming Soon </Badge>
        }
      </Group> */}

      <Group  mb="xs">
      {
          props.technologies.map((tech:any ,index:number)=>{
              return <Badge key={index} size='lg' variant='outline' color="pink" >{tech}</Badge>
          })
      }
      </Group>

      <Text className='!text-justify !text-white' lineClamp={5} size="sm" c="dimmed">
        {props.desc}
        </Text>

      <Button  variant='outline' color="blue" fullWidth mt="md" radius="md">
        Show More
      </Button>

{/* <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button> */}
      
    </Card>

    <FullProjectModel opened={opened} close={close} title={props.title} desc={props.desc} image={props.image} live={props.live} link={props.link} github={props.github} technologies={props.technologies}/>

    </>

  )
}

export default ProjectCard