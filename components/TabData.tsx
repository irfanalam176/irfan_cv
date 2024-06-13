"use client"
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

function TabData() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (value:string) => {
    setTimeout(() => {
      setActiveTab(value);
    }, 100);
  };

  return (
    <Tabs defaultValue="home" onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="home">
          <Image 
            src={activeTab === "home" ? "/assets/img/homeActive.svg" : "/assets/img/home.svg"} 
            alt="Home" 
            width={23} 
            height={20} 
          />
          <span>Home</span>
        </TabsTrigger>
        <TabsTrigger value="resume">
          <Image 
            src={activeTab === "resume" ? "/assets/img/resumeActive.svg" : "/assets/img/resume.svg"} 
            alt="Resume" 
            width={23} 
            height={20} 
          />
          <span>Resume</span>
        </TabsTrigger>
        <TabsTrigger value="work">
          <Image 
            src={activeTab === "work" ? "/assets/img/workActive.svg" : "/assets/img/work.svg"} 
            alt="Work" 
            width={23} 
            height={20} 
          />
          <span>Work</span>
        </TabsTrigger>
        <TabsTrigger value="contact">
          <Image 
            src={activeTab === "contact" ? "/assets/img/contactActive.svg" : "/assets/img/contact.svg"} 
            alt="Contact" 
            width={23} 
            height={20} 
          />
          <span>Contact</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home"><Home/></TabsContent>
      <TabsContent value="resume"><Resume/></TabsContent>
      <TabsContent value="work"><Portfolio/></TabsContent>
      <TabsContent value="contact"><Contact/></TabsContent>
    </Tabs>
  );
}

export default TabData;
